/**
 * Patch Twitter Authenticator Options Request: Used to partially update Sign in with Twitter/X configuration and behavior.
 * @export
 * @interface PatchTwitterAuthenticatorOptionsRequest
 */
export interface PatchTwitterAuthenticatorOptionsRequest {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof PatchTwitterAuthenticatorOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof PatchTwitterAuthenticatorOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof PatchTwitterAuthenticatorOptionsRequest
   */
  use_internal_keys?: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof PatchTwitterAuthenticatorOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof PatchTwitterAuthenticatorOptionsRequest
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof PatchTwitterAuthenticatorOptionsRequest
   */
  client_secret?: string | null;
  /**
   * Specifies whether email addresses returned by Twitter/X should be treated as verified.
   * @note Twitter/X does not provide an explicit email verification claim. When enabled, MonoCloud treats the email provided by Twitter/X as verified and skips additional email verification.
   * @type {boolean}
   * @memberof PatchTwitterAuthenticatorOptionsRequest
   */
  treat_email_as_verified?: boolean;
}
