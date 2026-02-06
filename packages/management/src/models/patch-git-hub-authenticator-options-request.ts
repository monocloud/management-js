/**
 * Patch GitHub Authenticator Options Request: Used to partially update Sign in with GitHub configuration and behavior.
 * @export
 * @interface PatchGitHubAuthenticatorOptionsRequest
 */
export interface PatchGitHubAuthenticatorOptionsRequest {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof PatchGitHubAuthenticatorOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof PatchGitHubAuthenticatorOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof PatchGitHubAuthenticatorOptionsRequest
   */
  use_internal_keys?: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof PatchGitHubAuthenticatorOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof PatchGitHubAuthenticatorOptionsRequest
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof PatchGitHubAuthenticatorOptionsRequest
   */
  client_secret?: string | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof PatchGitHubAuthenticatorOptionsRequest
   */
  scopes?: string[];
  /**
   * Specifies whether the `email_verified` claim from GitHub is trusted.
   * @note When enabled, MonoCloud skips email verification if GitHub reports the email as verified.
   * @type {boolean}
   * @memberof PatchGitHubAuthenticatorOptionsRequest
   */
  trust_email_verified_scope?: boolean;
}
