/**
 * External Provider Credentials Response: The client credentials issued by the external identity provider.
 * @export
 * @interface ExternalProviderCredentialsResponse
 */
export interface ExternalProviderCredentialsResponse {
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof ExternalProviderCredentialsResponse
   */
  client_id: string;
  /**
   * The Apple Developer Team ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof ExternalProviderCredentialsResponse
   */
  apple_team_id?: string | null;
  /**
   * The Apple Key ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof ExternalProviderCredentialsResponse
   */
  apple_key_id?: string | null;
}
