import { BannedCertificateType } from './banned-certificate-type';

/**
 * Banned Certificate Response: Represents a certificate that has been explicitly banned within a trust store.
 * @export
 * @interface BannedCertificate
 */
export interface BannedCertificate {
  /**
   * The unique identifier of the banned certificate entry.
   * @type {string}
   * @memberof BannedCertificate
   */
  id: string;
  /**
   * Specifies the identifier type used to ban the certificate.
   * @type {BannedCertificateType}
   * @memberof BannedCertificate
   */
  type: BannedCertificateType;
  /**
   * The certificate identifier value used for banning.
   * @type {string}
   * @memberof BannedCertificate
   */
  value: string;
  /**
   * The reason explaining why the certificate was banned.
   * @type {string}
   * @memberof BannedCertificate
   */
  reason?: string | null;
  /**
   * Specifies the time at which the certificate was banned (in Epoch).
   * @type {number}
   * @memberof BannedCertificate
   */
  creation_time: number;
}
