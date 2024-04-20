import React from "react";
import { Forms } from "@/components/dashboard/Forms";
const page = () => {
  return (
    <div className="p-[30px] bg-gray-100">
      <div>
        <p className="font-[600] text-[28px] mb-[40px]">Dashboard</p>
        <div className="flex gap-[70px]">
          <p className="font-[400] text-[20px]">Employee</p>
          <p className="font-[400] text-[20px]">Form</p>
        </div>
      </div>
      <div>
        <Forms />
      </div>
    </div>
  );
};

export default page;
