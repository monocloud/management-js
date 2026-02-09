/**
 * Patch Google Authenticator Options Request: Used to partially update Sign in with Google configuration and behavior.
 * @export
 * @interface PatchGoogleAuthenticatorOptionsRequest
 */
export interface PatchGoogleAuthenticatorOptionsRequest {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof PatchGoogleAuthenticatorOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof PatchGoogleAuthenticatorOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof PatchGoogleAuthenticatorOptionsRequest
   */
  use_internal_keys?: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof PatchGoogleAuthenticatorOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof PatchGoogleAuthenticatorOptionsRequest
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof PatchGoogleAuthenticatorOptionsRequest
   */
  client_secret?: string | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof PatchGoogleAuthenticatorOptionsRequest
   */
  scopes?: string[];
  /**
   * Specifies whether the `email_verified` claim from Google is trusted.
   * @note When enabled, MonoCloud skips email verification if Google reports the email as verified.
   * @type {boolean}
   * @memberof PatchGoogleAuthenticatorOptionsRequest
   */
  trust_email_verified_scope?: boolean;
}
