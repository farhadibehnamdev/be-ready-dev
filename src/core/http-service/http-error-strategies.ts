import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledException,
  ValidationError,
} from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as BadRequestError;
};

export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as ValidationError;
};

export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "Not found error.",
  } as NotFoundError;
};

export const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "You do not have authorization to access this resource.",
  } as UnauthorizedError;
};

export const unHandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "Something went wrong on the server.",
  } as UnhandledException;
};

export const networkErrorStrategy = () => {
  throw {
    detail: "Network error.",
  } as NetworkError;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: (errorData) =>
    (errorData.errors ? validationErrorStrategy : badRequestErrorStrategy)(
      errorData
    ),
  403: unauthorizedErrorStrategy,
  404: notFoundErrorStrategy,
  500: unHandledExceptionStrategy,
};
