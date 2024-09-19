import { Transaction } from "../models/transactionsInterface";

class Account {
  /** list of account transactions */
  protected transactions: Array<Transaction> = [];

  /**
   * Account constructor
   *
   * @param accountId
   * @param amount optional
   * @param timestamp optional
   */
  constructor(
    protected readonly accountId: string,
    protected amount: number = 0,
    protected timestamp: number = 0
  ) {
    if (amount < 0) {
      throw new Error("The amount cannot be negative");
    }
  }

  /**
   * Get total amount in the account
   *
   * @returns account balance
   */
  get balance(): number {
    return this.amount;
  }

  /**
   * Add funds to the account
   *
   * @param amount transfer amount
   * @param timestamp
   * @returns account balance
   */
  increaseAmount(amount: number, timestamp: number = 0): number {
    this.amount += amount;
    this.timestamp = timestamp;
    return this.amount;
  }

  /**
   * Reduces the money available in the account
   *
   * @param amount transfer amount
   * @param timestamp
   * @returns account balance
   */
  decreaseAmount(amount: number, timestamp: number = 0) {
    this.amount -= amount;
    this.timestamp = timestamp;
    this.addTransaction("withdrawal", amount, timestamp);
    return this.amount;
  }

  /**
   * Get the list of transactions in the account
   *
   * @returns list of transactions
   */
  getTransactions(): Array<Transaction> {
    return this.transactions;
  }

  /**
   * Get the total amount of money transferred from the account
   *
   * @returns total amount
   */
  getTotalTransactionsAmount(): number {
    return this.transactions.reduce((sum, account) => sum + account.amount, 0);
  }

  /**
   * Gets the total move count
   *
   * @returns transaction count
   */
  getTransactionCount(): number {
    return this.transactions.length;
  }

  /**
   * Add the move to the transfer list
   *
   * @param type transaction type
   * @param amount amount of money transferred
   * @param timestamp
   */
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
