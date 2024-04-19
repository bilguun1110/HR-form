import { Request } from "express";
import { UserModel } from "../../db";
export const createUserQuery = async (req: Request) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    if (!email || !phone || !password) {
      return "Мэдээлэл дутуу байна";
    }

    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      phone,
      password,
    });
    return user;
  } catch (error: any) {
    return "Хэрэлэгч бүртгэгдсэн байна";
  }
};
