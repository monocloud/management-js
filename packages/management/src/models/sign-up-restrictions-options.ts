/**
 * Sign-Up Restrictions Options Response: Represents identifier-based allowlist or blocklist configuration applied during sign-up.
 * @export
 * @interface SignUpRestrictionsOptions
 */
export interface SignUpRestrictionsOptions {
  /**
   * Indicates whether the identifier restriction list is active.
   * @note Pro plan subscription required to use sign-up restrictions.
   * @type {boolean}
   * @memberof SignUpRestrictionsOptions
   */
  enabled: boolean;
  /**
   * A set of identifiers (email addresses, phone numbers, or domains) used for sign-up access control.
   * @type {string[]}
   * @memberof SignUpRestrictionsOptions
   */
  identifiers: string[];
}
