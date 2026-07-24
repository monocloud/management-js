import { ExternalAuthenticators } from './external-authenticators';

/**
 * External Provider Summary: Represents a linked identity provider account for the user.
 * @export
 * @interface UserExternalProviderSummary
 */
export interface UserExternalProviderSummary {
  /**
   * The provider associated with this connection.
   * @type {string}
   * @memberof UserExternalProviderSummary
   */
  provider: string;
  /**
   * The authenticator used by the provider.
   * @type {ExternalAuthenticators}
   * @memberof UserExternalProviderSummary
   */
  authenticator: ExternalAuthenticators;
  /**
   * The user identifier assigned by the identity provider.
   * @type {string}
   * @memberof UserExternalProviderSummary
   */
  provider_user_id: string;
}
