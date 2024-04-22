"use client";
import React from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import { InputBase, InputAdornment, IconButton } from "@mui/material";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { AxiosInstance } from "@/utils/AxiosInstance";
import { useRouter } from "next/navigation";

type SignupType = {
  email: string;
  password: string;
};

export const SignUp = () => {
  const [error, setError] = useState("");
  const { push } = useRouter();
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const handleClickShowPasswordOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const jumpSignUp = async () => {
    push("/");
  };

  const initialValues = {
    email: "",
    password: "",
    repassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(3, "too short password")
      .max(12, "too long password"),

    repassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Please confirm your password"),
  });

  const createAccountFunc = async (values: typeof initialValues) => {
    try {
      const { data } = await AxiosInstance.post("signup", values);

      if (data.user == "Already exist user") {
        setError(data.user);
      } else {
        push("/");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
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
        style={{
          width: "50%",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "70%",

            marginLeft: "20%",
            marginTop: "10%",
          }}
        >
          <h3 className="text-[30px] font-[600] ">Welcome to TechPack</h3>
          <p className="text-gray-400 text-[16px] mb-[70px]">
            Register your account
          </p>
          <Formik
            initialValues={initialValues}
            onSubmit={createAccountFunc}
            validationSchema={validationSchema}
          >
            {({ setFieldValue }) => (
              <Form>
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
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    className="w-[80%] h-[50px] p-4  text-[14px]  mt-[10px] rounded-[20px] "
                  />

                  <div className="mb-[40px]">
                    <ErrorMessage
                      className="error text-red-600 text-[14px]"
                      name="email"
                      component="span"
                    />
                  </div>
                  <p className="font-[500] text-[18px]">Password</p>

                  <InputBase
                    type={showPasswordOne ? "text" : "password"}
                    sx={{ borderWidth: "1px" }}
                    placeholder="********"
                    name="password"
                    onChange={(e) => setFieldValue("password", e.target.value)}
                    className="w-[80%] h-[50px] p-4  text-[14px]  mt-[10px] rounded-[20px] "
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPasswordOne}
                          edge="end"
                        >
                          {showPasswordOne ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <div className="mb-[40px]">
                    <ErrorMessage
                      className="error text-red-600 text-[14px]"
                      name="password"
                      component="div"
                    />
                  </div>

                  <p className="font-[500] text-[18px]">Confirm password</p>
                  <InputBase
                    type={showPassword ? "text" : "password"}
                    sx={{ borderWidth: "1px" }}
                    placeholder="********"
                    name="repassword"
                    onChange={(e) =>
                      setFieldValue("repassword", e.target.value)
                    }
                    className="w-[80%] h-[50px] p-4  text-[14px]  mt-[10px] rounded-[20px] "
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <div className="">
                    <ErrorMessage
                      className="error text-red-600 text-[14px]"
                      name="repassword"
                      component="div"
                    />
                  </div>
                </div>
                {error && <div className="text-red-500 ml-[20%]">{error}</div>}
                <button
                  type="submit"
                  className="bg-[#6E5FFC] ml-[2%] text-white rounded-[20px] text-[18px] h-[45px] cursor-pointer font-[500] w-[350px]"
                >
                  SignUp
                </button>
                <div className="flex flex-col ">
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "50px",
                      marginTop: "20px",
                      gap: "10px",
                    }}
                  >
                    <p className="text-gray-700 ">Already have an account?</p>
                    <p
                      onClick={jumpSignUp}
                      className="text-[#6E5FFC] font-[600] cursor-pointer"
                    >
                      Login
                    </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
