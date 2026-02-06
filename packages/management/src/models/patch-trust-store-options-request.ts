import { RevocationCheckDepth } from './revocation-check-depth';
import { X509RevocationMode } from './x509-revocation-mode';

/**
 * Patch Trust Store Options Request: Used to update one or more configuration properties of an existing trust store.
 * @export
 * @interface PatchTrustStoreOptionsRequest
 */
export interface PatchTrustStoreOptionsRequest {
  /**
   * Indicates whether the client certificate is validated for client authentication, including Client Authentication EKU checks across the certificate chain.
   * @type {boolean}
   * @memberof PatchTrustStoreOptionsRequest
   */
  validate_certificate_use?: boolean;
  /**
   * Indicates whether the certificate validity period (`NotBefore` / `NotAfter`) is enforced.
   * @type {boolean}
   * @memberof PatchTrustStoreOptionsRequest
   */
  validate_validity_period?: boolean;
  /**
   * Specifies how certificate revocation status is evaluated.
   * @type {X509RevocationMode}
   * @memberof PatchTrustStoreOptionsRequest
   */
  revocation_mode?: X509RevocationMode;
  /**
   * Specifies how revocation checks are applied across the certificate chain.
   * @type {RevocationCheckDepth}
   * @memberof PatchTrustStoreOptionsRequest
   */
  revocation_check_depth?: RevocationCheckDepth;
  /**
   * Specifies the allowed clock skew used when validating CRL issuance times and OCSP responses (in seconds).
   * @type {number}
   * @memberof PatchTrustStoreOptionsRequest
   */
  revocation_check_clock_skew?: number;
  /**
   * Specifies the timeout for OCSP responder calls when online revocation checking is enabled (in seconds).
   * @type {number}
   * @memberof PatchTrustStoreOptionsRequest
   */
  ocsp_check_timeout?: number;
  /**
   * Specifies the timeout for downloading CRLs from certificate distribution points (CDPs) when online revocation checking is enabled (in seconds).
   * @type {number}
   * @memberof PatchTrustStoreOptionsRequest
   */
  online_crl_check_timeout?: number;
  /**
   * Specifies how long certificate authentication results are cached (in seconds).
   * @type {number}
   * @memberof PatchTrustStoreOptionsRequest
   */
  certificate_auth_cache_duration?: number;
  /**
   * Specifies how long OCSP responses are cached when online OCSP checking is enabled (in seconds).
   * @type {number}
   * @memberof PatchTrustStoreOptionsRequest
   */
  ocsp_cache_duration?: number;
  /**
   * Specifies how long downloaded CRLs are cached when online CRL checking is enabled (in seconds).
   * @type {number}
   * @memberof PatchTrustStoreOptionsRequest
   */
  online_crl_cache_duration?: number;
}
