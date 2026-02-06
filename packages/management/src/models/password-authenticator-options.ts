import { PasswordReuseOptions } from './password-reuse-options';
import { PasswordStrengthOptions } from './password-strength-options';

/**
 * Password Authenticator Options Response: Represents the configuration for password-based authentication.
 * @export
 * @interface PasswordAuthenticatorOptions
 */
export interface PasswordAuthenticatorOptions {
  /**
   * Specifies whether users can sign in using password-based authentication.
   * @type {boolean}
   * @memberof PasswordAuthenticatorOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether new users can sign up using password-based authentication.
   * @type {boolean}
   * @memberof PasswordAuthenticatorOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether the password is collected on the initial sign-in screen alongside the identifier.
   * @type {boolean}
   * @memberof PasswordAuthenticatorOptions
   */
  prompt_password_on_initial_screen: boolean;
  /**
   * Specifies the password expiration interval (in days). When empty, passwords do not expire.
   * @type {number}
   * @memberof PasswordAuthenticatorOptions
   */
  expiry?: number | null;
  /**
   * Password strength policy configuration.
   * @type {PasswordStrengthOptions}
   * @memberof PasswordAuthenticatorOptions
   */
  strength: PasswordStrengthOptions;
  /**
   * Password reuse policy configuration.
   * @type {PasswordReuseOptions}
   * @memberof PasswordAuthenticatorOptions
   */
  reuse: PasswordReuseOptions;
}
