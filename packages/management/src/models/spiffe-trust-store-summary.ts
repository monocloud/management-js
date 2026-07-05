/**
 * SPIFFE Trust Store Summary Response: A lightweight representation of a federated SPIFFE trust domain, returned in list operations.
 * @export
 * @interface SpiffeTrustStoreSummary
 */
export interface SpiffeTrustStoreSummary {
  /**
   * The unique identifier of the trust store.
   * @type {string}
   * @memberof SpiffeTrustStoreSummary
   */
  id: string;
  /**
   * The SPIFFE trust domain discovered from the bundle endpoint.
   * @type {string}
   * @memberof SpiffeTrustStoreSummary
   */
  name: string;
  /**
   * Indicates whether the trust store is enabled.
   * @type {boolean}
   * @memberof SpiffeTrustStoreSummary
   */
  enabled: boolean;
  /**
   * Indicates whether this trust store is configured as the default store for the mTLS endpoint.
   * @type {boolean}
   * @memberof SpiffeTrustStoreSummary
   */
  is_default: boolean;
  /**
   * The total number of SVIDs explicitly marked as banned in the trust store.
   * @type {number}
   * @memberof SpiffeTrustStoreSummary
   */
  banned_svids_count: number;
  /**
   * Specifies the creation time of the trust store (in Epoch).
   * @type {number}
   * @memberof SpiffeTrustStoreSummary
   */
  creation_time: number;
  /**
   * Specifies the last update time of the trust store (in Epoch).
   * @type {number}
   * @memberof SpiffeTrustStoreSummary
   */
  last_updated: number;
}
