import { RevocationCheckDepth } from './revocation-check-depth';
import { X509RevocationMode } from './x509-revocation-mode';

/**
 * Trust Store Options Response: Represents the configuration applied for mTLS certificate validation.
 * @export
 * @interface TrustStoreOptions
 */
export interface TrustStoreOptions {
  /**
   * Indicates whether the client certificate is validated for client authentication, including Client Authentication EKU checks across the certificate chain.
   * @type {boolean}
   * @memberof TrustStoreOptions
   */
  validate_certificate_use: boolean;
  /**
   * Indicates whether the certificate validity period (`NotBefore` / `NotAfter`) is enforced.
   * @type {boolean}
   * @memberof TrustStoreOptions
   */
  validate_validity_period: boolean;
  /**
   * Specifies how certificate revocation status is evaluated.
   * @type {X509RevocationMode}
   * @memberof TrustStoreOptions
   */
  revocation_mode: X509RevocationMode;
  /**
   * Specifies how revocation checks are applied across the certificate chain.
   * @type {RevocationCheckDepth}
   * @memberof TrustStoreOptions
   */
  revocation_check_depth: RevocationCheckDepth;
  /**
   * Specifies the allowed clock skew used when validating CRL issuance times and OCSP responses (in seconds).
   * @type {number}
   * @memberof TrustStoreOptions
   */
  revocation_check_clock_skew: number;
  /**
   * Specifies the timeout for OCSP responder calls when online revocation checking is enabled (in seconds).
   * @type {number}
   * @memberof TrustStoreOptions
   */
  ocsp_check_timeout: number;
  /**
   * Specifies the timeout for downloading CRLs from certificate distribution points (CDPs) when online revocation checking is enabled (in seconds).
   * @type {number}
   * @memberof TrustStoreOptions
   */
  online_crl_check_timeout: number;
  /**
   * Specifies how long certificate authentication results are cached (in seconds).
   * @type {number}
   * @memberof TrustStoreOptions
   */
  certificate_auth_cache_duration: number;
  /**
   * Specifies how long OCSP responses are cached when online OCSP checking is enabled (in seconds).
   * @type {number}
   * @memberof TrustStoreOptions
   */
  ocsp_cache_duration: number;
  /**
   * Specifies how long downloaded CRLs are cached when online CRL checking is enabled (in seconds).
   * @type {number}
   * @memberof TrustStoreOptions
   */
  online_crl_cache_duration: number;
}
