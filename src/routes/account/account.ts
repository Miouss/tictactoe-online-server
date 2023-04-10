import { Router } from "express";
import {
  checkAccountDoublon,
  confirmAccount,
  addAccount,
  removeAccount,
  changePassword,
  reassignPassword,
} from "./middlewares";
import {
  verifyJWT,
  sendJWT,
  createJWT,
  verifyCredentials,
  hashPassword,
} from "@middlewares";

const account = Router();

account.post(
  "/",
  checkAccountDoublon,
  hashPassword,
  addAccount,
  createJWT,
  sendJWT
);

account.patch("/", verifyJWT, confirmAccount);

account.patch(
  "/password",
  verifyCredentials,
  reassignPassword,
  hashPassword,
  changePassword
);

account.delete("/", hashPassword, verifyCredentials, removeAccount);

export { account };
