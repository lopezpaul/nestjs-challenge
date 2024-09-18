import BankingSystem from "../src/controllers/bankingSystem";
/**
 * The test suit below includes 10 tests for Level 2.
 *
 * All have the same score.
 * You are not allowed to modify this file,
 * but feel free to read the source code
 * to better understand what is happening in every specific case.
 */
describe("Level 2 tests", () => {
  let system: BankingSystem;
  beforeEach(() => {
    system = new BankingSystem();
  });

  it("Test level 2 case 01 basic top spenders 1", async () => {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account2")).toBeTruthy();
    expect(system.createAccount(3, "account3")).toBeTruthy();

    expect(system.deposit(4, "account1", 1000)).toBe(1000);
    expect(system.deposit(5, "account2", 1000)).toBe(1000);
    expect(system.deposit(6, "account3", 1000)).toBe(1000);

    expect(system.transfer(7, "account2", "account3", 100)).toBe(900);
    expect(system.transfer(8, "account2", "account3", 100)).toBe(800);
    expect(system.transfer(9, "account3", "account1", 100)).toBe(1100);

    const expected = ["account2(200)", "account3(100)", "account1(0)"];
    const actual = system.topSpenders(10, 3);
    expect(actual).toEqual(expected);
  }, 400);

  it("Test level 2 case 02 basic top spenders 2", async () => {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account2")).toBeTruthy();
    expect(system.createAccount(3, "account3")).toBeTruthy();
    expect(system.deposit(4, "account1", 500)).toBe(500);
    expect(system.deposit(5, "account2", 500)).toBe(500);
    expect(system.deposit(6, "account3", 750)).toBe(750);
    expect(system.transfer(7, "account2", "account3", 239)).toBe(261);
    expect(system.transfer(8, "account3", "account1", 350)).toBe(639);
    expect(system.transfer(9, "account2", "account1", 61)).toBe(200);
    let expected = ["account3(350)", "account2(300)"];
    expect(system.topSpenders(10, 2)).toEqual(expected);

    expected = ["account3(350)", "account2(300)", "account1(0)"];
    expect(system.topSpenders(11, 4)).toEqual(expected);
  }, 400);

  it("Test level 2 case 03 basic top spenders 3", async () => {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account2")).toBeTruthy();
    expect(system.createAccount(3, "account3")).toBeTruthy();
    expect(system.deposit(4, "account1", 1000)).toBe(1000);
    expect(system.deposit(5, "account2", 1000)).toBe(1000);
    expect(system.deposit(6, "account3", 1000)).toBe(1000);
    expect(system.transfer(7, "account2", "account3", 100)).toBe(900);
    expect(system.transfer(8, "account3", "account2", 200)).toBe(900);
    expect(system.transfer(9, "account3", "account1", 100)).toBe(800);
    expect(system.transfer(10, "account2", "account3", 199)).toBe(901);
    expect(system.transfer(11, "account2", "account3", 100)).toBe(801);
    expect(system.transfer(12, "account2", "account1", 2)).toBe(799);
    expect(system.transfer(13, "account3", "account1", 100)).toBe(999);
    let expected = ["account2(401)", "account3(400)"];
    expect(system.topSpenders(14, 2)).toEqual(expected);
    expected = ["account2(401)", "account3(400)", "account1(0)"];
    expect(system.topSpenders(15, 3)).toEqual(expected);
    expected = ["account2(401)", "account3(400)", "account1(0)"];
    expect(system.topSpenders(16, 4)).toEqual(expected);
  }, 400);

  it("Test level 2 case 04 top spenders with failed transfers", async () => {
    expect(system.createAccount(1, "account1")).toBeTruthy();
    expect(system.createAccount(2, "account2")).toBeTruthy();
    expect(system.createAccount(3, "account3")).toBeTruthy();
    expect(system.deposit(4, "account1", 1000)).toBe(1000);
    expect(system.deposit(5, "account2", 1000)).toBe(1000);
    expect(system.deposit(6, "account3", 1000)).toBe(1000);
    expect(system.transfer(7, "account2", "account3", 100)).toBe(900);
    expect(system.transfer(8, "account2", "account2", 500)).toBeNull();
    expect(system.transfer(9, "account2", "account1", 2000)).toBeNull();
    expect(system.transfer(10, "account2", "account4", 500)).toBeNull();
    expect(system.transfer(11, "account3", "account1", 200)).toBe(900);
    expect(system.transfer(12, "account1", "account2", 300)).toBe(900);
    let expected = ["account1(300)", "account3(200)"];
    expect(system.topSpenders(13, 2)).toEqual(expected);
    expected = ["account1(300)", "account3(200)", "account2(100)"];
    expect(system.topSpenders(14, 3)).toEqual(expected);
    expected = ["account1(300)", "account3(200)", "account2(100)"];
    expect(system.topSpenders(15, 4)).toEqual(expected);
  }, 400);

  it("Test level 2 case 05 top spenders alphabetical order 1", async () => {
    expect(system.createAccount(1, "accountA")).toBeTruthy();
    expect(system.createAccount(2, "accountC")).toBeTruthy();
    expect(system.createAccount(3, "accountB")).toBeTruthy();
    expect(system.deposit(4, "accountA", 1000)).toBe(1000);
    expect(system.deposit(5, "accountB", 1000)).toBe(1000);
    expect(system.deposit(6, "accountC", 1000)).toBe(1000);
    expect(system.transfer(7, "accountB", "accountC", 101)).toBe(899);
    expect(system.transfer(8, "accountB", "accountA", 99)).toBe(800);
    expect(system.transfer(9, "accountA", "accountC", 100)).toBe(999);
    expect(system.transfer(10, "accountA", "accountB", 100)).toBe(899);
    expect(system.transfer(11, "accountC", "accountA", 199)).toBe(1002);
    expect(system.transfer(12, "accountC", "accountA", 1)).toBe(1001);
    let expected = ["accountA(200)", "accountB(200)", "accountC(200)"];
    expect(system.topSpenders(13, 3)).toEqual(expected);
  }, 400);

  it("Test level 2 case 06 top spenders alphabetical order 2", async () => {
    expect(system.createAccount(1, "acc1")).toBeTruthy();
    expect(system.createAccount(2, "acc3")).toBeTruthy();
    expect(system.createAccount(3, "acc2")).toBeTruthy();
    expect(system.deposit(4, "acc1", 100)).toBe(100);
    expect(system.deposit(5, "acc2", 200)).toBe(200);
    expect(system.deposit(6, "acc3", 300)).toBe(300);
    let expected = ["acc1(0)", "acc2(0)", "acc3(0)"];
    expect(system.topSpenders(7, 3)).toEqual(expected);
  }, 400);

  it("Test level 2 case 07 all commands 1", async () => {
    expect(system.createAccount(1, "acc1")).toBeTruthy();
    expect(system.createAccount(2, "acc2")).toBeTruthy();
    expect(system.createAccount(3, "acc3")).toBeTruthy();
    expect(system.createAccount(4, "acc4")).toBeTruthy();
    expect(system.createAccount(5, "acc5")).toBeTruthy();
    expect(system.deposit(11, "acc0", 900)).toBeNull();
    expect(system.deposit(12, "acc1", 300)).toBe(300);
    expect(system.deposit(13, "acc2", 350)).toBe(350);
    expect(system.deposit(14, "acc3", 150)).toBe(150);
    expect(system.deposit(15, "acc4", 400)).toBe(400);
    expect(system.deposit(16, "acc5", 600)).toBe(600);
    expect(system.transfer(21, "acc1", "acc3", 20)).toBe(280);
    expect(system.deposit(22, "acc3", 150)).toBe(320);
    expect(system.transfer(23, "acc2", "acc2", 25)).toBeNull();
    expect(system.transfer(24, "acc2", "acc1", 30)).toBe(320);
    expect(system.transfer(25, "acc3", "acc5", 35)).toBe(285);
    expect(system.deposit(26, "acc4", 400)).toBe(800);
    expect(system.transfer(27, "acc5", "acc4", 40)).toBe(595);
    expect(system.transfer(28, "acc3", "acc4", 45)).toBe(240);
    expect(system.transfer(29, "acc4", "acc1", 50)).toBe(835);
    let expected = ["acc3(80)", "acc4(50)", "acc5(40)", "acc2(30)", "acc1(20)"];
    expect(system.topSpenders(30, 5)).toEqual(expected);
    expect(system.deposit(31, "acc5", 600)).toBe(1195);
    expect(system.transfer(32, "acc3", "acc4", 55)).toBe(185);
    expect(system.transfer(33, "acc1", "acc4", 60)).toBe(300);
    expect(system.transfer(34, "acc1", "acc0", 65)).toBeNull();
    expect(system.createAccount(35, "acc6")).toBeTruthy();
    expected = ["acc3(135)", "acc1(80)", "acc4(50)", "acc5(40)", "acc2(30)"];
    expect(system.topSpenders(36, 5)).toEqual(expected);
  }, 400);

  it("Test level 2 case 08 all commands 2", async () => {
    expect(system.createAccount(1, "acc1")).toBeTruthy();
    expect(system.createAccount(2, "acc2")).toBeTruthy();
    expect(system.createAccount(3, "acc3")).toBeTruthy();
    expect(system.createAccount(4, "acc4")).toBeTruthy();
    expect(system.createAccount(5, "acc5")).toBeTruthy();
    expect(system.createAccount(6, "acc6")).toBeTruthy();
    expect(system.createAccount(7, "acc7")).toBeTruthy();
    expect(system.createAccount(8, "acc8")).toBeTruthy();
    expect(system.createAccount(9, "acc9")).toBeTruthy();
    expect(system.createAccount(10, "acc10")).toBeTruthy();
    expect(system.deposit(11, "acc0", 41)).toBeNull();
    expect(system.deposit(12, "acc1", 48)).toBe(48);
    expect(system.deposit(13, "acc2", 30)).toBe(30);
    expect(system.deposit(14, "acc3", 680)).toBe(680);
    expect(system.deposit(15, "acc4", 326)).toBe(326);
    expect(system.deposit(16, "acc5", 73)).toBe(73);
    expect(system.deposit(17, "acc6", 349)).toBe(349);
    expect(system.deposit(18, "acc7", 65)).toBe(65);
    expect(system.deposit(19, "acc8", 547)).toBe(547);
    expect(system.deposit(20, "acc9", 452)).toBe(452);
    expect(system.transfer(21, "acc10", "acc9", 540)).toBeNull();
    expect(system.transfer(22, "acc9", "acc3", 732)).toBeNull();
    expect(system.transfer(23, "acc3", "acc9", 926)).toBeNull();
    expect(system.transfer(24, "acc4", "acc1", 732)).toBeNull();
    expect(system.transfer(25, "acc7", "acc8", 304)).toBeNull();
    expect(system.transfer(26, "acc7", "acc4", 782)).toBeNull();
    expect(system.transfer(27, "acc1", "acc9", 597)).toBeNull();
    expect(system.transfer(28, "acc6", "acc1", 236)).toBe(113);
    expect(system.transfer(29, "acc2", "acc2", 467)).toBeNull();
    expect(system.transfer(30, "acc6", "acc8", 860)).toBeNull();
    expect(system.deposit(31, "acc0", 396)).toBeNull();
    expect(system.deposit(32, "acc1", 520)).toBe(804);
    expect(system.deposit(33, "acc2", 709)).toBe(739);
    expect(system.deposit(34, "acc3", 752)).toBe(1432);
    expect(system.deposit(35, "acc4", 382)).toBe(708);
    expect(system.deposit(36, "acc5", 521)).toBe(594);
    expect(system.deposit(37, "acc6", 325)).toBe(438);
    expect(system.deposit(38, "acc7", 534)).toBe(599);
    expect(system.deposit(39, "acc8", 697)).toBe(1244);
    expect(system.deposit(40, "acc9", 370)).toBe(822);
    let expected = [
      "acc6(236)",
      "acc1(0)",
      "acc10(0)",
      "acc2(0)",
      "acc3(0)",
      "acc4(0)",
      "acc5(0)",
      "acc7(0)",
      "acc8(0)",
      "acc9(0)",
    ];
    expect(system.topSpenders(41, 10)).toEqual(expected);
    expect(system.transfer(42, "acc2", "acc1", 21)).toBe(718);
    expect(system.transfer(43, "acc2", "acc9", 922)).toBeNull();
    expect(system.transfer(44, "acc9", "acc1", 118)).toBe(704);
    expect(system.transfer(45, "acc7", "acc7", 230)).toBeNull();
    expected = [
      "acc6(236)",
      "acc9(118)",
      "acc2(21)",
      "acc1(0)",
      "acc10(0)",
      "acc3(0)",
      "acc4(0)",
      "acc5(0)",
      "acc7(0)",
      "acc8(0)",
    ];
    expect(system.topSpenders(46, 10)).toEqual(expected);
    expect(system.transfer(47, "acc8", "acc4", 197)).toBe(1047);
    expect(system.transfer(48, "acc10", "acc7", 914)).toBeNull();
    expect(system.transfer(49, "acc4", "acc10", 192)).toBe(713);
    expected = [
      "acc6(236)",
      "acc8(197)",
      "acc4(192)",
      "acc9(118)",
      "acc2(21)",
      "acc1(0)",
      "acc10(0)",
      "acc3(0)",
      "acc5(0)",
      "acc7(0)",
    ];
    expect(system.topSpenders(50, 10)).toEqual(expected);
    expect(system.transfer(51, "acc5", "acc1", 829)).toBeNull();
    expect(system.transfer(52, "acc7", "acc1", 451)).toBe(148);
    expect(system.transfer(53, "acc9", "acc1", 581)).toBe(123);
    expected = [
      "acc9(699)",
      "acc7(451)",
      "acc6(236)",
      "acc8(197)",
      "acc4(192)",
      "acc2(21)",
      "acc1(0)",
      "acc10(0)",
      "acc3(0)",
      "acc5(0)",
    ];
    expect(system.topSpenders(54, 10)).toEqual(expected);
  }, 400);

  it("Test level 2 case 09 all commands 3", async () => {
    expect(system.createAccount(1, "acc1")).toBeTruthy();
    expect(system.createAccount(2, "acc2")).toBeTruthy();
    expect(system.createAccount(3, "acc3")).toBeTruthy();
    expect(system.createAccount(4, "acc4")).toBeTruthy();
    expect(system.createAccount(5, "acc5")).toBeTruthy();
    expect(system.createAccount(6, "acc6")).toBeTruthy();
    expect(system.createAccount(7, "acc7")).toBeTruthy();
    expect(system.createAccount(8, "acc8")).toBeTruthy();
    expect(system.createAccount(9, "acc9")).toBeTruthy();
    expect(system.createAccount(10, "acc10")).toBeTruthy();
    expect(system.deposit(11, "acc0", 928)).toBeNull();
    expect(system.deposit(12, "acc1", 741)).toBe(741);
    expect(system.deposit(13, "acc2", 703)).toBe(703);
    expect(system.deposit(14, "acc3", 806)).toBe(806);
    expect(system.deposit(15, "acc4", 785)).toBe(785);
    expect(system.deposit(16, "acc5", 902)).toBe(902);
    expect(system.deposit(17, "acc6", 927)).toBe(927);
    expect(system.deposit(18, "acc7", 155)).toBe(155);
    expect(system.deposit(19, "acc8", 267)).toBe(267);
    expect(system.deposit(20, "acc9", 691)).toBe(691);
    expect(system.transfer(21, "acc10", "acc1", 894)).toBeNull();
    expect(system.transfer(22, "acc5", "acc9", 928)).toBeNull();
    expect(system.transfer(23, "acc2", "acc0", 422)).toBeNull();
    expect(system.transfer(24, "acc6", "acc1", 106)).toBe(821);
    expect(system.transfer(25, "acc2", "acc5", 486)).toBe(217);
    expect(system.transfer(26, "acc9", "acc7", 422)).toBe(269);
    expect(system.transfer(27, "acc3", "acc3", 325)).toBeNull();
    expect(system.transfer(28, "acc10", "acc10", 344)).toBeNull();
    expect(system.transfer(29, "acc5", "acc6", 95)).toBe(1293);
    expect(system.transfer(30, "acc10", "acc8", 825)).toBeNull();
    let expected = [
      "acc2(486)",
      "acc9(422)",
      "acc6(106)",
      "acc5(95)",
      "acc1(0)",
      "acc10(0)",
      "acc3(0)",
      "acc4(0)",
      "acc7(0)",
      "acc8(0)",
    ];
    expect(system.topSpenders(31, 10)).toEqual(expected);
  }, 400);

  it("Test level 2 case 10 all commands 4", async () => {
    expect(system.createAccount(1, "acc1")).toBeTruthy();
    expect(system.createAccount(2, "acc2")).toBeTruthy();
    expect(system.createAccount(3, "acc3")).toBeTruthy();
    expect(system.createAccount(4, "acc4")).toBeTruthy();
    expect(system.createAccount(5, "acc5")).toBeTruthy();
    expect(system.createAccount(6, "acc6")).toBeTruthy();
    expect(system.createAccount(7, "acc7")).toBeTruthy();
    expect(system.createAccount(8, "acc8")).toBeTruthy();
    expect(system.createAccount(9, "acc9")).toBeTruthy();
    expect(system.createAccount(10, "acc10")).toBeTruthy();
    expect(system.deposit(11, "acc0", 862)).toBeNull();
    expect(system.deposit(12, "acc1", 504)).toBe(504);
    expect(system.deposit(13, "acc2", 415)).toBe(415);
    expect(system.deposit(14, "acc3", 84)).toBe(84);
    expect(system.deposit(15, "acc4", 212)).toBe(212);
    expect(system.deposit(16, "acc5", 587)).toBe(587);
    expect(system.deposit(17, "acc6", 249)).toBe(249);
    expect(system.deposit(18, "acc7", 36)).toBe(36);
    expect(system.deposit(19, "acc8", 207)).toBe(207);
    expect(system.deposit(20, "acc9", 97)).toBe(97);
    expect(system.transfer(21, "acc1", "acc3", 260)).toBe(244);
    expect(system.transfer(22, "acc4", "acc4", 707)).toBeNull();
    expect(system.transfer(23, "acc4", "acc2", 639)).toBeNull();
    expect(system.transfer(24, "acc1", "acc0", 274)).toBeNull();
    expect(system.transfer(25, "acc3", "acc3", 588)).toBeNull();
    expect(system.transfer(26, "acc3", "acc0", 14)).toBeNull();
    expect(system.transfer(27, "acc10", "acc9", 308)).toBeNull();
    expect(system.transfer(28, "acc4", "acc2", 712)).toBeNull();
    expect(system.transfer(29, "acc10", "acc5", 615)).toBeNull();
    expect(system.transfer(30, "acc7", "acc2", 945)).toBeNull();
    expect(system.deposit(31, "acc0", 654)).toBeNull();
    expect(system.deposit(32, "acc1", 281)).toBe(525);
    expect(system.deposit(33, "acc2", 570)).toBe(985);
    expect(system.deposit(34, "acc3", 853)).toBe(1197);
    expect(system.deposit(35, "acc4", 444)).toBe(656);
    expect(system.deposit(36, "acc5", 161)).toBe(748);
    expect(system.deposit(37, "acc6", 169)).toBe(418);
    expect(system.deposit(38, "acc7", 416)).toBe(452);
    expect(system.deposit(39, "acc8", 952)).toBe(1159);
    expect(system.deposit(40, "acc9", 724)).toBe(821);
    let expected = [
      "acc1(260)",
      "acc10(0)",
      "acc2(0)",
      "acc3(0)",
      "acc4(0)",
      "acc5(0)",
      "acc6(0)",
      "acc7(0)",
      "acc8(0)",
      "acc9(0)",
    ];
    expect(system.topSpenders(41, 10)).toEqual(expected);
    expect(system.transfer(42, "acc1", "acc2", 799)).toBeNull();
    expect(system.transfer(43, "acc9", "acc6", 354)).toBe(467);
    expect(system.transfer(44, "acc3", "acc1", 929)).toBe(268);
    expect(system.transfer(45, "acc9", "acc0", 532)).toBeNull();
    expect(system.transfer(46, "acc3", "acc6", 177)).toBe(91);
    expect(system.transfer(47, "acc2", "acc1", 118)).toBe(867);
    expect(system.transfer(48, "acc4", "acc0", 830)).toBeNull();
    expect(system.transfer(49, "acc10", "acc5", 689)).toBeNull();
    expect(system.transfer(50, "acc6", "acc7", 544)).toBe(405);
    expect(system.transfer(51, "acc0", "acc10", 169)).toBeNull();
    expected = [
      "acc3(1106)",
      "acc6(544)",
      "acc9(354)",
      "acc1(260)",
      "acc2(118)",
      "acc10(0)",
      "acc4(0)",
      "acc5(0)",
      "acc7(0)",
      "acc8(0)",
    ];
    expect(system.topSpenders(52, 10)).toEqual(expected);
  }, 400);
});
