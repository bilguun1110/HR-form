"use client";
import React from "react";
import { Step_1 } from "@/components/forgot/Step_1";
import { Step_2 } from "@/components/forgot/Step_2";
import { Step_3 } from "@/components/forgot/Step_3";
import Image from "next/image";

export const Forgot = () => {
  return (
    <div className="flex">
      {" "}
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
        className="flex justify-center items-center "
        style={{
          borderRight: "#B4BCF5 1px solid",
          width: "36%",
          height: "100vh",
        }}
      >
        <Step_3 />
      </div>
    </div>
  );
};
