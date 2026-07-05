/**
 * Patch External Authenticator Credentials Request: Used to update client credentials used by an external authenticator.
 * @export
 * @interface PatchExternalAuthenticatorCredentialsRequest
 */
export interface PatchExternalAuthenticatorCredentialsRequest {
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof PatchExternalAuthenticatorCredentialsRequest
   */
  client_id?: string;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof PatchExternalAuthenticatorCredentialsRequest
   */
  client_secret?: string;
  /**
   * The Apple Developer Team ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof PatchExternalAuthenticatorCredentialsRequest
   */
  apple_team_id?: string | null;
  /**
   * The Apple Key ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof PatchExternalAuthenticatorCredentialsRequest
   */
  apple_key_id?: string | null;
}
