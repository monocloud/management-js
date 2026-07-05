/**
 * Patch SPIFFE Trust Store Options Request: Used to update one or more configuration properties of an existing SPIFFE trust store.
 * @export
 * @interface PatchSpiffeTrustStoreOptionsRequest
 */
export interface PatchSpiffeTrustStoreOptionsRequest {
  /**
   * Indicates whether the client certificate is validated for client authentication, including Client Authentication EKU checks across the certificate chain.
   * @type {boolean}
   * @memberof PatchSpiffeTrustStoreOptionsRequest
   */
  validate_certificate_use?: boolean;
  /**
   * Indicates whether the certificate validity period (`NotBefore` / `NotAfter`) is enforced.
   * @type {boolean}
   * @memberof PatchSpiffeTrustStoreOptionsRequest
   */
  validate_validity_period?: boolean;
  /**
   * Specifies how long certificate authentication results are cached (in seconds).
   * @type {number}
   * @memberof PatchSpiffeTrustStoreOptionsRequest
   */
  certificate_auth_cache_duration?: number;
  /**
   * Specifies the timeout for downloading the SPIFFE bundle from the bundle endpoint (in seconds).
   * @type {number}
   * @memberof PatchSpiffeTrustStoreOptionsRequest
   */
  bundle_fetch_timeout?: number;
}
