import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../db";

export const passwordHash = async (password: string) => {
  const salt = await bcrypt.genSaltSync(1);
  const hash = await bcrypt.hashSync(password, salt);

  return hash;
};

export const compareHash = (password: string, hash: string) => {
  const isTrue = bcrypt.compareSync(password, hash);
  return isTrue;
};

export const tokenGenarate = async (userId: string) => {
  const token = await jwt.sign({ userId }, "secret", { expiresIn: "1d" });
  return token;
};

export const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const getUserById = async (_id: string) => {
  const user = await UserModel.findOne({ _id: _id });
  return user;
};
