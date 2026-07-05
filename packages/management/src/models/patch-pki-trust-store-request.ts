import { PatchPkiTrustStoreOptionsRequest } from './patch-pki-trust-store-options-request';

/**
 * Patch PKI Trust Store Request: Used to update one or more properties of an existing PKI trust store.
 * @export
 * @interface PatchPkiTrustStoreRequest
 */
export interface PatchPkiTrustStoreRequest {
  /**
   * Human-readable name for the trust store.
   * @type {string}
   * @memberof PatchPkiTrustStoreRequest
   */
  name?: string;
  /**
   * Indicates whether the trust store is enabled.
   * @type {boolean}
   * @memberof PatchPkiTrustStoreRequest
   */
  enabled?: boolean;
  /**
   * Specifies whether this trust store’s mTLS endpoint aliases are published under `mtls_additional_endpoint_aliases` in the OpenID Connect discovery document.
   * @type {boolean}
   * @memberof PatchPkiTrustStoreRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * PEM-encoded certificate chain (concatenated), used as the trust anchor and intermediates for mTLS validation.
   * @type {string}
   * @memberof PatchPkiTrustStoreRequest
   */
  cert_chain?: string;
  /**
   * Trust store validation settings (certificate type, revocation, caching, and related policies).
   * @type {PatchPkiTrustStoreOptionsRequest}
   * @memberof PatchPkiTrustStoreRequest
   */
  options?: PatchPkiTrustStoreOptionsRequest;
}
