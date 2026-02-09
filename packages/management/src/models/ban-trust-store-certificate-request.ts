import { BannedCertificateType } from './banned-certificate-type';

/**
 * Ban Trust Store Certificate Request: Defines a certificate identifier to be banned from mTLS authentication within a trust store.
 * @export
 * @interface BanTrustStoreCertificateRequest
 */
export interface BanTrustStoreCertificateRequest {
  /**
   * Specifies the identifier type used to ban the certificate.
   * @type {BannedCertificateType}
   * @memberof BanTrustStoreCertificateRequest
   */
  type?: BannedCertificateType;
  /**
   * The certificate identifier value used for banning.
   * @type {string}
   * @memberof BanTrustStoreCertificateRequest
   */
  value: string;
  /**
   * The reason explaining why the certificate was banned.
   * @type {string}
   * @memberof BanTrustStoreCertificateRequest
   */
  reason?: string | null;
}
