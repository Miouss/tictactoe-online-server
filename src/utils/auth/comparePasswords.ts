import { PasswordIncorrectError } from "@classes";
import bcrypt from "bcrypt";

export async function comparePasswords(
  password: string,
  hashedPassword: string
) {
  const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
  if (!isPasswordMatch) {
    throw new PasswordIncorrectError();
  }
}
