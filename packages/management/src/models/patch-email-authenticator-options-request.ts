import { VerificationTypes } from './verification-types';

/**
 * Patch Email Authenticator Options Request: Used to partially update email-based authentication configuration.
 * @export
 * @interface PatchEmailAuthenticatorOptionsRequest
 */
export interface PatchEmailAuthenticatorOptionsRequest {
  /**
   * Specifies whether users can sign in using email-based authentication.
   * @type {boolean}
   * @memberof PatchEmailAuthenticatorOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using email-based authentication.
   * @type {boolean}
   * @memberof PatchEmailAuthenticatorOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether users can be automatically provisioned on first successful email authentication (Just-In-Time provisioning).
   * @type {boolean}
   * @memberof PatchEmailAuthenticatorOptionsRequest
   */
  enable_jit_provisioning?: boolean;
  /**
   * Specifies the verification mechanism used for email authentication (link, code, or both).
   * @type {VerificationTypes}
   * @memberof PatchEmailAuthenticatorOptionsRequest
   */
  verification_type?: VerificationTypes;
  /**
   * Specifies whether the authentication flow can be resumed in a different browser or device than where it was initiated.
   * @type {boolean}
   * @memberof PatchEmailAuthenticatorOptionsRequest
   */
  allow_cross_browser?: boolean;
  /**
   * Specifies the validity period of the email verification link or code (in seconds).
   * @note Pro plan required to customize the expiry.
   * @type {number}
   * @memberof PatchEmailAuthenticatorOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the number of digits in the email verification code.
   * @note Only applicable when the verification type includes code-based verification. Pro plan required to customize the code length.
   * @type {number}
   * @memberof PatchEmailAuthenticatorOptionsRequest
   */
  code_length?: number;
}
