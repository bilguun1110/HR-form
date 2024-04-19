import { Request, Response } from "express";
import { oneTimePassword } from "../../quaries/user/oneTimePassword";

export const oneTimePasswordController = async (
  req: Request,
  res: Response
) => {
  try {
    const forgot = await oneTimePassword(req);
    res.send(forgot);
  } catch (error: any) {
    res.send(error.message);
  }
};
