import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { HashingPasswordError } from "@classes";

export async function hashPassword(
  req: Request,
  _: Response,
  next: NextFunction
) {
  const { password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    next();
  } catch (e) {
    next(new HashingPasswordError());
  }
}
