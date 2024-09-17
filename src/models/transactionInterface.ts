interface Transaction {
  type: string;
  accountId: string;
  amount: number;
  timestamp: number;
}

export default Transaction;
