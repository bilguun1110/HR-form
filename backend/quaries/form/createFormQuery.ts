import { Request } from "express";
import { FormModel } from "../../db";

export const createFormQuery = async (req: Request) => {
  try {
    const {
      specialization,
      firstName,
      lastName,
      gender,
      phone,
      age,
      address,
      social,
    } = req.body;

    const form = await FormModel.create({
      specialization,
      firstName,
      lastName,
      gender,
      phone,
      age,
      address,
      social,
    });
    return form;
  } catch (error: any) {
    return error;
  }
};
