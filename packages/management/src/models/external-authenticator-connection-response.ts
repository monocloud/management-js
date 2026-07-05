import { OidcPkceMode } from './oidc-pkce-mode';

/**
 * External Authenticator Connection Response: The protocol connection settings used to communicate with the external identity provider.
 * @export
 * @interface ExternalAuthenticatorConnectionResponse
 */
export interface ExternalAuthenticatorConnectionResponse {
  /**
   * The discovery (metadata) endpoint of the external provider. When set, the provider endpoints are derived from the discovery document.
   * @type {string}
   * @memberof ExternalAuthenticatorConnectionResponse
   */
  discovery_url?: string | null;
  /**
   * The authorization endpoint of the external provider. Required when no discovery endpoint is set.
   * @type {string}
   * @memberof ExternalAuthenticatorConnectionResponse
   */
  authorize_url?: string | null;
  /**
   * The token endpoint of the external provider. Required when no discovery endpoint is set.
   * @type {string}
   * @memberof ExternalAuthenticatorConnectionResponse
   */
  token_url?: string | null;
  /**
   * The user info endpoint of the external provider.
   * @type {string}
   * @memberof ExternalAuthenticatorConnectionResponse
   */
  user_info_url?: string | null;
  /**
   * The PKCE mode used with the external provider.
   * @type {OidcPkceMode}
   * @memberof ExternalAuthenticatorConnectionResponse
   */
  pkce_mode: OidcPkceMode;
}
