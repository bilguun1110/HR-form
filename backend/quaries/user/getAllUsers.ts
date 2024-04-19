import { Request } from "express";
import { UserModel } from "../../db";

export const getAllUsers = async (req: Request) => {
  try {
    const users = UserModel.find();

    if (users === null) {
      throw new Error("not found user");
    }

    return users;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
