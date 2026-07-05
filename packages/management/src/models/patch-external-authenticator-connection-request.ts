import { OidcPkceMode } from './oidc-pkce-mode';

/**
 * Patch External Authenticator Connection Request: Used to update connection settings used by an external authenticator.
 * @export
 * @interface PatchExternalAuthenticatorConnectionRequest
 */
export interface PatchExternalAuthenticatorConnectionRequest {
  /**
   * The discovery (metadata) endpoint of the external provider. When set, the provider endpoints are derived from the discovery document.
   * @type {string}
   * @memberof PatchExternalAuthenticatorConnectionRequest
   */
  discovery_url?: string | null;
  /**
   * The authorization endpoint of the external provider. Required when no discovery endpoint is set.
   * @type {string}
   * @memberof PatchExternalAuthenticatorConnectionRequest
   */
  authorize_url?: string | null;
  /**
   * The token endpoint of the external provider. Required when no discovery endpoint is set.
   * @type {string}
   * @memberof PatchExternalAuthenticatorConnectionRequest
   */
  token_url?: string | null;
  /**
   * The user info endpoint of the external provider.
   * @type {string}
   * @memberof PatchExternalAuthenticatorConnectionRequest
   */
  user_info_url?: string | null;
  /**
   * The PKCE mode used with the external provider.
   * @type {OidcPkceMode}
   * @memberof PatchExternalAuthenticatorConnectionRequest
   */
  pkce_mode?: OidcPkceMode;
}
