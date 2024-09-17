import BankingSystem from "./controllers/bankingSystem";

const system = new BankingSystem();

system.createAccount(1, "account1");
system.createAccount(2, "account2");
system.createAccount(3, "account3");

system.deposit(4, "account1", 1000);
system.deposit(5, "account2", 1000);
system.deposit(6, "account3", 1000);

system.transfer(7, "account2", "account3", 100);
system.transfer(8, "account2", "account3", 100);
system.transfer(9, "account3", "account1", 100);

system.topSpenders(10, 3);
for (const [id, account] of system.accounts) {
  console.log(id);
  console.table(account.getTransactions());
}
