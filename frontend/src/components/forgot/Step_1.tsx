"use client";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
type Email = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const Step_1 = (props: Email) => {
  const { handleChange } = props;
  return (
    <div className="flex flex-col gap-[15px] w-[60%]">
      <div className="flex justify-center">
        <CardTitle className="font-medium text-3xl">Forgot password</CardTitle>
      </div>
      <div>
        <div className="flex flex-col gap-[15px]">
          <p className="font-normal text-base text-gray-600">
            A one-time recovery code will be sent to your email address
          </p>
          <Input
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            className="rounded-[20px] h-[50px] text-gray-600 text-[16px] font-normal"
          ></Input>
        </div>
      </div>
    </div>
  );
};
