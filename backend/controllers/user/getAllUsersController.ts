import { Request, Response } from "express";
import { getAllUsers } from "../../quaries";

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers(req);
    res.send(users);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
