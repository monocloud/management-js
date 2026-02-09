/**
 * Patch Phone Identifier Verification Options Request: Used to update phone number verification settings.
 * @export
 * @interface PatchPhoneIdentifierVerificationOptionsRequest
 */
export interface PatchPhoneIdentifierVerificationOptionsRequest {
  /**
   * Specifies whether the user\'s phone number must be verified during sign-up.
   * @type {boolean}
   * @memberof PatchPhoneIdentifierVerificationOptionsRequest
   */
  verify_at_sign_up?: boolean;
  /**
   * Specifies the validity period of the phone verification code (in seconds).
   * @note Pro plan required to customize the expiry.
   * @type {number}
   * @memberof PatchPhoneIdentifierVerificationOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the number of digits in the phone verification code.
   * @note Pro plan required to customize the code length.
   * @type {number}
   * @memberof PatchPhoneIdentifierVerificationOptionsRequest
   */
  code_length?: number;
}
