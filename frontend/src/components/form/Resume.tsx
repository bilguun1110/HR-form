"use client";
import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { AxiosInstance } from "@/utils/AxiosInstance";
import { useState } from "react";
import { ChangeEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type formType = {
  specialization: string;
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  age: number;
  address: string;
  email: string;
};

export const Resume = () => {
  const [userdata, setUserdata] = useState<formType>({
    specialization: "",
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    age: 0,
    address: "",
    email: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };
  console.log(userdata);
  const handleSelect = (value: string) => {
    setUserdata({ ...userdata, specialization: value });
  };
  const handleSelectGender = (value: string) => {
    setUserdata({ ...userdata, gender: value });
  };

  const saveForm = async () => {
    try {
      const save = await AxiosInstance.post("form", {
        specialization: userdata.specialization,
        firstName: userdata.firstName,
        lastName: userdata.lastName,
        gender: userdata.gender,
        phone: userdata.phone,
        age: userdata.age,
        address: userdata.address,
        email: userdata.email,
      });
      console.log(save, "save");
      toast.success("Form  sent successfully", {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const initialValues = {
  //   occupation: "",
  //   firstName: "",
  //   lastName: "",
  //   gender: "",
  //   phone: "",
  //   age: 0,
  //   address: "",
  //   email: "",
  // };

  // const validationSchema = Yup.object().shape({
  //   occupation: Yup.string().required("occupation is required"),
  //   firstName: Yup.string().required("First name is required"),

  //   lastName: Yup.string().required("Last name is required"),
  //   gender: Yup.string().required("Gender is required"),
  //   phone: Yup.string()
  //     .matches(
  //       /^[6789][0-9]{7}$/,
  //       "Phone number must start with 6,7,8 or 9 and be 8 digits in total"
  //     )
  //     .required("Phone number is required"),

  //   age: Yup.number().required("Age is required"),
  //   address: Yup.string().required("Address is required"),
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  // });
  // const createFormFunc = async (values: typeof initialValues) => {
  //   try {
  //     const { data } = await AxiosInstance.post("form", values);
  //     console.log("Form values:", values);
  //     console.log(data);
  //   } catch (error: any) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className=" ml-[20%] mt-[10%] ">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col gap-[20px]">
        <Select
          name="
specialization"
          onValueChange={handleSelect}
        >
          <SelectTrigger className="w-[600px] text-[16px] rounded-[10px] border-[0.5px] h-[60px]">
            <SelectValue
              placeholder="Select a 
specialization"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="bg-white cursor-pointer rounded-[10px] border-black">
              <SelectLabel className="cursor-pointer">Occupation</SelectLabel>
              <SelectItem className="cursor-pointer" value="Software Developer">
                Software Developer
              </SelectItem>
              <SelectItem className="cursor-pointer" value="UX/UV designer">
                UX/UV designer
              </SelectItem>
              <SelectItem className="cursor-pointer " value="Web Designer">
                Web Designer
              </SelectItem>
              <SelectItem className="cursor-pointer" value="Architect">
                Architect
              </SelectItem>
              <SelectItem
                className="cursor-pointer"
                value="Network Administrator"
              >
                Network Administrator
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex gap-[50px]">
          <Input
            className="w-[275px] rounded-[10px] border-[0.5px] h-[50px] "
            placeholder="Firstname"
            onChange={handleChange}
            name="firstName"
            // onChange={(e) => setFieldValue("firstName", e.target.value)}
          />
          <Input
            className="w-[275px] rounded-[10px] border-[0.5px] h-[50px] "
            placeholder="Lastname"
            onChange={handleChange}
            name="lastName"
          />
        </div>
        <div className="flex gap-[50px]">
          <Select
            // name="gender"
            // onValueChange={(e) => {
            //   setFieldValue("gender", e);
            // }}
            onValueChange={handleSelectGender}
            name="gender"
          >
            <SelectTrigger className="w-[275px] rounded-[10px] border-[0.5px] h-[50px]">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="bg-white">
                <SelectItem value="Male" className="cursor-pointer">
                  Male
                </SelectItem>
                <SelectItem value="Female" className="cursor-pointer">
                  Female
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            className="w-[275px] rounded-[10px] border-[0.5px] h-[50px]"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-[50px]">
          <Input
            className="w-[275px] rounded-[10px] border-[0.5px] h-[50px]"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <Input
            className="w-[275px] rounded-[10px] border-[0.5px] h-[50px]"
            placeholder="Age"
            onChange={handleChange}
            name="age"
          />
        </div>
        <div>
          <Input
            className="w-[600px] text-[16px] rounded-[10px] border-[0.5px] h-[60px]"
            placeholder="Address"
            onChange={handleChange}
            name="address"
          />
        </div>
        <button
          onClick={saveForm}
          className="bg-[#6E5FFC] mt-[80px] w-[150px] text-white text-[14px] rounded-[15px] h-[50px]"
        >
          Send & Change
        </button>
      </div>
    </div>
  );
};
