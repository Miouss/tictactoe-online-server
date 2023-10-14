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

    comparePasswords(password, account.password);

    next();
  } catch (err) {
    next(err);
  }
}
