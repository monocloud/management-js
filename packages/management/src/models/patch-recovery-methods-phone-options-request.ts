/**
 * Patch Phone Recovery Method Options Request: Used to update phone-based account and password recovery configuration.
 * @export
 * @interface PatchRecoveryMethodsPhoneOptionsRequest
 */
export interface PatchRecoveryMethodsPhoneOptionsRequest {
  /**
   * Enables account and password recovery using a phone-based verification code.
   * @type {boolean}
   * @memberof PatchRecoveryMethodsPhoneOptionsRequest
   */
  enabled?: boolean;
  /**
   * Specifies the validity period of the recovery verification code (in seconds).
   * @note Pro plan required to customize the expiry.
   * @type {number}
   * @memberof PatchRecoveryMethodsPhoneOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the number of digits in the recovery verification code.
   * @note Pro plan required to customize the code length.
   * @type {number}
   * @memberof PatchRecoveryMethodsPhoneOptionsRequest
   */
  code_length?: number;
}
