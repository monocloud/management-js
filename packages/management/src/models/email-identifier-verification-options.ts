import { VerificationTypes } from './verification-types';

/**
 * Email Identifier Verification Options Response: Represents email verification settings applied during sign-up.
 * @export
 * @interface EmailIdentifierVerificationOptions
 */
export interface EmailIdentifierVerificationOptions {
  /**
   * Specifies whether the user\'s email address must be verified during sign-up.
   * @type {boolean}
   * @memberof EmailIdentifierVerificationOptions
   */
  verify_at_sign_up: boolean;
  /**
   * Specifies the verification mechanism used for email verification (link, code, or both).
   * @type {VerificationTypes}
   * @memberof EmailIdentifierVerificationOptions
   */
  verification_type: VerificationTypes;
  /**
   * Specifies whether the email verification flow can be resumed in a different browser or device than where it was initiated.
   * @type {boolean}
   * @memberof EmailIdentifierVerificationOptions
   */
  allow_cross_browser: boolean;
  /**
   * Specifies the validity period of the email verification link or code (in seconds).
   * @type {number}
   * @memberof EmailIdentifierVerificationOptions
   */
  expiry: number;
  /**
   * Specifies the number of digits in the email verification code.
   * @note Only applicable when the verification type includes code-based verification.
   * @type {number}
   * @memberof EmailIdentifierVerificationOptions
   */
  code_length: number;
}
