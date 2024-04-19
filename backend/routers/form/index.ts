import Router from "express";
import { createFormController } from "../../controllers";

export const formRouter = Router();

formRouter.post("/form", createFormController);
