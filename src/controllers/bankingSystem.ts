import Account from "./account";
import BankingSystemInterface from "../models/bankingSystemInterface";
import TransactionTotal from "../models/transactionTotalInterface";

class BankingSystem extends BankingSystemInterface {
  public accounts: Map<string, Account>;

  constructor() {
    super();
    this.accounts = new Map();
  }

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

  deposit(timestamp: number, accountId: string, amount: number): number | null {
    if (!this.accounts.has(accountId)) {
      return null;
    }
    const account = this.accounts.get(accountId)!;
    const balance = account.increaseAmount(amount, timestamp);
    this.accounts.set(accountId, account);
    return balance;
  }

  transfer(
    timestamp: number,
    sourceAccountId: string,
    targetAccountId: string,
    amount: number
  ): number | null {
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
      } else {
        return a.accountId.localeCompare(b.accountId);
      }
      return 0;
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
