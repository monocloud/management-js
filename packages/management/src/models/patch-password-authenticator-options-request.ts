import { PatchPasswordReuseOptionsRequest } from './patch-password-reuse-options-request';
import { PatchPasswordStrengthOptionsRequest } from './patch-password-strength-options-request';

/**
 * Patch Password Authenticator Options Request: Used to partially update password-based authentication configuration.
 * @export
 * @interface PatchPasswordAuthenticatorOptionsRequest
 */
export interface PatchPasswordAuthenticatorOptionsRequest {
  /**
   * Specifies whether users can sign in using password-based authentication.
   * @type {boolean}
   * @memberof PatchPasswordAuthenticatorOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using password-based authentication.
   * @type {boolean}
   * @memberof PatchPasswordAuthenticatorOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether the password is collected on the initial sign-in screen alongside the identifier.
   * @type {boolean}
   * @memberof PatchPasswordAuthenticatorOptionsRequest
   */
  prompt_password_on_initial_screen?: boolean;
  /**
   * Specifies the password expiration interval (in days). When empty, passwords do not expire.
   * @type {number}
   * @memberof PatchPasswordAuthenticatorOptionsRequest
   */
  expiry?: number | null;
  /**
   * Password strength policy configuration.
   * @note Pro plan required to customize password strength options.
   * @type {PatchPasswordStrengthOptionsRequest}
   * @memberof PatchPasswordAuthenticatorOptionsRequest
   */
  strength?: PatchPasswordStrengthOptionsRequest;
  /**
   * Password reuse policy configuration.
   * @type {PatchPasswordReuseOptionsRequest}
   * @memberof PatchPasswordAuthenticatorOptionsRequest
   */
  reuse?: PatchPasswordReuseOptionsRequest;
}
