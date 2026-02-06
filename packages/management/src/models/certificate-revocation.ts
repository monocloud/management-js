/**
 * Certificate Revocation Response: Represents a certificate revocation list (CRL) configured for offline revocation checking within a trust store.
 * @export
 * @interface CertificateRevocation
 */
export interface CertificateRevocation {
  /**
   * The unique identifier of the revocation entry.
   * @type {string}
   * @memberof CertificateRevocation
   */
  id: string;
  /**
   * The certificate revocation list (CRL) in PEM format.
   * @type {string}
   * @memberof CertificateRevocation
   */
  value: string;
  /**
   * The thumbprint of the CA certificate that issued this CRL.
   * @type {string}
   * @memberof CertificateRevocation
   */
  issuer_thumbprint: string;
  /**
   * Specifies the time at which the CRL was issued (in Epoch).
   * @type {number}
   * @memberof CertificateRevocation
   */
  issued_at: number;
  /**
   * Specifies the time at which the next CRL update is expected (in Epoch).
   * @type {number}
   * @memberof CertificateRevocation
   */
  next_update?: number | null;
  /**
   * Specifies the time at which this revocation entry was created (in Epoch).
   * @type {number}
   * @memberof CertificateRevocation
   */
  creation_time: number;
  /**
   * Indicates the type of revocation list (base or delta).
   * @type {string}
   * @memberof CertificateRevocation
   */
  type: string;
  /**
   * The CRL number as defined in the X.509 CRL extensions, identifying the sequence of this revocation list.
   * @type {number}
   * @memberof CertificateRevocation
   */
  crl_number?: number | null;
  /**
   * The delta CRL number, as defined in the X.509 CRL extensions, identifying the sequence number of this delta update.
   * @type {number}
   * @memberof CertificateRevocation
   */
  delta_crl_number?: number | null;
  /**
   * The unique identifier of the base (full) revocation entry to which this delta CRL applies.
   * @type {string}
   * @memberof CertificateRevocation
   */
  base_revocation_id?: string | null;
}
