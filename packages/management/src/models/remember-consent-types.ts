/**
 * The remember consent type.
 * @export
 * @enum {string}
 */

export const RememberConsentTypes = {
  /**
   * Consent is never remembered. Users are prompted every time.
   */
  Never: 'never',

  /**
   * Consent is always remembered automatically and never prompted again.
   */
  Always: 'always',

  /**
   * Users may choose whether their consent decision should be remembered.
   */
  UserSelected: 'user_selected',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RememberConsentTypes =
  (typeof RememberConsentTypes)[keyof typeof RememberConsentTypes];
