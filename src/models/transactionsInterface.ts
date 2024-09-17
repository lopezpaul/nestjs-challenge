interface Transaction {
  type: string;
  accountId: string;
  amount: number;
  timestamp: number;
}

interface TransactionTotal {
  accountId: string;
  amount: number;
}

export { Transaction, TransactionTotal };
