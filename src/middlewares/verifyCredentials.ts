import { Request, Response, NextFunction } from "express";
import { comparePasswords, getAccount } from "@utils";
import { AccountBody } from "@types";

export async function verifyCredentials(
  req: Request,
  _: Response,
  next: NextFunction
) {
  const { username, password } = req.body as AccountBody;

  try {
    const account = await getAccount(username);

    await comparePasswords(password, account.password);
    console.log("passwords match");
    next();
  } catch (err) {
    next(err);
  }
}
