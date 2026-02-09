/**
 * Revocation Grouped Delta Response: Represents a delta certificate revocation list (delta CRL) associated with a base CRL.
 * @export
 * @interface RevocationGroupedDelta
 */
export interface RevocationGroupedDelta {
  /**
   * The unique identifier of the delta revocation entry.
   * @type {string}
   * @memberof RevocationGroupedDelta
   */
  id: string;
  /**
   * The certificate revocation list (CRL) in PEM format.
   * @type {string}
   * @memberof RevocationGroupedDelta
   */
  value: string;
  /**
   * The thumbprint of the CA certificate that issued this CRL.
   * @type {string}
   * @memberof RevocationGroupedDelta
   */
  issuer_thumbprint: string;
  /**
   * Specifies the time at which the CRL was issued (in Epoch).
   * @type {number}
   * @memberof RevocationGroupedDelta
   */
  issued_at: number;
  /**
   * Specifies the time at which the next CRL update is expected (in Epoch).
   * @type {number}
   * @memberof RevocationGroupedDelta
   */
  next_update?: number | null;
  /**
   * Specifies the time at which this revocation entry was created (in Epoch).
   * @type {number}
   * @memberof RevocationGroupedDelta
   */
  creation_time: number;
  /**
   * The base CRL number, as defined in the X.509 CRL extensions, identifying the full CRL on which this delta CRL is based.
   * @type {number}
   * @memberof RevocationGroupedDelta
   */
  crl_number: number;
  /**
   * The delta CRL number, as defined in the X.509 CRL extensions, identifying the sequence number of this delta update.
   * @type {number}
   * @memberof RevocationGroupedDelta
   */
  delta_crl_number: number;
  /**
   * The unique identifier of the base (full) revocation entry to which this delta CRL applies.
   * @type {string}
   * @memberof RevocationGroupedDelta
   */
  base_revocation_id: string;
}
