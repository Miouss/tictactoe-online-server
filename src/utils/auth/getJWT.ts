import jwt from "jsonwebtoken";
import { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } from "@config";

export function getJWT(username: string) {
  const token = jwt.sign({ username }, ACCESS_JWT_SECRET as string, {
    algorithm: "HS256",
    expiresIn: "10m",
  });

  const refreshedToken = jwt.sign({ username }, REFRESH_JWT_SECRET as string, {
    algorithm: "HS256",
    expiresIn: "1d",
  });

  return {
    token,
    refreshedToken,
  };
}
