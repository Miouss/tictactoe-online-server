import { PasswordIncorrectError } from "@classes";
import bcrypt from "bcrypt";

export function comparePasswords(password: string, hashedPassword: string) {
  const isPasswordMatch = bcrypt.compare(password, hashedPassword);
  if (!isPasswordMatch) throw new PasswordIncorrectError();
}
