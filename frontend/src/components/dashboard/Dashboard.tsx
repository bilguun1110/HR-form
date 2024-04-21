"use client";
import React from "react";
import Image from "next/image";
import { Forms } from "@/components/dashboard/Forms";
import { Header } from "@/components/header/Header";
import { useState } from "react";
import { Employee } from "./Employee";
import { AxiosInstance } from "@/utils/AxiosInstance";
import { UserContext } from "@/utils/Context";
import { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/navigation";
import { log } from "console";
import { Resume } from "../form/Resume";

export const Dashboard = () => {
  const [changeForm, setChangeForm] = useState(0);
  const { isUser, setIsUser, loggedInUserData } = useContext(UserContext);
  const { push } = useRouter();

  const emailParts = loggedInUserData.email.split("@");
  const username = emailParts[0];

  // const handleChange = async () => {
  //   if (changeForm === 0) {
  //     try {
  //       const result = await AxiosInstance.get("allForms");
  //       console.log(result);
  //       setChangeForm(1);
  //     } catch (error: any) {
  //       return error.message;
  //     }
  //   } else if (changeForm === 1) {
  //     const result = await AxiosInstance.get("allUsers");
  //     setChangeForm(0);
  //     console.log(result);
  //   }
  // };

  const exitHandle = () => {
    localStorage.removeItem("token");
    setIsUser(false);
    push("/");
  };

  const hadnleChangeForm = () => {
    push("/forms");
  };

  return (
    <div>
      <div className="w-[100%] bg-gray-100 h-[70px] flex justify-between items-center pr-[20px]">
        <Image src="/techpack.png" alt="" width={200} height={60} />
        <div className="flex gap-[50px]">
          {" "}
          <div className="flex gap-[10px] items-center">
            <PersonIcon className="w-[30px] h-[30px] text-[#6E5FFC]" />
            <p>{username}</p>
          </div>
          <button
            onClick={exitHandle}
            className="bg-[#6E5FFC] w-[80px] text-[14px] h-[30px] text-white rounded-[15px] cursor-pointer "
          >
            Logout
          </button>
        </div>
      </div>
      {loggedInUserData.isAdmin === true ? (
        <div className="p-[30px] bg-gray-100">
          <div>
            <div className="flex gap-[70px]">
              <p className="font-[400] text-[20px] text-[#6E5FFC] cursor-pointer">
                Users
              </p>
              <p
                onClick={hadnleChangeForm}
                className="font-[400] text-[20px] cursor-pointer"
              >
                Forms
              </p>
            </div>
          </div>
          <div>
            <Employee />
          </div>
        </div>
      ) : (
        <Resume />
      )}
    </div>
  );
};
