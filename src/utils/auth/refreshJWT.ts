import { decodeJWT, getJWT } from "../";
import { REFRESH_JWT_SECRET } from "@config";

export function refreshJWT(refreshToken: string) {

  const decodedRefreshToken = decodeJWT(
    refreshToken as string,
    REFRESH_JWT_SECRET as string
  );

  if (decodedRefreshToken === null) return null;

  const { token } = getJWT(decodedRefreshToken.username as string);

  return token;
}
