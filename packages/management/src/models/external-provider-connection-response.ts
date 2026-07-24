import { OidcPkceMode } from './oidc-pkce-mode';

/**
 * External Provider Connection Response: The protocol connection settings used to communicate with the external identity provider.
 * @export
 * @interface ExternalProviderConnectionResponse
 */
export interface ExternalProviderConnectionResponse {
  /**
   * The discovery (metadata) endpoint of the external provider. The provider endpoints are derived from the discovery document.
   * @type {string}
   * @memberof ExternalProviderConnectionResponse
   */
  discovery_url: string;
  /**
   * The PKCE mode used with the external provider.
   * @type {OidcPkceMode}
   * @memberof ExternalProviderConnectionResponse
   */
  pkce_mode: OidcPkceMode;
}
