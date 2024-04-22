"use client";
import React, { ChangeEvent } from "react";
import { Step_1 } from "@/components/forgot/Step_1";
import { Step_2 } from "@/components/forgot/Step_2";
import { Step_3 } from "@/components/forgot/Step_3";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@mui/material";

type PasswordReset = {
  OTP: string;
  email: string;
  password: string;
  rePassword: string;
};
export const Forgot = () => {
  const [userData, setUserData] = useState<Partial<PasswordReset>>({});
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const router = useRouter();

  const changeComponent = async () => {
    if (step === 0) {
      try {
        const result = await axios.post("http://localhost:8000/forgot", {
          email: userData.email,
        });
        console.log(result);

        if (result.data === "Бүртгэлтэй хэрэглэгч олдсонгүй") {
          setError("Email not found");
          setStep(0);
          return;
        }
        setError("");
        setStep(step + 1);
      } catch (error: any) {
        return error.message;
      }
    } else if (step === 1) {
      const { data } = await axios.post("http://localhost:8000/oneTime", {
        email: userData.email,
        OTP: userData.OTP,
      });
      if (data === "Нууц код зөв байна") {
        setError("");
        setStep(step + 1);
      } else {
        setError("Invalid Code");
      }
    } else if (step === 2) {
      const { data } = await axios.post("http://localhost:8000/change", {
        email: userData.email,
        password: userData.password,
      });
      if (userData.password !== userData.rePassword) {
        setError("Password must match");
      } else {
        setError("");
        router.push("/");
      }
    }
  };
  return (
    <div className="flex">
      {" "}
      <div
        style={{
          backgroundImage: "url('background.png')",
          width: "50%",
          height: "100vh",

          objectFit: "scale-down",
          backgroundSize: "cover",
        }}
      >
        <div>
          <Image
            src="/techpack.png"
            alt=""
            width={300}
            height={100}
            style={{
              backgroundColor: "#FAF8FD",
              marginTop: "6%",
              marginLeft: "50px",
            }}
          />
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center "
        style={{
          borderRight: "#B4BCF5 1px solid",
          width: "50%",
          height: "100vh",
        }}
      >
        {step === 0 && <Step_1 handleChange={handleChange} />}
        {step === 1 && <Step_2 handleChange={handleChange} />}
        {step === 2 && <Step_3 handleChange={handleChange} />}
        <button
          className="bg-[#6E5FFC] w-[350px] h-[40px] mt-[50px] rounded-[15px] cursor-pointer text-white"
          disabled={!userData.email}
          onClick={changeComponent}
        >
          Continue
        </button>
        {error && <div className="text-red-600 text-[14px]">{error}</div>}
      </div>
    </div>
  );
};
