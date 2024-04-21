import { Request } from "express";
import { compareHash, tokenGenarate } from "../../util";
import { getUserByEmail } from "../../util";

export const loginQuery = async (req: Request) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (email === "" || password === "") {
      return "Email and password required";
    }
    if (!user) {
      return "User not found";
    }
    console.log(user);

    const isPasswordTrue = await compareHash(password, user.password);
    if (!isPasswordTrue) {
      return "Wrond email or password";
    }
    const token = await tokenGenarate(user._id.toString());
    return token;
  } catch (error) {
    return error;
  }
};
