import { ExternalAuthenticators } from './external-authenticators';

/**
 * External Authenticator Disconnect Request: Removes an existing external identity provider connection from a user account.
 * @export
 * @interface ExternalAuthenticatorDisconnectRequest
 */
export interface ExternalAuthenticatorDisconnectRequest {
  /**
   * The external authentication provider to disconnect from the user account.
   * @type {ExternalAuthenticators}
   * @memberof ExternalAuthenticatorDisconnectRequest
   */
  authenticator: ExternalAuthenticators;
  /**
   * The user identifier assigned by the external authentication provider.
   * @type {string}
   * @memberof ExternalAuthenticatorDisconnectRequest
   */
  provider_user_id: string;
}
