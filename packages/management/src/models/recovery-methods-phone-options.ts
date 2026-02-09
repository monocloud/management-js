/**
 * Recovery Methods Phone Options Response: Represents the phone-based account and password recovery configuration.
 * @export
 * @interface RecoveryMethodsPhoneOptions
 */
export interface RecoveryMethodsPhoneOptions {
  /**
   * Enables account and password recovery using a phone-based verification code.
   * @type {boolean}
   * @memberof RecoveryMethodsPhoneOptions
   */
  enabled: boolean;
  /**
   * Specifies the validity period of the recovery verification code (in seconds).
   * @type {number}
   * @memberof RecoveryMethodsPhoneOptions
   */
  expiry: number;
  /**
   * Specifies the number of digits in the recovery verification code.
   * @type {number}
   * @memberof RecoveryMethodsPhoneOptions
   */
  code_length: number;
}
