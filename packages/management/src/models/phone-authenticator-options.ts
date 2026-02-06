/**
 * Phone Authenticator Options Response: Represents the configuration for phone-based authentication.
 * @export
 * @interface PhoneAuthenticatorOptions
 */
export interface PhoneAuthenticatorOptions {
  /**
   * Specifies whether users can sign in using phone-based authentication.
   * @type {boolean}
   * @memberof PhoneAuthenticatorOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether new users can sign up using phone-based authentication.
   * @type {boolean}
   * @memberof PhoneAuthenticatorOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether users can be automatically provisioned on first successful phone authentication (Just-In-Time provisioning).
   * @type {boolean}
   * @memberof PhoneAuthenticatorOptions
   */
  enable_jit_provisioning: boolean;
  /**
   * Specifies the validity period of the phone verification code (in seconds).
   * @type {number}
   * @memberof PhoneAuthenticatorOptions
   */
  expiry: number;
  /**
   * Specifies the number of digits in the phone verification code.
   * @type {number}
   * @memberof PhoneAuthenticatorOptions
   */
  code_length: number;
}
