/**
 * The refresh tokens expiration type.
 * @export
 * @enum {string}
 */

export const RefreshTokenExpirationTypes = {
  /**
   * Refresh tokens use a sliding expiration model. Each successful refresh extends the token lifetime (up to the configured absolute refresh token lifetime).
   */
  Sliding: 'sliding',

  /**
   * Refresh tokens expire at a fixed point in time, based on the configured absolute refresh token lifetime — regardless of usage.
   */
  Absolute: 'absolute',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RefreshTokenExpirationTypes =
  (typeof RefreshTokenExpirationTypes)[keyof typeof RefreshTokenExpirationTypes];
