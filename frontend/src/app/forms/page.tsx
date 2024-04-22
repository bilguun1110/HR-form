import React from "react";
import { FormType } from "@/components/form/Resume";
import { Forms } from "@/components/dashboard/Forms";
import { AxiosInstance } from "@/utils/AxiosInstance";
const SearchPage = async ({ params }: { params: { id: string } }) => {
  const getAllForms = async () => {
    try {
      const { data } = await AxiosInstance.post<FormType[]>("allForms", {});
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const result = await getAllForms();
  console.log(result);

  return (
    <div>
      <Forms />
    </div>
  );
};

export default SearchPage;
