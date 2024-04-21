"use client";
import { AxiosInstance } from "@/utils/AxiosInstance";
import React, { useEffect, useState } from "react";
import { formType } from "../form/Resume";

const Answers = [
  {
    Occupation: "Software Engineer",
    Firstname: "Bilguun",
    Lastname: "Binderiya",
    Gender: "Male",
    Phone: "99860291",
    Age: "30",
    Address: "Ulaanbaatar, Mongolia",
    Social: "Bilguun",
  },
  {
    Occupation: "UX designer",
    Firstname: "Chinguun",
    Lastname: "Baatar",
    Gender: "Male",
    Phone: "99860291",
    Age: "25",
    Address: "Ulaanbaatar, Mongolia",
    Social: "Chinguun",
  },
];

export const Employee = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await AxiosInstance.get("allUsers");
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {" "}
      <div>
        <div className="flex mb-[20px] gap-[300px]">
          <p className="text-[18px] font-[500] ml-[10px] ">id</p>
          <p className="text-[18px] font-[500] ">Email</p>
        </div>
        <div className="flex flex-col gap-[15px]">
          {users.map(({ _id, email }, index) => (
            <div
              key={index}
              className="flex gap-[100px] w-[100%] h-[50px] rounded-[10px] items-center pl-[15px]  bg-white"
            >
              <p className="w-[200px] text-gray-600 ">{_id}</p>
              <p className="w-[180px] text-gray-600 ">{email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
