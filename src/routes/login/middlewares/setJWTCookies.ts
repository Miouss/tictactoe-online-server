import { NextFunction, Response } from "express";
import { TokenRequest } from "@types";
import { NODE_ENV } from "@config";
import { TokenMissingError } from "@classes";

export function setJWTCookies(
  req: TokenRequest,
  res: Response,
  next: NextFunction
) {
  const { token, refreshedToken } = req;

  const isTokenMissing = !token || !refreshedToken;

  if (isTokenMissing) return next(new TokenMissingError());

  const isProductionEnv = NODE_ENV === "production";

  const getCookieOptions = (maxAge: number) => ({
    httpOnly: true,
    secure: isProductionEnv,
    maxAge,
  });

  res.cookie(
    "refreshToken",
    refreshedToken,
    getCookieOptions(24 * 60 * 60 * 1000)
  );

  res.cookie("token", token, getCookieOptions(10 * 60 * 1000));

  next();
}
