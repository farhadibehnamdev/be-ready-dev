"use client";
import { API_KEY, API_URL } from "@/configs/global";
import { readData } from "@/core/http-service/http-service";
import { TechCategory } from "@/types/tech-category.interface";
import { useQuery } from "@tanstack/react-query";
import { RawAxiosRequestHeaders } from "axios";

const getCategories = async () => {
  const url = `${API_URL}/question_collectiodn?select=name,icon`;
  const header: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
  };

  const response = await readData<TechCategory[]>(url, header);
  return response;
};
export const useGetTechCategories = () => {
  return useQuery<TechCategory[]>({
    queryKey: ["tech-categories"],
    queryFn: getCategories,
  });
};
