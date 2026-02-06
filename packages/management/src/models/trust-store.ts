import { TrustStoreOptions } from './trust-store-options';

/**
 * Trust Store Response: Represents a trust store configuration used for mTLS authentication.
 * @export
 * @interface TrustStore
 */
export interface TrustStore {
  /**
   * The unique identifier of the trust store.
   * @type {string}
   * @memberof TrustStore
   */
  id: string;
  /**
   * Human-readable name for the trust store.
   * @type {string}
   * @memberof TrustStore
   */
  name: string;
  /**
   * Indicates whether the trust store is enabled.
   * @type {boolean}
   * @memberof TrustStore
   */
  enabled: boolean;
  /**
   * Indicates whether this trust store is configured as the default store for the mTLS endpoint.
   * @type {boolean}
   * @memberof TrustStore
   */
  is_default: boolean;
  /**
   * Specifies whether this trust store’s mTLS endpoint aliases are published under `mtls_additional_endpoint_aliases` in the OpenID Connect discovery document.
   * @type {boolean}
   * @memberof TrustStore
   */
  show_in_discovery_document: boolean;
  /**
   * PEM-encoded certificate chain (concatenated), used as the trust anchor and intermediates for mTLS validation.
   * @type {string}
   * @memberof TrustStore
   */
  cert_chain: string;
  /**
   * Trust store validation settings (certificate type, revocation, caching, and related policies).
   * @type {TrustStoreOptions}
   * @memberof TrustStore
   */
  options: TrustStoreOptions;
  /**
   * Specifies the creation time of the trust store (in Epoch).
   * @type {number}
   * @memberof TrustStore
   */
  creation_time: number;
  /**
   * Specifies the last update time of the trust store (in Epoch).
   * @type {number}
   * @memberof TrustStore
   */
  last_updated: number;
}
