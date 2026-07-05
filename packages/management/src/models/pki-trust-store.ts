import { PkiTrustStoreOptions } from './pki-trust-store-options';

/**
 * PKI Trust Store Response: Represents a trust store configuration used for mTLS authentication.
 * @export
 * @interface PkiTrustStore
 */
export interface PkiTrustStore {
  /**
   * The unique identifier of the trust store.
   * @type {string}
   * @memberof PkiTrustStore
   */
  id: string;
  /**
   * Human-readable name for the trust store.
   * @type {string}
   * @memberof PkiTrustStore
   */
  name: string;
  /**
   * Indicates whether the trust store is enabled.
   * @type {boolean}
   * @memberof PkiTrustStore
   */
  enabled: boolean;
  /**
   * Indicates whether this trust store is configured as the default store for the mTLS endpoint.
   * @type {boolean}
   * @memberof PkiTrustStore
   */
  is_default: boolean;
  /**
   * Specifies whether this trust store’s mTLS endpoint aliases are published under `mtls_additional_endpoint_aliases` in the OpenID Connect discovery document.
   * @type {boolean}
   * @memberof PkiTrustStore
   */
  show_in_discovery_document: boolean;
  /**
   * Trust store validation settings (certificate type, revocation, caching, and related policies).
   * @type {PkiTrustStoreOptions}
   * @memberof PkiTrustStore
   */
  options: PkiTrustStoreOptions;
  /**
   * Specifies the creation time of the trust store (in Epoch).
   * @type {number}
   * @memberof PkiTrustStore
   */
  creation_time: number;
  /**
   * Specifies the last update time of the trust store (in Epoch).
   * @type {number}
   * @memberof PkiTrustStore
   */
  last_updated: number;
  /**
   * PEM-encoded certificate chain (concatenated), used as the trust anchor and intermediates for mTLS validation.
   * @type {string}
   * @memberof PkiTrustStore
   */
  cert_chain: string;
}
