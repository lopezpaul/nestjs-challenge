interface Transaction {
  type: string;
  accountId: string;
  amount: number;
  timestamp: number;
}

class Account {
  transactions: Array<Transaction> = [];

  constructor(
    protected readonly accountId: string,
    public amount: number = 0,
    protected timestamp: number = 0
  ) {
    if (amount < 0) {
      throw new Error("Amount could not be negative");
    }
  }

  get balance(): number {
    return this.amount;
  }

  get transactionsAsString(): string {
    return JSON.stringify(this.transactions);
  }

  increaseAmount(amount: number, timestamp: number = 0) {
    this.amount += amount;
    this.timestamp = timestamp;
    return this.amount;
  }

  decreaseAmount(amount: number, ts: number = 0) {
    this.amount -= amount;
    this.timestamp = ts;
    this._addTransaction("withdrawal", amount, ts);
    return this.amount;
  }

  getTransactions() {
    return this.transactions;
  }

  _addTransaction(type: string, amount: number, timestamp: number = 0): void {
    const newTransaction: Transaction = {
      accountId: this.accountId,
      type: type,
      amount: amount,
      timestamp: timestamp,
    };
    this.transactions.push(newTransaction);
  }

  getTotalTransactionsAmount(): number {
    return this.transactions.reduce((sum, account) => sum + account.amount, 0);
  }

  getTransactionCount(): number {
    return this.transactions.length;
  }
}

export default Account;
