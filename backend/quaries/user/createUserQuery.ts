import { Request } from "express";
import { UserModel } from "../../db";
import { passwordHash } from "../../util";
import { getUserByEmail } from "../../util";
import { get } from "mongoose";

export const createUserQuery = async (req: Request) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
      return "Мэдээлэл дутуу байна";
    }

    console.log("aa");

    const hashedPassword = await passwordHash(password);
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log(user);

    return user;
  } catch (error: any) {
    return "Хэрэлэгч бүртгэгдсэн байна";
  }
};
