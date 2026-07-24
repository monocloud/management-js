/**
 * Create External Provider Credentials Request: The client credentials issued by the external identity provider.
 * @export
 * @interface CreateExternalProviderCredentialsRequest
 */
export interface CreateExternalProviderCredentialsRequest {
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof CreateExternalProviderCredentialsRequest
   */
  client_id: string;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof CreateExternalProviderCredentialsRequest
   */
  client_secret: string;
  /**
   * The Apple Developer Team ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof CreateExternalProviderCredentialsRequest
   */
  apple_team_id?: string | null;
  /**
   * The Apple Key ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof CreateExternalProviderCredentialsRequest
   */
  apple_key_id?: string | null;
}
