import { Router } from "express";
import {
  checkAccountDoublon,
  confirmAccount,
  addAccount,
  removeAccount,
  changePassword,
  reassignPassword,
  sendMailConfirmation,
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
  sendMailConfirmation,
  sendJWT
);

account.get("/", verifyJWT, confirmAccount);

account.patch(
  "/password",
  verifyCredentials,
  reassignPassword,
  hashPassword,
  changePassword
);

account.delete("/", verifyCredentials, removeAccount);

export { account };
