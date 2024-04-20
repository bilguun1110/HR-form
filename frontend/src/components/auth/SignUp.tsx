"use client";
import React from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import { InputBase, InputAdornment, IconButton } from "@mui/material";

export const SignUp = () => {
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const handleClickShowPasswordOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundImage: "url('background.png')",
          width: "36%",
          height: "100vh",
          marginLeft: "14%",
          objectFit: "scale-down",
          backgroundSize: "cover",
        }}
      >
        <div>
          <Image
            src="/techpack.png"
            alt=""
            width={270}
            height={90}
            style={{
              backgroundColor: "#FAF8FD",
              marginTop: "6%",
              marginLeft: "20px",
            }}
          />
        </div>
      </div>

      <div
        style={{
          borderRight: "#B4BCF5 1px solid",
          width: "36%",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "70%",

            marginLeft: "20%",
            marginTop: "20%",
          }}
        >
          <h3 className="text-[30px] font-[600] ">Welcome to TechPack</h3>
          <p className="text-gray-400 text-[16px] mb-[70px]">
            Register your account
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              marginBottom: "100px",
            }}
          >
            <p className="font-[500] text-[18px]">Email</p>
            <InputBase
              sx={{ borderWidth: "1px" }}
              placeholder="Email address"
              className="w-[100%] h-[50px] p-4  text-[14px]  mt-[10px] rounded-[20px] mb-[40px]"
            />
            <p className="font-[500] text-[18px]">Password</p>

            <InputBase
              type={showPasswordOne ? "password" : "text"}
              sx={{ borderWidth: "1px" }}
              placeholder="********"
              className="w-[100%] h-[50px] p-4  text-[14px]  mt-[10px] rounded-[20px] mb-[40px]"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPasswordOne} edge="end">
                    {showPasswordOne ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <p className="font-[500] text-[18px]">Confirm password</p>
            <InputBase
              type={showPassword ? "password" : "text"}
              sx={{ borderWidth: "1px" }}
              placeholder="********"
              className="w-[100%] h-[50px] p-4  text-[14px]  mt-[10px] rounded-[20px] "
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="flex flex-col ">
            <button className="bg-[#6E5FFC]  text-white rounded-[20px] text-[18px] h-[45px] cursor-pointer font-[500] w-[350px]">
              SignUp
            </button>
            <div
              style={{
                display: "flex",
                marginLeft: "50px",
                marginTop: "20px",
                gap: "10px",
              }}
            >
              <p className="text-gray-700 ">Already have an account?</p>
              <p className="text-[#6E5FFC] font-[600] cursor-pointer">Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
