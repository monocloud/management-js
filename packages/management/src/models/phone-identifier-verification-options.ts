/**
 * Phone Identifier Verification Options Response: Represents phone number verification settings applied during sign-up.
 * @export
 * @interface PhoneIdentifierVerificationOptions
 */
export interface PhoneIdentifierVerificationOptions {
  /**
   * Specifies whether the user\'s phone number must be verified during sign-up.
   * @type {boolean}
   * @memberof PhoneIdentifierVerificationOptions
   */
  verify_at_sign_up: boolean;
  /**
   * Specifies the validity period of the phone verification code (in seconds).
   * @type {number}
   * @memberof PhoneIdentifierVerificationOptions
   */
  expiry: number;
  /**
   * Specifies the number of digits in the phone verification code.
   * @type {number}
   * @memberof PhoneIdentifierVerificationOptions
   */
  code_length: number;
}
