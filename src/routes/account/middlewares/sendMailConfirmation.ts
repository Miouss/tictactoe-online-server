import { Response, NextFunction } from "express";
import { TokenRequest } from "@types";
import nodemailer from "nodemailer";

export async function sendMailConfirmation(
  req: TokenRequest,
  _: Response,
  next: NextFunction
) {
  const { token } = req;
  const { email } = req.body;
  const { SMTP_USER, SMTP_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: SMTP_USER,
    to: email,
    subject: "Please confirm your account",
    text: `Click on the link to confirm your account: http://localhost:3001/api/account?token=${token}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    next();
  } catch (err) {
    next(err);
  }
}
