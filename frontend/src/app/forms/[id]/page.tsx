import React from "react";
import { formType } from "@/components/form/Resume";
import { Forms } from "@/components/dashboard/Forms";
import { AxiosInstance } from "@/utils/AxiosInstance";
const searchPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const body = {
    filter: {
      $or: [
        {
          firstName: {
            $regex: id,
            $options: "i",
          },
        },
        // {
        //   price: {
        //     $regex: id,
        //   },
        // },
      ],
    },
  };

  const getAllForms = async () => {
    try {
      const { data } = await AxiosInstance.post("allForms", body);
      console.log(data);
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

export default searchPage;
