import { Request, Response } from "express";
import { loginQuery } from "../../quaries";

export const loginController = async (req: Request, res: Response) => {
  try {
    const login = await loginQuery(req);
    res.send({ login });
  } catch (error: any) {
    res.send(error.message);
  }
};
