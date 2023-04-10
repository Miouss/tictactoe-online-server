import { Request, Response, NextFunction } from "express";
import { comparePasswords, getAccount } from "@utils";
import { AccountBody } from "@types";
import { AccountNotFoundError, PasswordIncorrectError } from "@classes";

export async function verifyCredentials(
  req: Request,
  _: Response,
  next: NextFunction
) {
  const { username, password } = req.body as AccountBody;

  try {
    const account = await getAccount(username);
    if (!account) throw new AccountNotFoundError();

    const isPasswordMatch = await comparePasswords(password, account.password);
    if (!isPasswordMatch) throw new PasswordIncorrectError();

    next();
  } catch (err) {
    next(err);
  }
}
