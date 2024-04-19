import NodeMailer from "nodemailer";
import { UserModel } from "../../db";
import { Request, Response } from "express";
import { getUserByEmail } from "../../util";

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const isUser = await getUserByEmail(email);
    if (!isUser) {
      return "Бүртгэлтэй хэрэглэгч олдсонгүй";
    }

    const transporter = NodeMailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "binderiyabilguun@gmail.com",
        pass: "xhzrdhtfhdwxopad",
      },
    });

    const code = Math.floor(Math.random() * 10000);

    const options = {
      from: "binderiyabilguun@gmail.com",
      to: email,
      subject: "Нэг удаагийн нууц код",
      text: `Verification for ${email}
            Your code is: ${code}`,
    };

    await UserModel.findOneAndUpdate({ email: email }, { $set: { OTP: code } });
    await transporter.sendMail(options);
  } catch (error: any) {
    return error;
  }
};
