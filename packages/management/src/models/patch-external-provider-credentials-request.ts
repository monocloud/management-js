/**
 * Patch External Provider Credentials Request: Used to update client credentials used by an external authenticator.
 * @export
 * @interface PatchExternalProviderCredentialsRequest
 */
export interface PatchExternalProviderCredentialsRequest {
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof PatchExternalProviderCredentialsRequest
   */
  client_id?: string;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof PatchExternalProviderCredentialsRequest
   */
  client_secret?: string;
  /**
   * The Apple Developer Team ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof PatchExternalProviderCredentialsRequest
   */
  apple_team_id?: string | null;
  /**
   * The Apple Key ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof PatchExternalProviderCredentialsRequest
   */
  apple_key_id?: string | null;
}
