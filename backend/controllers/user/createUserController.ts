import { Request, Response } from "express";
import { createUserQuery } from "../../quaries";
export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserQuery(req);
    res.send({ user });
  } catch (error: any) {
    res.send(error.message);
  }
};
