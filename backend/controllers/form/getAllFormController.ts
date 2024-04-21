import { Request, Response } from "express";
import { getAllForm } from "../../quaries/form/getAllForm";

export const getAllFormController = async (req: Request, res: Response) => {
  try {
    const forms = await getAllForm(req);
    res.send(forms);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
