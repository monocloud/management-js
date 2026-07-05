/**
 * External Authenticator Credentials Response: The client credentials issued by the external identity provider.
 * @export
 * @interface ExternalAuthenticatorCredentialsResponse
 */
export interface ExternalAuthenticatorCredentialsResponse {
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof ExternalAuthenticatorCredentialsResponse
   */
  client_id: string;
  /**
   * The Apple Developer Team ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof ExternalAuthenticatorCredentialsResponse
   */
  apple_team_id?: string | null;
  /**
   * The Apple Key ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof ExternalAuthenticatorCredentialsResponse
   */
  apple_key_id?: string | null;
}
