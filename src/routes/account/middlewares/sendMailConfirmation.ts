import { Response, NextFunction } from "express";
import nodemailer from "nodemailer";
import { TokenRequest } from "@types";
import { SendingMailError } from "@classes";
import { CLIENT_URL, SMTP_PASSWORD, SMTP_USER } from "@config";

export async function sendMailConfirmation(
  req: TokenRequest,
  _: Response,
  next: NextFunction
) {
  const { token } = req;
  const { email } = req.body;

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
    text: `Click on the link to confirm your account: ${CLIENT_URL}/signup?token=${token}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    next();
  } catch (err) {
    next(new SendingMailError());
  }
}
