/**
 * Patch Sign-Up Restrictions Options Request: Used to update identifier-based allowlist or blocklist configuration for the sign-up flow.
 * @export
 * @interface PatchSignUpRestrictionsOptionsRequest
 */
export interface PatchSignUpRestrictionsOptionsRequest {
  /**
   * Indicates whether the identifier restriction list is active.
   * @note Pro plan subscription required to use sign-up restrictions.
   * @type {boolean}
   * @memberof PatchSignUpRestrictionsOptionsRequest
   */
  enabled?: boolean;
  /**
   * A set of identifiers (email addresses, phone numbers, or domains) used for sign-up access control.
   * @type {string[]}
   * @memberof PatchSignUpRestrictionsOptionsRequest
   */
  identifiers?: string[];
}
