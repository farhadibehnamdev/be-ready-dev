"use client";
import { useGetTechCategories } from "@/hooks/useGetTechCategories";
import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Spinner,
} from "@nextui-org/react";

export const TechSkillSelect: React.FC = () => {
  const { data, isLoading, status, error } = useGetTechCategories();

  return (
    <div className="container w-full flex justify-center items-center">
      <Autocomplete
        className="max-w-lg"
        labelPlacement="inside"
        placeholder="Select an item"
        variant="bordered"
        aria-label="tech-skill"
      >
        {isLoading ? (
          <AutocompleteItem key={"fetching"} textValue={"fetching"}>
            <Spinner
              color="warning"
              size="md"
              className="flex justify-center items-center"
            />
          </AutocompleteItem>
        ) : error ? (
          <AutocompleteItem key={"error"}>
            <span>Something went wrong...</span>
          </AutocompleteItem>
        ) : status === "success" ? (
          data.map((item) => {
            return (
              <AutocompleteItem key={item.name} textValue={item.name}>
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={item.name}
                    className="flex-shrink-0 bg-slate-200 p-1 rounded-full w-7 h-7"
                    size="sm"
                    src={item.icon}
                  />
                  <div className="flex flex-col">
                    <span className="text-small">{item.name}</span>
                  </div>
                </div>
              </AutocompleteItem>
            );
          })
        ) : null}
      </Autocomplete>
    </div>
  );
};
