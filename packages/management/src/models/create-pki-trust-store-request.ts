import { CreatePkiTrustStoreOptionsRequest } from './create-pki-trust-store-options-request';

/**
 * Create PKI Trust Store Request: Creates a trust store used to manage trusted certificate authorities for mTLS authentication.
 * @export
 * @interface CreatePkiTrustStoreRequest
 */
export interface CreatePkiTrustStoreRequest {
  /**
   * Human-readable name for the trust store.
   * @type {string}
   * @memberof CreatePkiTrustStoreRequest
   */
  name: string;
  /**
   * Specifies whether this trust store’s mTLS endpoint aliases are published under `mtls_additional_endpoint_aliases` in the OpenID Connect discovery document.
   * @type {boolean}
   * @memberof CreatePkiTrustStoreRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * Trust store validation settings (certificate type, revocation, caching, and related policies).
   * @type {CreatePkiTrustStoreOptionsRequest}
   * @memberof CreatePkiTrustStoreRequest
   */
  options: CreatePkiTrustStoreOptionsRequest;
  /**
   * PEM-encoded certificate chain (concatenated), used as the trust anchor and intermediates for mTLS validation.
   * @type {string}
   * @memberof CreatePkiTrustStoreRequest
   */
  cert_chain: string;
}
