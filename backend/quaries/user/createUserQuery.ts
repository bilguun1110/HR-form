import { Request } from "express";
import { UserModel } from "../../db";
export const createUserQuery = async (req: Request) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
      return "Мэдээлэл дутуу байна";
    }

    const user = await UserModel.create({
      name,
      email,
      password,
    });
    return user;
  } catch (error: any) {
    return "Хэрэлэгч бүртгэгдсэн байна";
  }
};
