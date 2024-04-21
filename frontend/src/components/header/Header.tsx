"use client";
import React from "react";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";

export const Header = () => {
  return (
    <div className="w-[100%] bg-gray-100 h-[70px] flex justify-between items-center pr-[20px]">
      <Image src="/techpack.png" alt="" width={200} height={60} />
      <div className="flex gap-[50px]">
        {" "}
        <div className="flex gap-[10px] items-center">
          <PersonIcon className="w-[30px] h-[30px] text-[#6E5FFC]" />
          <p>Name</p>
        </div>
        <button className="bg-[#6E5FFC] w-[80px] text-[14px] h-[30px] text-white rounded-[15px] cursor-pointer ">
          Logout
        </button>
      </div>
    </div>
  );
};
