"use client";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import { InputBase, InputAdornment, IconButton } from "@mui/material";

type Password = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Step_3 = (props: Password) => {
  const { handleChange } = props;
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const handleClickShowPasswordOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col gap-[15px] w-[60%]">
      <div className="flex justify-center">
        <CardTitle className="font-medium text-3xl">Change password</CardTitle>
      </div>
      <div>
        <div className="flex flex-col gap-[15px]">
          <p className="font-normal text-base text-gray-600">
            Create a new password!
          </p>
          <p className="font-[500] text-[18px]">Password</p>

          <InputBase
            type={showPasswordOne ? "password" : "text"}
            sx={{ borderWidth: "1px" }}
            placeholder="********"
            name="password"
            onChange={handleChange}
            className="w-[100%] h-[50px] p-4  text-[14px]  rounded-[20px] mb-[30px]"
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
            onChange={handleChange}
            name="rePassword"
            type={showPassword ? "password" : "text"}
            sx={{ borderWidth: "1px" }}
            placeholder="********"
            className="w-[100%] h-[50px] p-4  text-[14px]   rounded-[20px] "
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>
    </div>
  );
};
