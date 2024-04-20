import React from "react";
import { Input } from "../ui/input";

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
  return (
    <div>
      <div>
        <Input className="w-[100px]" />
      </div>
      <div>
        <div className="flex ">
          {/* {Title.map((el, index) => (
            <div key={index} className="text-[18px] font-[500] ">
              {el}
            </div>
          ))} */}
          <p className="text-[18px] font-[500] ml-[10px] mr-[120px]">
            Occupation
          </p>
          <p className="text-[18px] font-[500] mr-[110px]">Firstname</p>
          <p className="text-[18px] font-[500] mr-[105px]">Lastname</p>
          <p className="text-[18px] font-[500] mr-[40px]">Gender</p>
          <p className="text-[18px] font-[500] mr-[80px]">Phone</p>
          <p className="text-[18px] font-[500] mr-[30px]">Age</p>
          <p className="text-[18px] font-[500] mr-[170px]">Social</p>
          <p className="text-[18px] font-[500] mr-[50px]">Address</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          {Answers.map(
            (
              {
                Occupation,
                Firstname,
                Lastname,
                Gender,
                Phone,
                Age,
                Address,
                Social,
              },
              index
            ) => (
              <div
                key={index}
                className="flex gap-[20px] w-[100%] h-[50px] rounded-[10px] items-center pl-[15px]  bg-white"
              >
                <p className="w-[200px] text-gray-600 ">{Occupation}</p>
                <p className="w-[180px] text-gray-600 ">{Firstname}</p>
                <p className="w-[180px] text-gray-600  ">{Lastname}</p>
                <p className="w-[80px] text-gray-600 ">{Gender}</p>
                <p className="w-[120px] text-gray-600  ">{Phone}</p>
                <p className="w-[50px] text-gray-600  ">{Age}</p>
                <p className="w-[200px] text-gray-600 ">{Social}</p>
                <p className="w-[250px] text-gray-600 ">{Address}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
