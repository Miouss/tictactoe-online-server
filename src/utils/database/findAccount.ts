import { AccountAlreadyExistsError } from "@classes";
import { Account } from "@database";

export async function findAccountByUsername(username: string) {
  const account = await Account.exists({
    username,
  });

  if (account) throw new AccountAlreadyExistsError();
}
