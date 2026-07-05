/**
 * Create SPIFFE Trust Store Options Request: Defines validation and caching behavior applied when authenticating SVIDs.
 * @export
 * @interface CreateSpiffeTrustStoreOptionsRequest
 */
export interface CreateSpiffeTrustStoreOptionsRequest {
  /**
   * Indicates whether the client certificate is validated for client authentication, including Client Authentication EKU checks across the certificate chain.
   * @type {boolean}
   * @memberof CreateSpiffeTrustStoreOptionsRequest
   */
  validate_certificate_use?: boolean;
  /**
   * Indicates whether the certificate validity period (`NotBefore` / `NotAfter`) is enforced.
   * @type {boolean}
   * @memberof CreateSpiffeTrustStoreOptionsRequest
   */
  validate_validity_period?: boolean;
  /**
   * Specifies how long certificate authentication results are cached (in seconds).
   * @type {number}
   * @memberof CreateSpiffeTrustStoreOptionsRequest
   */
  certificate_auth_cache_duration?: number;
  /**
   * Specifies the timeout for downloading the SPIFFE bundle from the bundle endpoint (in seconds).
   * @type {number}
   * @memberof CreateSpiffeTrustStoreOptionsRequest
   */
  bundle_fetch_timeout?: number;
}
