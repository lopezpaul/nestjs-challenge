/**
 * `BankingSystem` interface.
 */
class BankingSystemInterface {
  constructor() {}

  /**
   * Should create a new account with the given identifier if it
   * does not already exist.
   * Returns `true` if the account was successfully created or
   * `false` if an account with `accountId` already exists.
   *
   * @param {number} timestamp
   * @param {string} accountId
   * @returns {boolean}
   */
  createAccount(timestamp: number, accountId: string): boolean {
    // default implementation
    return false;
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
   * @returns {number | null}
   */
  deposit(timestamp: number, accountId: string, amount: number): number | null {
    // default implementation
    return null;
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
   * @returns {number | null}
   */
  transfer(
    timestamp: number,
    sourceAccountId: string,
    targetAccountId: string,
    amount: number
  ): number | null {
    // default implementation
    return null;
  }
}

export default BankingSystemInterface;
