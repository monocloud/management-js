/**
 * Patch Passkey Authenticator Options Request: Used to partially update passkey-based authentication configuration.
 * @export
 * @interface PatchPasskeyAuthenticatorOptionsRequest
 */
export interface PatchPasskeyAuthenticatorOptionsRequest {
  /**
   * Specifies whether users can sign in using passkeys.
   * @note Pro plan subscription required to use Passkeys.
   * @type {boolean}
   * @memberof PatchPasskeyAuthenticatorOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using passkeys.
   * @note Pro plan subscription required to use Passkeys.
   * @type {boolean}
   * @memberof PatchPasskeyAuthenticatorOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether users should be prompted to enroll a passkey if none exists.
   * @type {boolean}
   * @memberof PatchPasskeyAuthenticatorOptionsRequest
   */
  prompt_enrollment?: boolean;
  /**
   * Specifies whether users should be prompted to enroll a passkey for the current device if no device-specific passkey exists.
   * @type {boolean}
   * @memberof PatchPasskeyAuthenticatorOptionsRequest
   */
  prompt_device_enrollment?: boolean;
  /**
   * Specifies whether passkeys can be auto-filled using the identifier field on the sign-in page.
   * @type {boolean}
   * @memberof PatchPasskeyAuthenticatorOptionsRequest
   */
  enable_auto_complete?: boolean;
  /**
   * Specifies whether the “Continue with Passkey” button is shown on the sign-in page.
   * @type {boolean}
   * @memberof PatchPasskeyAuthenticatorOptionsRequest
   */
  show_passkey_button?: boolean;
}
