import classNames from "classnames";
import { AvatarProps } from "./avatar.types";
import { Size } from "../types/size.type";
import Image from "next/image";

export const sizeClasses: Record<Size, string> = {
  tiny: "avatar-xs",
  small: "avatar-sm",
  normal: "avatar-md",
  large: "avatar-lg",
};

export const avatarSize: Record<Size, number> = {
  tiny: 16,
  small: 24,
  normal: 32,
  large: 40,
};

export const Avatar: React.FC<AvatarProps> = ({
  variant,
  size = "normal",
  className,
  src,
}) => {
  const classes = classNames("avatar", className, {
    [`${sizeClasses[size]}`]: size,
    [`avatar-${variant}`]: variant,
  });
  return (
    <span tabIndex={0} className={classes}>
      {src ? (
        <Image
          src={src}
          alt=""
          width={avatarSize[size]}
          height={avatarSize[size]}
          className="rounded-full"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width={avatarSize[size]}
          height={avatarSize[size]}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      )}
    </span>
  );
};
