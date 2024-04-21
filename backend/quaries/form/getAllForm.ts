import { FormModel } from "../../db";
import { Request } from "express";

export const getAllForm = async (req: Request) => {
  try {
    const forms = await FormModel.find();

    if (forms === null) {
      throw new Error("not found form");
    }

    return forms;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
