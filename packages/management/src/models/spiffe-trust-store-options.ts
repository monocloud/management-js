/**
 * SPIFFE Trust Store Options Response: Represents the configuration applied for SVID validation.
 * @export
 * @interface SpiffeTrustStoreOptions
 */
export interface SpiffeTrustStoreOptions {
  /**
   * Indicates whether the client certificate is validated for client authentication, including Client Authentication EKU checks across the certificate chain.
   * @type {boolean}
   * @memberof SpiffeTrustStoreOptions
   */
  validate_certificate_use: boolean;
  /**
   * Indicates whether the certificate validity period (`NotBefore` / `NotAfter`) is enforced.
   * @type {boolean}
   * @memberof SpiffeTrustStoreOptions
   */
  validate_validity_period: boolean;
  /**
   * Specifies how long certificate authentication results are cached (in seconds).
   * @type {number}
   * @memberof SpiffeTrustStoreOptions
   */
  certificate_auth_cache_duration: number;
  /**
   * Specifies the timeout for downloading the SPIFFE bundle from the bundle endpoint (in seconds).
   * @type {number}
   * @memberof SpiffeTrustStoreOptions
   */
  bundle_fetch_timeout: number;
}
