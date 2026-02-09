import { PhoneIdentifierVerificationOptions } from './phone-identifier-verification-options';

/**
 * Phone Identifier Options Response: Represents phone sign-in, sign-up, and verification configuration.
 * @export
 * @interface PhoneIdentifierOptions
 */
export interface PhoneIdentifierOptions {
  /**
   * Specifies whether users can sign in using a phone number.
   * @type {boolean}
   * @memberof PhoneIdentifierOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether a phone number can be collected during sign-up.
   * @type {boolean}
   * @memberof PhoneIdentifierOptions
   */
  show_at_sign_up: boolean;
  /**
   * Specifies whether a phone number is required during sign-up.
   * @type {boolean}
   * @memberof PhoneIdentifierOptions
   */
  required_at_sign_up: boolean;
  /**
   * Phone verification configuration applied during sign-up.
   * @type {PhoneIdentifierVerificationOptions}
   * @memberof PhoneIdentifierOptions
   */
  verification: PhoneIdentifierVerificationOptions;
}
