import { TokenRequest } from "@types";
import { Response } from "express";

export function acceptReconnection(req: TokenRequest, res: Response) {
  const { username } = req.decodedToken as any;

  res.status(200).json({ username });
}
