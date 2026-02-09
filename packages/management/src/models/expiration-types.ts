/**
 * The expiration type.
 * @export
 * @enum {string}
 */

export const ExpirationTypes = {
  /**
   * Sessions use a sliding expiration model. Each successful interaction with the authorization server extends the session lifetime (up to the configured absolute session lifetime).
   */
  Sliding: 'sliding',

  /**
   * Sessions expire at a fixed point in time, based on the configured absolute session lifetime — regardless of user activity.
   */
  Absolute: 'absolute',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ExpirationTypes =
  (typeof ExpirationTypes)[keyof typeof ExpirationTypes];
