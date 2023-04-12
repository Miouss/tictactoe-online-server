import { Account } from "@database";
import { AccountNotFoundError } from "@classes";

export async function getAccount(username: string) {
  const account = await Account.findOne().where("username").equals(username);

  if (!account) throw new AccountNotFoundError();

  return account;
}
