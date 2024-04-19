import { Request, Response } from "express";
import { passwordChange } from "../../quaries/user/passwordChange";

export const passwordChangeController = async (req: Request, res: Response) => {
  try {
    const forgot = await passwordChange(req);
    res.send(forgot);
  } catch (error: any) {
    res.send(error.message);
  }
};
