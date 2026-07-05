/**
 * Delta Certificate Revocation Response: Represents a delta certificate revocation list (CRL) configured for offline revocation checking within a trust store.
 * @export
 * @interface DeltaCertificateRevocation
 */
export interface DeltaCertificateRevocation {
  /**
   * The unique identifier of the delta revocation entry.
   * @type {string}
   * @memberof DeltaCertificateRevocation
   */
  id: string;
  /**
   * The certificate revocation list (CRL) in PEM format.
   * @type {string}
   * @memberof DeltaCertificateRevocation
   */
  value: string;
  /**
   * The thumbprint of the CA certificate that issued this CRL.
   * @type {string}
   * @memberof DeltaCertificateRevocation
   */
  issuer_thumbprint: string;
  /**
   * Specifies the time at which the CRL was issued (in Epoch).
   * @type {number}
   * @memberof DeltaCertificateRevocation
   */
  issued_at: number;
  /**
   * Specifies the time at which the next CRL update is expected (in Epoch).
   * @type {number}
   * @memberof DeltaCertificateRevocation
   */
  next_update?: number | null;
  /**
   * Specifies the time at which this revocation entry was created (in Epoch).
   * @type {number}
   * @memberof DeltaCertificateRevocation
   */
  creation_time: number;
  /**
   * The base CRL number, as defined in the X.509 CRL extensions, identifying the full CRL on which this delta CRL is based.
   * @type {number}
   * @memberof DeltaCertificateRevocation
   */
  crl_number: number;
  /**
   * The delta CRL number, as defined in the X.509 CRL extensions, identifying the sequence number of this delta update.
   * @type {number}
   * @memberof DeltaCertificateRevocation
   */
  delta_crl_number: number;
  /**
   * The unique identifier of the base (full) revocation entry to which this delta CRL applies.
   * @type {string}
   * @memberof DeltaCertificateRevocation
   */
  base_revocation_id: string;
  /**
   * @type {string}
   * @memberof DeltaCertificateRevocation
   */
  type: string;
}
