/**
 * Patch Microsoft Authenticator Options Request: Used to partially update Sign in with Microsoft configuration and behavior.
 * @export
 * @interface PatchMicrosoftAuthenticatorOptionsRequest
 */
export interface PatchMicrosoftAuthenticatorOptionsRequest {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof PatchMicrosoftAuthenticatorOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof PatchMicrosoftAuthenticatorOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof PatchMicrosoftAuthenticatorOptionsRequest
   */
  use_internal_keys?: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof PatchMicrosoftAuthenticatorOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof PatchMicrosoftAuthenticatorOptionsRequest
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof PatchMicrosoftAuthenticatorOptionsRequest
   */
  client_secret?: string | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof PatchMicrosoftAuthenticatorOptionsRequest
   */
  scopes?: string[];
  /**
   * Specifies whether email addresses returned by Microsoft should be treated as verified.
   * @note Microsoft does not provide an explicit email verification claim. When enabled, MonoCloud treats the email provided by Microsoft as verified and skips additional email verification.
   * @type {boolean}
   * @memberof PatchMicrosoftAuthenticatorOptionsRequest
   */
  treat_email_as_verified?: boolean;
}
