import { ExternalAuthenticators } from './external-authenticators';

/**
 * External Provider: Represents a linked identity provider account for the user.
 * @export
 * @interface UserExternalProvider
 */
export interface UserExternalProvider {
  /**
   * The authenticator associated with this connection.
   * @type {ExternalAuthenticators}
   * @memberof UserExternalProvider
   */
  authenticator: ExternalAuthenticators;
  /**
   * The user identifier assigned by the identity provider.
   * @type {string}
   * @memberof UserExternalProvider
   */
  provider_user_id: string;
  /**
   * Claims received from the identity provider and associated with this connection.
   * @type {{ [key: string]: any; }}
   * @memberof UserExternalProvider
   */
  claims: Record<string, any>;
}
