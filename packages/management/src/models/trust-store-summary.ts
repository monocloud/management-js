/**
 * Trust Store Summary Response: A lightweight representation of a trust store used for mTLS authentication, returned in list operations.
 * @export
 * @interface TrustStoreSummary
 */
export interface TrustStoreSummary {
  /**
   * The unique identifier of the trust store.
   * @type {string}
   * @memberof TrustStoreSummary
   */
  id: string;
  /**
   * Human-readable name for the trust store.
   * @type {string}
   * @memberof TrustStoreSummary
   */
  name: string;
  /**
   * Indicates whether the trust store is enabled.
   * @type {boolean}
   * @memberof TrustStoreSummary
   */
  enabled: boolean;
  /**
   * Indicates whether this trust store is configured as the default store for the mTLS endpoint.
   * @type {boolean}
   * @memberof TrustStoreSummary
   */
  is_default: boolean;
  /**
   * The total number of certificates contained in the trust store.
   * @type {number}
   * @memberof TrustStoreSummary
   */
  certificate_count: number;
  /**
   * The total number of certificates explicitly marked as banned in the trust store.
   * @type {number}
   * @memberof TrustStoreSummary
   */
  banned_certificates_count: number;
  /**
   * Specifies the creation time of the trust store (in Epoch).
   * @type {number}
   * @memberof TrustStoreSummary
   */
  creation_time: number;
  /**
   * Specifies the last update time of the trust store (in Epoch).
   * @type {number}
   * @memberof TrustStoreSummary
   */
  last_updated: number;
}
