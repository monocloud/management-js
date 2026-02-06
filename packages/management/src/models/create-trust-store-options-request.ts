import { RevocationCheckDepth } from './revocation-check-depth';
import { X509RevocationMode } from './x509-revocation-mode';

/**
 * Create Trust Store Options Request: Defines certificate validation, revocation checking, and caching behavior applied when authenticating client certificates via mTLS.
 * @export
 * @interface CreateTrustStoreOptionsRequest
 */
export interface CreateTrustStoreOptionsRequest {
  /**
   * Indicates whether the client certificate is validated for client authentication, including Client Authentication EKU checks across the certificate chain.
   * @type {boolean}
   * @memberof CreateTrustStoreOptionsRequest
   */
  validate_certificate_use?: boolean;
  /**
   * Indicates whether the certificate validity period (`NotBefore` / `NotAfter`) is enforced.
   * @type {boolean}
   * @memberof CreateTrustStoreOptionsRequest
   */
  validate_validity_period?: boolean;
  /**
   * Specifies how certificate revocation status is evaluated.
   * @type {X509RevocationMode}
   * @memberof CreateTrustStoreOptionsRequest
   */
  revocation_mode?: X509RevocationMode;
  /**
   * Specifies how revocation checks are applied across the certificate chain.
   * @type {RevocationCheckDepth}
   * @memberof CreateTrustStoreOptionsRequest
   */
  revocation_check_depth?: RevocationCheckDepth;
  /**
   * Specifies the allowed clock skew used when validating CRL issuance times and OCSP responses (in seconds).
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  revocation_check_clock_skew?: number;
  /**
   * Specifies the timeout for OCSP responder calls when online revocation checking is enabled (in seconds).
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  ocsp_check_timeout?: number;
  /**
   * Specifies the timeout for downloading CRLs from certificate distribution points (CDPs) when online revocation checking is enabled (in seconds).
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  online_crl_check_timeout?: number;
  /**
   * Specifies how long certificate authentication results are cached (in seconds).
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  certificate_auth_cache_duration?: number;
  /**
   * Specifies how long OCSP responses are cached when online OCSP checking is enabled (in seconds).
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  ocsp_cache_duration?: number;
  /**
   * Specifies how long downloaded CRLs are cached when online CRL checking is enabled (in seconds).
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  online_crl_cache_duration?: number;
}
