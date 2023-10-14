import { Request, Response, NextFunction } from "express";
import { findAccountByUsername } from "@utils";
import { AccountBody } from "@types";

export async function checkAccountDoublon(
  req: Request,
  _: Response,
  next: NextFunction
) {
  const { username } = req.body as AccountBody;

  try {
    await findAccountByUsername(username);

    next();
  } catch (err) {
    next(err);
  }
}
