import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getUserById } from "../../util";
interface JwtPayload {
  email: string;
}

export const loggedIn = async (req: Request, res: Response) => {
  const header = req.headers.authorization;
  try {
    if (!header) {
      throw new Error("not found token");
    }

    const token = header.split(" ")[1];

    const decodedValue = jwt.verify(token, "secret") as { userId: string };

    const user = await getUserById(decodedValue?.userId);

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
