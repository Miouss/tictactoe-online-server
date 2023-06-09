import { NextFunction, Request, Response } from "express";
import { getAccount } from "@utils";

export async function changePassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, password } = req.body;

  try {
    const account = await getAccount(username);
    account.password = password;
    await account.save();

    const message = `Password for account '${username}' changed`;
    res.status(200).json({ message });
  } catch (err) {
    next(err);
  }
}
