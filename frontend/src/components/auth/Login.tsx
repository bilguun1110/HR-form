"use client";
import React from "react";
import Image from "next/image";

export const Login = () => {
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
            width={250}
            height={70}
            style={{
              backgroundColor: "#FAF8FD",
              marginTop: "5%",
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
          backgroundColor: "green",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "70%",
            backgroundColor: "red",
            marginLeft: "70px",
            marginTop: "100px",
            padding: "50px",
          }}
        >
          <div style={{ display: "flex" }}>
            <p>Don't have an account?</p>
            <button>Signup</button>
          </div>
          <h3>Welcome to TechPack</h3>
          <div
            style={{ display: "flex", flexDirection: "column", width: "80%" }}
          >
            <input placeholder="email" />
            <input placeholder="password" />
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};
