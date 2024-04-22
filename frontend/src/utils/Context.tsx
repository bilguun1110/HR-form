"use client";
import axios from "axios";

import { useRouter } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { bool, boolean } from "yup";

export type UserData = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  password: string;
};
export type UserContextType = {
  isUser: boolean;
  setIsUser: Dispatch<SetStateAction<boolean>>;
  loggedInUserData: UserData;
  setLoggedInUserData: Dispatch<SetStateAction<UserData>>;
};
export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

interface Props {
  children?: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<UserContextType>();
  const [checkAdmin, setCheckAdmin] = useState(false);
  const [loggedInUserData, setLoggedInUserData] = useState<UserData>({
    _id: "",
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  });
  const router = useRouter();

  useEffect(() => {
    const token =
      typeof window !== "undefined" && localStorage.getItem("token");

    if (!token) {
      router.push("/");
      return;
    }

    const verifyToken = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/refresh",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
        setLoggedInUserData(data?.user);
        setIsUser(true);
        router.push("/dashboard");
      } catch (error) {
        console.log(error);
        setIsUser(false);
      }
    };

    verifyToken();
  }, [isUser]);

  return (
    <UserContext.Provider
      value={{ isUser, setIsUser, loggedInUserData, setLoggedInUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};
