import { VerificationTypes } from './verification-types';

/**
 * Patch Email Recovery Method Options Request: Used to update email-based account and password recovery configuration.
 * @export
 * @interface PatchRecoveryMethodsEmailOptionsRequest
 */
export interface PatchRecoveryMethodsEmailOptionsRequest {
  /**
   * Enables account and password recovery using email-based verification.
   * @type {boolean}
   * @memberof PatchRecoveryMethodsEmailOptionsRequest
   */
  enabled?: boolean;
  /**
   * Specifies the verification mechanism used for email password recovery (link, code, or both).
   * @type {VerificationTypes}
   * @memberof PatchRecoveryMethodsEmailOptionsRequest
   */
  verification_type?: VerificationTypes;
  /**
   * Specifies whether the password recovery flow can be resumed in a different browser or device than where it was initiated.
   * @type {boolean}
   * @memberof PatchRecoveryMethodsEmailOptionsRequest
   */
  allow_cross_browser?: boolean;
  /**
   * Specifies the validity period of the email recovery verification link or code (in seconds).
   * @note Pro plan required to customize the expiry.
   * @type {number}
   * @memberof PatchRecoveryMethodsEmailOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the number of digits in the email recovery verification code.
   * @note Only applicable when the verification type includes code-based recovery. Pro plan required to customize the code length.
   * @type {number}
   * @memberof PatchRecoveryMethodsEmailOptionsRequest
   */
  code_length?: number;
}
