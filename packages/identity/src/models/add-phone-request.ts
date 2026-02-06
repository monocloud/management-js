/**
 * Add Phone Request: Used to add a new phone number for a user account.
 * @export
 * @interface AddPhoneRequest
 */
export interface AddPhoneRequest {
  /**
   * The phone number to add to the user’s account in E.164 format.
   * @type {string}
   * @memberof AddPhoneRequest
   */
  phone_number: string;
  /**
   * Indicates whether the phone number should be marked as verified when added. Verification may be required before the number can be used in login or recovery flows.
   * @type {boolean}
   * @memberof AddPhoneRequest
   */
  is_verified?: boolean;
  /**
   * Allows bypassing blacklist validation for the provided phone number.
   * @type {boolean}
   * @memberof AddPhoneRequest
   */
  skip_restriction_checks?: boolean;
}
