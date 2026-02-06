/**
 * Patch Phone Authenticator Options Request: Used to partially update phone-based authentication configuration.
 * @export
 * @interface PatchPhoneAuthenticatorOptionsRequest
 */
export interface PatchPhoneAuthenticatorOptionsRequest {
  /**
   * Specifies whether users can sign in using phone-based authentication.
   * @type {boolean}
   * @memberof PatchPhoneAuthenticatorOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using phone-based authentication.
   * @type {boolean}
   * @memberof PatchPhoneAuthenticatorOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether users can be automatically provisioned on first successful phone authentication (Just-In-Time provisioning).
   * @type {boolean}
   * @memberof PatchPhoneAuthenticatorOptionsRequest
   */
  enable_jit_provisioning?: boolean;
  /**
   * Specifies the validity period of the phone verification code (in seconds).
   * @note Pro plan required to customize the expiry.
   * @type {number}
   * @memberof PatchPhoneAuthenticatorOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the number of digits in the phone verification code.
   * @note Pro plan required to customize the code length.
   * @type {number}
   * @memberof PatchPhoneAuthenticatorOptionsRequest
   */
  code_length?: number;
}
