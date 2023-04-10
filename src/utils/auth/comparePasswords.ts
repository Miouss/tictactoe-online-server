import bcrypt from "bcrypt";

export function comparePasswords(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword);
}
