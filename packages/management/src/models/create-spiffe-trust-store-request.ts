import { CreateSpiffeTrustStoreOptionsRequest } from './create-spiffe-trust-store-options-request';

/**
 * Create SPIFFE Trust Store Request: Creates a trust store for a federated SPIFFE trust domain and its workload identities.
 * @export
 * @interface CreateSpiffeTrustStoreRequest
 */
export interface CreateSpiffeTrustStoreRequest {
  /**
   * Specifies whether this trust store’s mTLS endpoint aliases are published under `mtls_additional_endpoint_aliases` in the OpenID Connect discovery document.
   * @type {boolean}
   * @memberof CreateSpiffeTrustStoreRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * Trust store validation settings (certificate type, revocation, caching, and related policies).
   * @type {CreateSpiffeTrustStoreOptionsRequest}
   * @memberof CreateSpiffeTrustStoreRequest
   */
  options: CreateSpiffeTrustStoreOptionsRequest;
  /**
   * The SPIFFE bundle endpoint URL used to retrieve trust domain signing keys.
   * @type {string}
   * @memberof CreateSpiffeTrustStoreRequest
   */
  spiffe_bundle_endpoint: string;
}
