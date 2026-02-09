/**
 * The password hashing algorithm.
 * @export
 * @enum {string}
 */

export const PasswordAlgorithms = {
  /**
   * BCrypt adaptive password hashing algorithm
   */
  Bcrypt: 'bcrypt',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type PasswordAlgorithms =
  (typeof PasswordAlgorithms)[keyof typeof PasswordAlgorithms];
