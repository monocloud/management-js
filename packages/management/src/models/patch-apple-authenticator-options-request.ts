/**
 * Patch Apple Authenticator Options Request: Used to partially update Sign in with Apple configuration and behavior.
 * @export
 * @interface PatchAppleAuthenticatorOptionsRequest
 */
export interface PatchAppleAuthenticatorOptionsRequest {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof PatchAppleAuthenticatorOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof PatchAppleAuthenticatorOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof PatchAppleAuthenticatorOptionsRequest
   */
  use_internal_keys?: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof PatchAppleAuthenticatorOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof PatchAppleAuthenticatorOptionsRequest
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof PatchAppleAuthenticatorOptionsRequest
   */
  client_secret?: string | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof PatchAppleAuthenticatorOptionsRequest
   */
  scopes?: string[];
  /**
   * Specifies whether the `email_verified` claim from Apple is trusted.
   * @note When enabled, MonoCloud skips email verification if Apple reports the email as verified.
   * @type {boolean}
   * @memberof PatchAppleAuthenticatorOptionsRequest
   */
  trust_email_verified_scope?: boolean;
  /**
   * The Apple Developer Team ID associated with the Sign in with Apple configuration.
   * @type {string}
   * @memberof PatchAppleAuthenticatorOptionsRequest
   */
  team_id?: string | null;
  /**
   * The Apple Key ID used to sign the client secret for Sign in with Apple.
   * @type {string}
   * @memberof PatchAppleAuthenticatorOptionsRequest
   */
  key_id?: string | null;
}
