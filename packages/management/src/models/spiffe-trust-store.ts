import { SpiffeTrustStoreOptions } from './spiffe-trust-store-options';

/**
 * SPIFFE Trust Store Response: Represents a federated SPIFFE trust domain used to validate workload identities.
 * @export
 * @interface SpiffeTrustStore
 */
export interface SpiffeTrustStore {
  /**
   * The unique identifier of the trust store.
   * @type {string}
   * @memberof SpiffeTrustStore
   */
  id: string;
  /**
   * Human-readable name for the trust store.
   * @type {string}
   * @memberof SpiffeTrustStore
   */
  name: string;
  /**
   * Indicates whether the trust store is enabled.
   * @type {boolean}
   * @memberof SpiffeTrustStore
   */
  enabled: boolean;
  /**
   * Indicates whether this trust store is configured as the default store for the mTLS endpoint.
   * @type {boolean}
   * @memberof SpiffeTrustStore
   */
  is_default: boolean;
  /**
   * Specifies whether this trust store’s mTLS endpoint aliases are published under `mtls_additional_endpoint_aliases` in the OpenID Connect discovery document.
   * @type {boolean}
   * @memberof SpiffeTrustStore
   */
  show_in_discovery_document: boolean;
  /**
   * Trust store validation settings (certificate type, revocation, caching, and related policies).
   * @type {SpiffeTrustStoreOptions}
   * @memberof SpiffeTrustStore
   */
  options: SpiffeTrustStoreOptions;
  /**
   * Specifies the creation time of the trust store (in Epoch).
   * @type {number}
   * @memberof SpiffeTrustStore
   */
  creation_time: number;
  /**
   * Specifies the last update time of the trust store (in Epoch).
   * @type {number}
   * @memberof SpiffeTrustStore
   */
  last_updated: number;
  /**
   * The SPIFFE bundle endpoint URL used to retrieve trust domain signing keys.
   * @type {string}
   * @memberof SpiffeTrustStore
   */
  spiffe_bundle_endpoint: string;
}
