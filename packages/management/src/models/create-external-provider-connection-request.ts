import { OidcPkceMode } from './oidc-pkce-mode';

/**
 * Create External Provider Connection Request: The protocol connection settings used to communicate with the external identity provider.
 * @export
 * @interface CreateExternalProviderConnectionRequest
 */
export interface CreateExternalProviderConnectionRequest {
  /**
   * The discovery (metadata) endpoint of the external provider. The provider endpoints are derived from the discovery document.
   * @type {string}
   * @memberof CreateExternalProviderConnectionRequest
   */
  discovery_url: string;
  /**
   * The PKCE mode used with the external provider.
   * @type {OidcPkceMode}
   * @memberof CreateExternalProviderConnectionRequest
   */
  pkce_mode?: OidcPkceMode;
}
