import { VerificationTypes } from './verification-types';

/**
 * Email Authenticator Options Response: Represents the configuration for email-based authentication.
 * @export
 * @interface EmailAuthenticatorOptions
 */
export interface EmailAuthenticatorOptions {
  /**
   * Specifies whether users can sign in using email-based authentication.
   * @type {boolean}
   * @memberof EmailAuthenticatorOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether new users can sign up using email-based authentication.
   * @type {boolean}
   * @memberof EmailAuthenticatorOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether users can be automatically provisioned on first successful email authentication (Just-In-Time provisioning).
   * @type {boolean}
   * @memberof EmailAuthenticatorOptions
   */
  enable_jit_provisioning: boolean;
  /**
   * Specifies the verification mechanism used for email authentication (link, code, or both).
   * @type {VerificationTypes}
   * @memberof EmailAuthenticatorOptions
   */
  verification_type: VerificationTypes;
  /**
   * Specifies whether the authentication flow can be resumed in a different browser or device than where it was initiated.
   * @type {boolean}
   * @memberof EmailAuthenticatorOptions
   */
  allow_cross_browser: boolean;
  /**
   * Specifies the validity period of the email verification link or code (in seconds).
   * @type {number}
   * @memberof EmailAuthenticatorOptions
   */
  expiry: number;
  /**
   * Specifies the number of digits in the email verification code.
   * @note Only applicable when the verification type includes code-based verification.
   * @type {number}
   * @memberof EmailAuthenticatorOptions
   */
  code_length: number;
}
