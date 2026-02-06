import { PatchTrustStoreOptionsRequest } from './patch-trust-store-options-request';

/**
 * Patch Trust Store Request: Used to update one or more properties of an existing trust store.
 * @export
 * @interface PatchTrustStoreRequest
 */
export interface PatchTrustStoreRequest {
  /**
   * Human-readable name for the trust store.
   * @type {string}
   * @memberof PatchTrustStoreRequest
   */
  name?: string;
  /**
   * Indicates whether the trust store is enabled.
   * @type {boolean}
   * @memberof PatchTrustStoreRequest
   */
  enabled?: boolean;
  /**
   * Specifies whether this trust store’s mTLS endpoint aliases are published under `mtls_additional_endpoint_aliases` in the OpenID Connect discovery document.
   * @type {boolean}
   * @memberof PatchTrustStoreRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * PEM-encoded certificate chain (concatenated), used as the trust anchor and intermediates for mTLS validation.
   * @type {string}
   * @memberof PatchTrustStoreRequest
   */
  cert_chain?: string;
  /**
   * Trust store validation settings (certificate type, revocation, caching, and related policies).
   * @type {PatchTrustStoreOptionsRequest}
   * @memberof PatchTrustStoreRequest
   */
  options?: PatchTrustStoreOptionsRequest;
}
