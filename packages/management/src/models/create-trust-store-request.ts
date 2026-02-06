import { CreateTrustStoreOptionsRequest } from './create-trust-store-options-request';

/**
 * Create Trust Store Request: Creates a trust store used to manage trusted certificate authorities for mTLS authentication.
 * @export
 * @interface CreateTrustStoreRequest
 */
export interface CreateTrustStoreRequest {
  /**
   * Human-readable name for the trust store.
   * @type {string}
   * @memberof CreateTrustStoreRequest
   */
  name: string;
  /**
   * Specifies whether this trust store’s mTLS endpoint aliases are published under `mtls_additional_endpoint_aliases` in the OpenID Connect discovery document.
   * @type {boolean}
   * @memberof CreateTrustStoreRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * PEM-encoded certificate chain (concatenated), used as the trust anchor and intermediates for mTLS validation.
   * @type {string}
   * @memberof CreateTrustStoreRequest
   */
  cert_chain: string;
  /**
   * Trust store validation settings (certificate type, revocation, caching, and related policies).
   * @type {CreateTrustStoreOptionsRequest}
   * @memberof CreateTrustStoreRequest
   */
  options: CreateTrustStoreOptionsRequest;
}
