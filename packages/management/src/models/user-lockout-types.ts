/**
 * The user lockout type.
 * @export
 * @enum {string}
 */

export const UserLockoutTypes = {
  /**
   * Locks out an IP address from attempting authentication for a user account.
   */
  Ip: 'ip',

  /**
   * Locks out the user account regardless of IP address.
   */
  UserAccount: 'user_account',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserLockoutTypes =
  (typeof UserLockoutTypes)[keyof typeof UserLockoutTypes];
