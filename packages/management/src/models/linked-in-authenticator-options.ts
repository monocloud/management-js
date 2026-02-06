/**
 * LinkedIn Authenticator Options Response: Represents the Sign in with LinkedIn authentication configuration.
 * @export
 * @interface LinkedInAuthenticatorOptions
 */
export interface LinkedInAuthenticatorOptions {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof LinkedInAuthenticatorOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof LinkedInAuthenticatorOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof LinkedInAuthenticatorOptions
   */
  use_internal_keys: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof LinkedInAuthenticatorOptions
   */
  sync_user_profile_always: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof LinkedInAuthenticatorOptions
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof LinkedInAuthenticatorOptions
   */
  client_secret?: string | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof LinkedInAuthenticatorOptions
   */
  scopes: string[];
  /**
   * Specifies whether the `email_verified` claim from LinkedIn is trusted.
   * @note When enabled, MonoCloud skips email verification if LinkedIn reports the email as verified.
   * @type {boolean}
   * @memberof LinkedInAuthenticatorOptions
   */
  trust_email_verified_scope: boolean;
}
