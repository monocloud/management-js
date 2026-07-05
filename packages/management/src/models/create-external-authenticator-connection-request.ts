import { OidcPkceMode } from './oidc-pkce-mode';

/**
 * Create External Authenticator Connection Request: The protocol connection settings used to communicate with the external identity provider.
 * @export
 * @interface CreateExternalAuthenticatorConnectionRequest
 */
export interface CreateExternalAuthenticatorConnectionRequest {
  /**
   * The discovery (metadata) endpoint of the external provider. When set, the provider endpoints are derived from the discovery document.
   * @type {string}
   * @memberof CreateExternalAuthenticatorConnectionRequest
   */
  discovery_url?: string | null;
  /**
   * The authorization endpoint of the external provider. Required when no discovery endpoint is set.
   * @type {string}
   * @memberof CreateExternalAuthenticatorConnectionRequest
   */
  authorize_url?: string | null;
  /**
   * The token endpoint of the external provider. Required when no discovery endpoint is set.
   * @type {string}
   * @memberof CreateExternalAuthenticatorConnectionRequest
   */
  token_url?: string | null;
  /**
   * The user info endpoint of the external provider.
   * @type {string}
   * @memberof CreateExternalAuthenticatorConnectionRequest
   */
  user_info_url?: string | null;
  /**
   * The PKCE mode used with the external provider.
   * @type {OidcPkceMode}
   * @memberof CreateExternalAuthenticatorConnectionRequest
   */
  pkce_mode?: OidcPkceMode;
}
