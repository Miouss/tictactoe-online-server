import { NextFunction, Request, Response } from "express";

export async function reassignPassword(
  req: Request,
  _: Response,
  next: NextFunction
) {
  req.body.password = req.body.newPassword;
  next();
}
