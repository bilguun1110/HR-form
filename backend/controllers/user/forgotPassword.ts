import { Request, Response } from "express";
import { forgotPassword } from "../../quaries/user/forgotPasswordQuery";

export const ForgotPasswordController = async (req: Request, res: Response) => {
  try {
    const forgot = await forgotPassword(req, res);
    res.send(forgot);
  } catch (error: any) {
    res.send(error.message);
  }
};
