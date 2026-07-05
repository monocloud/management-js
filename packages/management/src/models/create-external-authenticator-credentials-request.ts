/**
 * Create External Authenticator Credentials Request: The client credentials issued by the external identity provider.
 * @export
 * @interface CreateExternalAuthenticatorCredentialsRequest
 */
export interface CreateExternalAuthenticatorCredentialsRequest {
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof CreateExternalAuthenticatorCredentialsRequest
   */
  client_id: string;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof CreateExternalAuthenticatorCredentialsRequest
   */
  client_secret: string;
  /**
   * The Apple Developer Team ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof CreateExternalAuthenticatorCredentialsRequest
   */
  apple_team_id?: string | null;
  /**
   * The Apple Key ID used to sign the client secret. Applies only to the Sign in with Apple provider.
   * @type {string}
   * @memberof CreateExternalAuthenticatorCredentialsRequest
   */
  apple_key_id?: string | null;
}
