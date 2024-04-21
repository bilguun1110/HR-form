import { Request } from "express";
import { UserModel } from "../../db";
import { passwordHash } from "../../util";
import { getUserByEmail } from "../../util";
import { get } from "mongoose";

export const createUserQuery = async (req: Request) => {
  try {
    const { email, password } = req.body;
    const existUser = await getUserByEmail(email);
    if (existUser) {
      return "Already exist user";
    }
    const hashedPassword = await passwordHash(password);
    const user = await UserModel.create({
      email,
      password: hashedPassword,
    });
    console.log(user);

    return user;
  } catch (error: any) {
    return "Already exist user";
  }
};
