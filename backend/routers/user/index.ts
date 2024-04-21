import Router from "express";
import {
  createUserController,
  getAllUsersController,
  oneTimePasswordController,
  passwordChangeController,
} from "../../controllers";
import { loginController } from "../../controllers";
import { ForgotPasswordController } from "../../controllers/user/forgotPassword";
import { loggedInController } from "../../controllers/user/loggedInController";
export const userRouter = Router();

userRouter.post("/signup", createUserController);

userRouter.post("/login", loginController);

userRouter.post("/forgot", ForgotPasswordController);

userRouter.post("/oneTime", oneTimePasswordController);

userRouter.post("/change", passwordChangeController);

userRouter.get("/allUsers", getAllUsersController);

userRouter.post("/refresh", loggedInController);
