/**
 * The refresh tokens usage type.
 * @export
 * @enum {string}
 */

export const RefreshTokenUsageTypes = {
  /**
   * The same refresh token can be used repeatedly to obtain new tokens.
   */
  Reuse: 'reuse',

  /**
   * A new refresh token is issued on every refresh, and the previous one becomes invalid.
   */
  OneTimeOnly: 'one_time_only',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RefreshTokenUsageTypes =
  (typeof RefreshTokenUsageTypes)[keyof typeof RefreshTokenUsageTypes];
