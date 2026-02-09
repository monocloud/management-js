/**
 * Google Authenticator Options Response: Represents the Sign in with Google authentication configuration.
 * @export
 * @interface GoogleAuthenticatorOptions
 */
export interface GoogleAuthenticatorOptions {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof GoogleAuthenticatorOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof GoogleAuthenticatorOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof GoogleAuthenticatorOptions
   */
  use_internal_keys: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof GoogleAuthenticatorOptions
   */
  sync_user_profile_always: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof GoogleAuthenticatorOptions
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof GoogleAuthenticatorOptions
   */
  client_secret?: string | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof GoogleAuthenticatorOptions
   */
  scopes: string[];
  /**
   * Specifies whether the `email_verified` claim from Google is trusted.
   * @note When enabled, MonoCloud skips email verification if Google reports the email as verified.
   * @type {boolean}
   * @memberof GoogleAuthenticatorOptions
   */
  trust_email_verified_scope: boolean;
}
