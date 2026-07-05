import { PatchSpiffeTrustStoreOptionsRequest } from './patch-spiffe-trust-store-options-request';

/**
 * Patch SPIFFE Trust Store Request: Used to update one or more properties of an existing SPIFFE trust store.
 * @export
 * @interface PatchSpiffeTrustStoreRequest
 */
export interface PatchSpiffeTrustStoreRequest {
  /**
   * Indicates whether the trust store is enabled.
   * @type {boolean}
   * @memberof PatchSpiffeTrustStoreRequest
   */
  enabled?: boolean;
  /**
   * Specifies whether this trust store’s mTLS endpoint aliases are published under `mtls_additional_endpoint_aliases` in the OpenID Connect discovery document.
   * @type {boolean}
   * @memberof PatchSpiffeTrustStoreRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The SPIFFE bundle endpoint URL used to retrieve trust domain signing keys.
   * @type {string}
   * @memberof PatchSpiffeTrustStoreRequest
   */
  spiffe_bundle_endpoint?: string;
  /**
   * Trust store validation settings (certificate type, caching, and related policies).
   * @type {PatchSpiffeTrustStoreOptionsRequest}
   * @memberof PatchSpiffeTrustStoreRequest
   */
  options?: PatchSpiffeTrustStoreOptionsRequest;
}
