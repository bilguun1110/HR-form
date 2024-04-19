import { Request, Response } from "express";
import { createFormQuery } from "../../quaries";

export const createFormController = async (req: Request, res: Response) => {
  try {
    const form = createFormQuery(req);
    res.send({ form });
  } catch (error: any) {
    res.send(error.message);
  }
};
