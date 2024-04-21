"use client";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
type OTP = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const Step_2 = (props: OTP) => {
  const { handleChange } = props;
  return (
    <div className="flex flex-col gap-[15px] w-[60%]">
      <div className="flex justify-center">
        <CardTitle className="font-medium text-3xl">
          Enter a secret code{" "}
        </CardTitle>
      </div>
      <div>
        <div className="flex flex-col gap-[15px]">
          <p className="font-normal text-base text-gray-600">
            Enter the password you received by email!
          </p>
          <Input
            name="OTP"
            placeholder="Enter code"
            onChange={handleChange}
            className="rounded-[20px] h-[50px] text-gray-600 text-[16px] font-normal"
          />
        </div>
      </div>
    </div>
  );
};
