import { Transaction } from "../models/transactionsInterface";

class Account {
  protected transactions: Array<Transaction> = [];

  constructor(
    protected readonly accountId: string,
    protected amount: number = 0,
    protected timestamp: number = 0
  ) {
    if (amount < 0) {
      throw new Error("Amount could not be negative");
    }
  }

  get balance(): number {
    return this.amount;
  }

  increaseAmount(amount: number, timestamp: number = 0) {
    this.amount += amount;
    this.timestamp = timestamp;
    return this.amount;
  }

  decreaseAmount(amount: number, ts: number = 0) {
    this.amount -= amount;
    this.timestamp = ts;
    this.addTransaction("withdrawal", amount, ts);
    return this.amount;
  }

  getTransactions() {
    return this.transactions;
  }

  getTotalTransactionsAmount(): number {
    return this.transactions.reduce((sum, account) => sum + account.amount, 0);
  }

  getTransactionCount(): number {
    return this.transactions.length;
  }

  protected addTransaction(
    type: string,
    amount: number,
    timestamp: number = 0
  ): void {
    const newTransaction: Transaction = {
      accountId: this.accountId,
      type: type,
      amount: amount,
      timestamp: timestamp,
    };
    this.transactions.push(newTransaction);
  }
}

export default Account;
