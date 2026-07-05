/**
 * Base Certificate Revocation Response: Represents a base certificate revocation list (CRL) configured for offline revocation checking within a trust store.
 * @export
 * @interface BaseCertificateRevocation
 */
export interface BaseCertificateRevocation {
  /**
   * The unique identifier of the revocation entry.
   * @type {string}
   * @memberof BaseCertificateRevocation
   */
  id: string;
  /**
   * The certificate revocation list (CRL) in PEM format.
   * @type {string}
   * @memberof BaseCertificateRevocation
   */
  value: string;
  /**
   * The thumbprint of the CA certificate that issued this CRL.
   * @type {string}
   * @memberof BaseCertificateRevocation
   */
  issuer_thumbprint: string;
  /**
   * Specifies the time at which the CRL was issued (in Epoch).
   * @type {number}
   * @memberof BaseCertificateRevocation
   */
  issued_at: number;
  /**
   * Specifies the time at which the next CRL update is expected (in Epoch).
   * @type {number}
   * @memberof BaseCertificateRevocation
   */
  next_update?: number | null;
  /**
   * Specifies the time at which this revocation entry was created (in Epoch).
   * @type {number}
   * @memberof BaseCertificateRevocation
   */
  creation_time: number;
  /**
   * The CRL number, as defined in the X.509 CRL extensions, used to identify the version or sequence of the certificate revocation list.
   * @type {number}
   * @memberof BaseCertificateRevocation
   */
  crl_number?: number | null;
  /**
   * @type {string}
   * @memberof BaseCertificateRevocation
   */
  type: string;
}
