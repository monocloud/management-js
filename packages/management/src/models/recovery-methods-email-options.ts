import { VerificationTypes } from './verification-types';

/**
 * Recovery Methods Email Options Response: Represents the email-based account and password recovery configuration.
 * @export
 * @interface RecoveryMethodsEmailOptions
 */
export interface RecoveryMethodsEmailOptions {
  /**
   * Enables account and password recovery using email-based verification.
   * @type {boolean}
   * @memberof RecoveryMethodsEmailOptions
   */
  enabled: boolean;
  /**
   * Specifies the verification mechanism used for email password recovery (link, code, or both).
   * @type {VerificationTypes}
   * @memberof RecoveryMethodsEmailOptions
   */
  verification_type: VerificationTypes;
  /**
   * Specifies whether the password recovery flow can be resumed in a different browser or device than where it was initiated.
   * @type {boolean}
   * @memberof RecoveryMethodsEmailOptions
   */
  allow_cross_browser: boolean;
  /**
   * Specifies the validity period of the email recovery verification link or code (in seconds).
   * @type {number}
   * @memberof RecoveryMethodsEmailOptions
   */
  expiry: number;
  /**
   * Specifies the number of digits in the email recovery verification code.
   * @note Only applicable when the verification type includes code-based recovery.
   * @type {number}
   * @memberof RecoveryMethodsEmailOptions
   */
  code_length: number;
}
