/**
 * Determines whether an email received from an external identity provider is treated as verified.
 * @export
 * @enum {string}
 */

export const TrustEmailModes = {
  /**
   * The email is treated as verified based on the email_verified claim received from the external provider.
   */
  AsProvided: 'as_provided',

  /**
   * The email is never treated as verified.
   */
  Never: 'never',

  /**
   * The email is always treated as verified.
   */
  Always: 'always',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TrustEmailModes =
  (typeof TrustEmailModes)[keyof typeof TrustEmailModes];
