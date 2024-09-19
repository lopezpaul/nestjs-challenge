import Account from "./account";
import {
  numberOrNull,
  BankingSystemInterface,
} from "../models/bankingSystemInterface";
import { TransactionTotal } from "../models/transactionsInterface";

class BankingSystem extends BankingSystemInterface {
  public accounts: Map<string, Account>;

  constructor() {
    super();
    this.accounts = new Map();
  }

  /**
   * Should create a new account with the given identifier if it
   * does not already exist.
   * Returns `true` if the account was successfully created or
   * `false` if an account with `accountId` already exists.
   *
   * @param {number} timestamp
   * @param {string} accountId
   * @param {number} amount
   * @returns {boolean}
   */
  createAccount(
    timestamp: number,
    accountId: string,
    amount: number = 0
  ): boolean {
    if (this.accounts.has(accountId)) {
      return false;
    }
    const newAccount = new Account(accountId, amount, timestamp);
    this.accounts.set(accountId, newAccount);
    return true;
  }

  /**
   * Should deposit the given `amount` of money to the specified
   * `accountId`.
   * Returns the total amount of money in the account after the
   * query has been processed.
   * If the specified account does not exist, should return
   * `null`.
   *
   * @param {number} timestamp
   * @param {string} accountId
   * @param {number} amount
   * @returns {numberOrNull}
   */
  deposit(timestamp: number, accountId: string, amount: number): numberOrNull {
    if (!this.accounts.has(accountId)) {
      return null;
    }
    const account = this.accounts.get(accountId)!;
    const balance = account.increaseAmount(amount, timestamp);
    this.accounts.set(accountId, account);
    return balance;
  }

  /**
   * Should transfer the given amount of money from account
   * `sourceAccountId` to account `targetAccountId`.
   * Returns the balance of `sourceAccountId` if the transfer was
   * successful or `null` otherwise.
   *   * Returns `null` if `sourceAccountId` or `targetAccountId`
   *   doesn't exist.
   *   * Returns `null` if `sourceAccountId` and `targetAccountId`
   *   are the same.
   *   * Returns `null` if account `sourceAccountId` has
   *   insufficient funds to perform the transfer.
   *
   * @param {number} timestamp
   * @param {string} sourceAccountId
   * @param {string} targetAccountId
   * @param {number} amount
   * @returns {numberOrNull}
   */
  transfer(
    timestamp: number,
    sourceAccountId: string,
    targetAccountId: string,
    amount: number
  ): numberOrNull {
    if (sourceAccountId == targetAccountId) {
      return null;
    }
    if (
      !this.accounts.has(sourceAccountId) ||
      !this.accounts.has(targetAccountId)
    ) {
      return null;
    }
    const sourceAccount = this.accounts.get(sourceAccountId)!;
    if (amount > sourceAccount.balance) {
      return null;
    }
    const balance = sourceAccount!.decreaseAmount(amount, timestamp);
    this.accounts.set(sourceAccountId, sourceAccount);

    const targetAccount = this.accounts.get(targetAccountId)!;
    targetAccount.increaseAmount(amount, timestamp);
    this.accounts.set(targetAccountId, targetAccount);

    return balance;
  }

  topSpenders(timestamp: number, totalAccounts: number): Array<string> {
    const accounts: Array<TransactionTotal> =
      this.getAccountsWithMostTransactions(totalAccounts);
    const result: Array<string> = [];
    accounts.forEach(function (account) {
      result.push(`${account.accountId}(${account.amount})`);
    });
    return result;
  }

  getAccountsWithMostTransactions(
    totalAccounts: number = 0
  ): Array<TransactionTotal> {
    const accounts: Array<TransactionTotal> = [];
    for (const [accountId] of this.accounts) {
      let total: number | null = this.getTotalAmountOfTransactions(accountId);
      const amount = total === null ? 0 : total;
      const transaction: TransactionTotal = {
        accountId: accountId,
        amount: amount,
      };
      accounts.push(transaction);
    }
    accounts.sort((a, b) => {
      if (b.amount !== a.amount) {
        return b.amount - a.amount;
      }
      return a.accountId.localeCompare(b.accountId);
    });
    return accounts.slice(0, totalAccounts);
  }

  getTotalAmountOfTransactions(accountId: string): number | null {
    if (!this.accounts.has(accountId)) {
      return null;
    }
    const account = this.accounts.get(accountId)!;
    return account.getTotalTransactionsAmount();
  }
}

export default BankingSystem;
