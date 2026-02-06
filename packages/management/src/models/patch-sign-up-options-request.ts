import { PatchSignUpRestrictionsOptionsRequest } from './patch-sign-up-restrictions-options-request';

/**
 * Patch Sign-up Options Request: Used to update the sign-up configuration.
 * @export
 * @interface PatchSignUpOptionsRequest
 */
export interface PatchSignUpOptionsRequest {
  /**
   * Show Terms and/or Privacy Policy on the sign-up screen.
   * @note Pro plan required to enable Terms and/or Privacy Policy.
   * @type {boolean}
   * @memberof PatchSignUpOptionsRequest
   */
  show_terms_and_privacy_policy?: boolean;
  /**
   * Require the user to explicitly agree to the Terms and/or Privacy Policy.
   * @type {boolean}
   * @memberof PatchSignUpOptionsRequest
   */
  require_explicit_user_agreement?: boolean;
  /**
   * The URL of the Privacy Policy shown during sign-up.
   * @type {string}
   * @memberof PatchSignUpOptionsRequest
   */
  privacy_url?: string | null;
  /**
   * The URL of the Terms of Service shown during sign-up.
   * @type {string}
   * @memberof PatchSignUpOptionsRequest
   */
  terms_url?: string | null;
  /**
   * Allowlist of identifiers permitted during sign-up.
   * @type {PatchSignUpRestrictionsOptionsRequest}
   * @memberof PatchSignUpOptionsRequest
   */
  whitelist?: PatchSignUpRestrictionsOptionsRequest;
  /**
   * Blocklist of identifiers disallowed during sign-up.
   * @type {PatchSignUpRestrictionsOptionsRequest}
   * @memberof PatchSignUpOptionsRequest
   */
  blacklist?: PatchSignUpRestrictionsOptionsRequest;
}
