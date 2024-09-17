import BankingSystem from "../src/controllers/bankingSystem";
/**
 * The test suit below includes 10 tests for Level 1.
 *
 * All have the same score.
 * You are not allowed to modify this file,
 * but feel free to read the source code
 * to better understand what is happening in every specific case.
 */
describe("Level 1 tests", () => {
  let system: BankingSystem;
  beforeEach(() => {
    system = new BankingSystem();
  });

  it("Test level 1 case 01 basic create", async () => {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account2")).toBeTruthy();
  }, 400);

  it("Test level 1 case 02 basic create and deposit", async function () {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account2")).toBeTruthy();
    expect(system.deposit(3, "account1", 2500)).toBe(2500);
    expect(system.deposit(4, "account1", 500)).toBe(3000);
    expect(system.deposit(5, "account2", 1000)).toBe(1000);
  }, 400);

  it("Test level 1 case 03 basic create deposit and transfer 1", async function () {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account2")).toBeTruthy();
    expect(system.deposit(3, "account1", 2000)).toBe(2000);
    expect(system.deposit(4, "account2", 1000)).toBe(1000);
    expect(system.transfer(5, "account1", "account2", 500)).toBe(1500);
    expect(system.deposit(6, "account1", 100)).toBe(1600);
    expect(system.deposit(7, "account2", 100)).toBe(1600);
  }, 400);

  it("Test level 1 case 04 basic create deposit and transfer 2", function () {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account2")).toBeTruthy();
    expect(system.createAccount(3, "account3")).toBeTruthy();
    expect(system.deposit(4, "account1", 2000)).toBe(2000);
    expect(system.deposit(5, "account2", 1000)).toBe(1000);
    expect(system.transfer(6, "account1", "account2", 500)).toBe(1500);
    expect(system.transfer(7, "account2", "account3", 1400)).toBe(100);
    expect(system.deposit(8, "account1", 100)).toBe(1600);
    expect(system.deposit(9, "account2", 100)).toBe(200);
    expect(system.deposit(10, "account3", 100)).toBe(1500);
  });

  it("Test level 1 case 05 create edge case", async function () {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account1")).toBeFalsy();
    expect(system.createAccount(3, "account2")).toBeTruthy();
  }, 400);

  it("Test level 1 case 06 deposit edge cases", async function () {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account2")).toBeTruthy();
    expect(system.deposit(3, "account1", 100)).toBe(100);
    expect(system.deposit(4, "account2", 100)).toBe(100);
    expect(system.deposit(5, "account3", 100)).toBeNull();
  }, 400);

  it("Test level 1 case 07 transfer edge cases", async function () {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account2")).toBeTruthy();
    expect(system.deposit(3, "account1", 2500)).toBe(2500);
    expect(system.deposit(4, "account1", 500)).toBe(3000);
    expect(system.deposit(5, "account2", 500)).toBe(500);
    expect(system.deposit(6, "account2", 500)).toBe(1000);
    expect(system.transfer(7, "account3", "account2", 500)).toBeNull();
    expect(system.transfer(8, "account1", "account3", 500)).toBeNull();
    expect(system.transfer(9, "account1", "account2", 3001)).toBeNull();
    expect(system.transfer(10, "account1", "account1", 500)).toBeNull();
    expect(system.transfer(11, "account1", "account2", 3000)).toBe(0);
    expect(system.createAccount(12, "account3")).toBeTruthy();
    expect(system.transfer(13, "account3", "account2", 100)).toBeNull();
  }, 400);

  it("Test level 1 case 08 all successful operations", async function () {
    expect(system.createAccount(1, "acc1")).toBeTruthy();
    expect(system.createAccount(2, "acc2")).toBeTruthy();
    expect(system.createAccount(3, "acc3")).toBeTruthy();
    expect(system.deposit(4, "acc3", 1000)).toBe(1000);
    expect(system.deposit(5, "acc2", 1000)).toBe(1000);
    expect(system.transfer(6, "acc3", "acc2", 200)).toBe(800);
    expect(system.transfer(7, "acc2", "acc3", 100)).toBe(1100);
    expect(system.transfer(8, "acc3", "acc2", 100)).toBe(800);
    expect(system.transfer(9, "acc3", "acc1", 150)).toBe(650);
    expect(system.deposit(10, "acc1", 100)).toBe(250);
    expect(system.deposit(11, "acc2", 100)).toBe(1300);
    expect(system.deposit(12, "acc3", 100)).toBe(750);
  }, 400);

  it("Test level 1 case 09 all operations 1", function () {
    expect(system.createAccount(1, "acc1")).toBeTruthy();
    expect(system.createAccount(2, "acc2")).toBeTruthy();
    expect(system.createAccount(3, "acc3")).toBeTruthy();
    expect(system.createAccount(4, "acc4")).toBeTruthy();
    expect(system.deposit(5, "acc1", 2000)).toBe(2000);
    expect(system.deposit(6, "acc4", 2000)).toBe(2000);
    expect(system.deposit(7, "acc3", 2000)).toBe(2000);
    expect(system.deposit(8, "acc2", 2000)).toBe(2000);
    expect(system.deposit(9, "acc5", 2000)).toBeNull();
    expect(system.deposit(10, "acc6", 2000)).toBeNull();
    expect(system.deposit(11, "acc7", 2000)).toBeNull();
    expect(system.createAccount(12, "acc4")).toBeFalsy();
    expect(system.createAccount(13, "acc1")).toBeFalsy();
    expect(system.createAccount(14, "acc5")).toBeTruthy();
    expect(system.deposit(16, "acc5", 1000)).toBe(1000);
    expect(system.transfer(17, "acc5", "acc1", 99)).toBe(901);
    expect(system.transfer(18, "acc5", "acc2", 2)).toBe(899);
    expect(system.transfer(19, "acc5", "acc3", 66)).toBe(833);
    expect(system.transfer(20, "acc5", "acc5", 2)).toBeNull();
    expect(system.transfer(21, "acc5", "acc3", 66)).toBe(767);
    expect(system.transfer(22, "acc5", "acc2", 99)).toBe(668);
    expect(system.deposit(23, "acc1", 100)).toBe(2199);
    expect(system.deposit(37, "acc2", 200)).toBe(2301);
    expect(system.deposit(38, "acc3", 300)).toBe(2432);
    expect(system.transfer(39, "acc5", "acc5", 991)).toBeNull();
    expect(system.transfer(43, "acc6", "acc3", 1)).toBeNull();
  });

  it("Test level 1 case 10 all operations 2", async () => {
    expect(system.createAccount(1, "acc1")).toBeTruthy();
    expect(system.createAccount(2, "acc2")).toBeTruthy();
    expect(system.createAccount(3, "acc3")).toBeTruthy();
    expect(system.createAccount(4, "acc4")).toBeTruthy();
    expect(system.createAccount(5, "acc5")).toBeTruthy();
    expect(system.deposit(6, "acc1", 1000)).toBe(1000);
    expect(system.deposit(7, "acc4", 2000)).toBe(2000);
    expect(system.deposit(8, "acc3", 3000)).toBe(3000);
    expect(system.deposit(9, "acc2", 2000)).toBe(2000);
    expect(system.deposit(10, "acc5", 1000)).toBe(1000);
    expect(system.deposit(11, "acc6", 100)).toBeNull();
    expect(system.deposit(12, "acc7", 1000)).toBeNull();
    expect(system.createAccount(13, "acc5")).toBeFalsy();
    expect(system.createAccount(14, "acc3")).toBeFalsy();
    expect(system.createAccount(16, "acc6")).toBeTruthy();
    expect(system.deposit(17, "acc6", 1000)).toBe(1000);
    expect(system.transfer(18, "acc6", "acc1", 99)).toBe(901);
    expect(system.transfer(19, "acc6", "acc2", 2)).toBe(899);
    expect(system.transfer(20, "acc6", "acc3", 66)).toBe(833);
    expect(system.transfer(21, "acc6", "acc5", 2)).toBe(831);
    expect(system.transfer(22, "acc6", "acc3", 66)).toBe(765);
    expect(system.transfer(23, "acc6", "acc2", 99)).toBe(666);
    expect(system.transfer(24, "acc6", "acc1", 99)).toBe(567);
    expect(system.transfer(25, "acc6", "acc5", 66)).toBe(501);
    expect(system.transfer(26, "acc6", "acc5", 67)).toBe(434);
    expect(system.transfer(27, "acc6", "acc5", 66)).toBe(368);
    expect(system.transfer(28, "acc6", "acc5", 99)).toBe(269);
    expect(system.transfer(29, "acc6", "acc3", 68)).toBe(201);
    expect(system.transfer(30, "acc6", "acc4", 68)).toBe(133);
    expect(system.transfer(31, "acc6", "acc4", 66)).toBe(67);
    expect(system.transfer(32, "acc6", "acc5", 67)).toBe(0);
    expect(system.transfer(33, "acc7", "acc6", 100)).toBeNull();
    expect(system.transfer(34, "acc1", "acc7", 100)).toBeNull();
    expect(system.transfer(35, "acc6", "acc5", 1)).toBeNull();
    expect(system.transfer(36, "acc3", "acc3", 239)).toBeNull();
    expect(system.deposit(37, "acc1", 800)).toBe(1998);
    expect(system.deposit(38, "acc2", 800)).toBe(2901);
    expect(system.deposit(39, "acc3", 800)).toBe(4000);
    expect(system.deposit(40, "acc4", 800)).toBe(2934);
    expect(system.deposit(41, "acc5", 800)).toBe(2167);
    expect(system.deposit(42, "acc6", 1000)).toBe(1000);
    expect(system.transfer(43, "acc6", "acc5", 991)).toBe(9);
    expect(system.transfer(44, "acc6", "acc3", 1)).toBe(8);
  });
});
