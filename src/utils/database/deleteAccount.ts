import { Account } from "@database";

export function deleteAccount(
  username: string,
) {
  return Account.deleteOne({
    username,
  });
}
