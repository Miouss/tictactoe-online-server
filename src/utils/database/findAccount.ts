import { Account } from "@database";

export function findAccountByUsername(username: string) {
  return Account.exists({
    username,
  });
}
