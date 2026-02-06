/**
 * Add Certificate Revocation Request: Represents a certificate revocation list (CRL) to be added to a trust store.
 * @export
 * @interface AddCertificateRevocationRequest
 */
export interface AddCertificateRevocationRequest {
  /**
   * The certificate revocation list (CRL) in PEM format.
   * @type {string}
   * @memberof AddCertificateRevocationRequest
   */
  value: string;
}
