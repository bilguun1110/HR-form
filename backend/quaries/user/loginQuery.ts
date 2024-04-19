import { Request } from "express";
import { compareHash, tokenGenarate } from "../../util";
import { getUserByEmail } from "../../util";

export const loginQuery = async (req: Request) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (email === "" || password === "") {
      throw new Error("И-майл эсвэл нууц үг хоосон байна.");
    }
    if (!user) {
      throw new Error("Бүртгэлтэй хэрэглэгч олдсонгүй");
    }

    const isPasswordTrue = await compareHash(password, user.password);
    if (!isPasswordTrue) {
      throw new Error("Нууц үгээ эсвэл майл ээ шалгаад дахин оролдоно уу");
    }
    const token = await tokenGenarate(user._id.toString());
    return token;
  } catch (error) {
    return error;
  }
};
