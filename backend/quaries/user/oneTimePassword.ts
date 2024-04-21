import { Request } from "express";
import { getUserByEmail } from "../../util";

export const oneTimePassword = async (req: Request) => {
  const { email, OTP } = req.body;
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("Хэрэлэгч олдсонгүй");
  }

  if (user.OTP === OTP) {
    return "Нууц код зөв байна";
  } else {
    throw new Error("Invalid Code");
  }
};
