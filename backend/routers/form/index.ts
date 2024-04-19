import Router from "express";
import { createFormController, getAllFormController } from "../../controllers";

export const formRouter = Router();

formRouter.post("/form", createFormController);

formRouter.get("/allForms", getAllFormController);
