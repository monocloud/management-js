import { OidcPkceMode } from './oidc-pkce-mode';

/**
 * Patch External Provider Connection Request: Used to update connection settings used by an external authenticator.
 * @export
 * @interface PatchExternalProviderConnectionRequest
 */
export interface PatchExternalProviderConnectionRequest {
  /**
   * The discovery (metadata) endpoint of the external provider. The provider endpoints are derived from the discovery document.
   * @type {string}
   * @memberof PatchExternalProviderConnectionRequest
   */
  discovery_url?: string;
  /**
   * The PKCE mode used with the external provider.
   * @type {OidcPkceMode}
   * @memberof PatchExternalProviderConnectionRequest
   */
  pkce_mode?: OidcPkceMode;
}
