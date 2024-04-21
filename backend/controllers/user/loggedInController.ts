import { Request, Response } from "express";
import { loggedIn } from "../../quaries";

export const loggedInController = async (req: Request, res: Response) => {
  try {
    const user = await loggedIn(req, res);
    res.send({ user });
  } catch (error: any) {
    res.send(error.message);
  }
};
