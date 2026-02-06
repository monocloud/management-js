/**
 * The verification type.
 * @export
 * @enum {string}
 */

export const VerificationTypes = {
  /**
   * Verification is performed using a one-time code.
   */
  Code: 'code',

  /**
   * Verification is performed using a secure verification link.
   */
  Link: 'link',

  /**
   * Verification can be performed using either a code or a link.
   */
  Both: 'both',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type VerificationTypes =
  (typeof VerificationTypes)[keyof typeof VerificationTypes];
