/**
 * Passkey Authenticator Options Response: Represents the configuration for passkey-based authentication.
 * @export
 * @interface PasskeyAuthenticatorOptions
 */
export interface PasskeyAuthenticatorOptions {
  /**
   * Specifies whether users can sign in using passkeys.
   * @note Pro plan subscription required to use Passkeys.
   * @type {boolean}
   * @memberof PasskeyAuthenticatorOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether new users can sign up using passkeys.
   * @note Pro plan subscription required to use Passkeys.
   * @type {boolean}
   * @memberof PasskeyAuthenticatorOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether users should be prompted to enroll a passkey if none exists.
   * @type {boolean}
   * @memberof PasskeyAuthenticatorOptions
   */
  prompt_enrollment: boolean;
  /**
   * Specifies whether users should be prompted to enroll a passkey for the current device if no device-specific passkey exists.
   * @type {boolean}
   * @memberof PasskeyAuthenticatorOptions
   */
  prompt_device_enrollment: boolean;
  /**
   * Specifies whether passkeys can be auto-filled using the identifier field on the sign-in page.
   * @type {boolean}
   * @memberof PasskeyAuthenticatorOptions
   */
  enable_auto_complete: boolean;
  /**
   * Specifies whether the “Continue with Passkey” button is shown on the sign-in page.
   * @type {boolean}
   * @memberof PasskeyAuthenticatorOptions
   */
  show_passkey_button: boolean;
}
