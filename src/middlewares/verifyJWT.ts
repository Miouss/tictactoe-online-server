import { Response, NextFunction } from "express";
import { decodeJWT, isObjectEmpty, refreshJWT } from "@utils";
import { TokenRequest } from "@types";
import { TokenInvalidError } from "@classes";
import { ACCESS_JWT_SECRET } from "@config";

export function verifyJWT(
  req: TokenRequest,
  res: Response,
  next: NextFunction
) {
  const isUsingQueryParams = !isObjectEmpty(req.query);

  const { token } = isUsingQueryParams ? req.query : req.cookies;

  console.log(req.query);

  let decodedToken = decodeJWT(token as string, ACCESS_JWT_SECRET as string);

  const shouldRefreshToken  = decodedToken === null;

  if (shouldRefreshToken  && !isUsingQueryParams) {
    const { refreshToken } = req.cookies;
    const newToken = refreshJWT(refreshToken);
    decodedToken = decodeJWT(newToken, ACCESS_JWT_SECRET as string);
  }

  if (decodedToken === null) {
    res.status(403);
    return next(new TokenInvalidError());
  }

  req.decodedToken = decodedToken;

  next();
}
