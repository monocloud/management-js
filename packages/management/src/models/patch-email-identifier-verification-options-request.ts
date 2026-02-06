import { VerificationTypes } from './verification-types';

/**
 * Patch Email Identifier Verification Options Request: Used to update email address verification settings.
 * @export
 * @interface PatchEmailIdentifierVerificationOptionsRequest
 */
export interface PatchEmailIdentifierVerificationOptionsRequest {
  /**
   * Specifies whether the user\'s email address must be verified during sign-up.
   * @type {boolean}
   * @memberof PatchEmailIdentifierVerificationOptionsRequest
   */
  verify_at_sign_up?: boolean;
  /**
   * Specifies the verification mechanism used for email verification (link, code, or both).
   * @type {VerificationTypes}
   * @memberof PatchEmailIdentifierVerificationOptionsRequest
   */
  verification_type?: VerificationTypes;
  /**
   * Specifies whether the email verification flow can be resumed in a different browser or device than where it was initiated.
   * @type {boolean}
   * @memberof PatchEmailIdentifierVerificationOptionsRequest
   */
  allow_cross_browser?: boolean;
  /**
   * Specifies the validity period of the email verification link or code (in seconds).
   * @note Pro plan required to customize the expiry.
   * @type {number}
   * @memberof PatchEmailIdentifierVerificationOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the number of digits in the email verification code.
   * @note Only applicable when the verification type includes code-based verification. Pro plan required to customize the code length.
   * @type {number}
   * @memberof PatchEmailIdentifierVerificationOptionsRequest
   */
  code_length?: number;
}
