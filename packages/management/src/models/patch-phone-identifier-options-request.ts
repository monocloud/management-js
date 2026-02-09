import { PatchPhoneIdentifierVerificationOptionsRequest } from './patch-phone-identifier-verification-options-request';

/**
 * Patch Phone Identifier Options Request: Used to update phone sign-in, sign-up, and verification settings.
 * @export
 * @interface PatchPhoneIdentifierOptionsRequest
 */
export interface PatchPhoneIdentifierOptionsRequest {
  /**
   * Specifies whether users can sign in using a phone number.
   * @type {boolean}
   * @memberof PatchPhoneIdentifierOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether a phone number can be collected during sign-up.
   * @type {boolean}
   * @memberof PatchPhoneIdentifierOptionsRequest
   */
  show_at_sign_up?: boolean;
  /**
   * Specifies whether a phone number is required during sign-up.
   * @type {boolean}
   * @memberof PatchPhoneIdentifierOptionsRequest
   */
  required_at_sign_up?: boolean;
  /**
   * Phone verification configuration applied during sign-up.
   * @type {PatchPhoneIdentifierVerificationOptionsRequest}
   * @memberof PatchPhoneIdentifierOptionsRequest
   */
  verification?: PatchPhoneIdentifierVerificationOptionsRequest;
}
