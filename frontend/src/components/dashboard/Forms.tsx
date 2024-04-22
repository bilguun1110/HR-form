"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";
import { AxiosInstance } from "@/utils/AxiosInstance";

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

export const Forms = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const [forms, setForms] = useState([]);

  const backPage = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    const fetchData = async () => {
      const body = {
        filter: {
          $or: [
            {
              firstName: {
                $regex: inputValue,
                $options: "i",
              },
            },
            {
              phone: {
                $regex: inputValue,
                $options: "i",
              },
            },
            {
              specialization: {
                $regex: inputValue,
                $options: "i",
              },
            },
            {
              lastName: {
                $regex: inputValue,
                $options: "i",
              },
            },
            {
              email: {
                $regex: inputValue,
                $options: "i",
              },
            },
          ],
        },
      };

      try {
        const { data } = await AxiosInstance.post("allForms", body);
        setForms(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [inputValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="bg-gray-100 h-[100vh] p-[30px]">
      <div className="flex  gap-[30px]">
        <ArrowBackIosNewIcon
          onClick={backPage}
          className="mt-[30px] w-[30px] ml-[20px] cursor-pointer text-[#6E5FFC] h-[30px] "
        />

        <div>
          <h2 className="text-sm text-gray-500">
            Search by Firstname, Lastname, Phone, Specialization,Email
          </h2>
          <div
            style={{
              width: "400px",
              height: "40px",
              alignItems: "center",
              justifyItems: "center",
              borderRadius: "8px",
              paddingLeft: 2,
              gap: 8,
              display: "flex",
              border: "solid",
              borderColor: "gray",
              borderWidth: "0.5px",

              marginBottom: "30px",
            }}
          >
            <SearchIcon className="cursor-pointer" />
            <InputBase
              value={inputValue}
              placeholder="Search"
              className="w-[100%]"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex mb-[20px]">
          <p className="text-[18px] font-[500] ml-[10px] mr-[120px]">
            Specialization
          </p>
          <p className="text-[18px] font-[500] mr-[110px]">Firstname</p>
          <p className="text-[18px] font-[500] mr-[115px]">Lastname</p>
          <p className="text-[18px] font-[500] mr-[45px]">Gender</p>
          <p className="text-[18px] font-[500] mr-[80px]">Phone</p>
          <p className="text-[18px] font-[500] mr-[35px]">Age</p>
          <p className="text-[18px] font-[500] mr-[200px]">Email</p>
          <p className="text-[18px] font-[500] mr-[50px]">Address</p>
        </div>
        <div className="flex flex-col gap-[15px]">
          {forms.map(
            (
              {
                specialization,
                firstName,
                lastName,
                gender,
                phone,
                age,
                address,
                email,
              },
              index
            ) => (
              <div
                key={index}
                className="flex gap-[20px] w-[100%] h-[50px] rounded-[10px] items-center pl-[15px]  bg-white"
              >
                <p className="w-[200px] text-gray-600 ">{specialization}</p>
                <p className="w-[180px] text-gray-600 ">{firstName}</p>
                <p className="w-[180px] text-gray-600  ">{lastName}</p>
                <p className="w-[80px] text-gray-600 ">{gender}</p>
                <p className="w-[120px] text-gray-600  ">{phone}</p>
                <p className="w-[50px] text-gray-600  ">{age}</p>
                <p className="w-[200px] text-gray-600 mr-[50px]">{email}</p>
                <p className="w-[250px] text-gray-600 ">{address}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
