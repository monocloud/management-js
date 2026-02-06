import { SignUpRestrictionsOptions } from './sign-up-restrictions-options';

/**
 * Sign-up Options Response: Represents the sign-up configuration.
 * @export
 * @interface SignUpOptions
 */
export interface SignUpOptions {
  /**
   * Show Terms and/or Privacy Policy on the sign-up screen.
   * @type {boolean}
   * @memberof SignUpOptions
   */
  show_terms_and_privacy_policy: boolean;
  /**
   * Require the user to explicitly agree to the Terms and/or Privacy Policy.
   * @type {boolean}
   * @memberof SignUpOptions
   */
  require_explicit_user_agreement: boolean;
  /**
   * The URL of the Privacy Policy shown during sign-up.
   * @type {string}
   * @memberof SignUpOptions
   */
  privacy_url?: string | null;
  /**
   * The URL of the Terms of Service shown during sign-up.
   * @type {string}
   * @memberof SignUpOptions
   */
  terms_url?: string | null;
  /**
   * Allowlist of identifiers permitted during sign-up.
   * @type {SignUpRestrictionsOptions}
   * @memberof SignUpOptions
   */
  whitelist: SignUpRestrictionsOptions;
  /**
   * Blocklist of identifiers disallowed during sign-up.
   * @type {SignUpRestrictionsOptions}
   * @memberof SignUpOptions
   */
  blacklist: SignUpRestrictionsOptions;
}
