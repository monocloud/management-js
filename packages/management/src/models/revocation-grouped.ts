import { RevocationGroupedDelta } from './revocation-grouped-delta';

/**
 * Revocation Grouped Response: Represents a base certificate revocation list (CRL) along with its associated delta CRLs.
 * @export
 * @interface RevocationGrouped
 */
export interface RevocationGrouped {
  /**
   * The unique identifier of the revocation entry.
   * @type {string}
   * @memberof RevocationGrouped
   */
  id: string;
  /**
   * The certificate revocation list (CRL) in PEM format.
   * @type {string}
   * @memberof RevocationGrouped
   */
  value: string;
  /**
   * The thumbprint of the CA certificate that issued this CRL.
   * @type {string}
   * @memberof RevocationGrouped
   */
  issuer_thumbprint: string;
  /**
   * Specifies the time at which the CRL was issued (in Epoch).
   * @type {number}
   * @memberof RevocationGrouped
   */
  issued_at: number;
  /**
   * Specifies the time at which the next CRL update is expected (in Epoch).
   * @type {number}
   * @memberof RevocationGrouped
   */
  next_update?: number | null;
  /**
   * Specifies the time at which this revocation entry was created (in Epoch).
   * @type {number}
   * @memberof RevocationGrouped
   */
  creation_time: number;
  /**
   * The CRL number, as defined in the X.509 CRL extensions, used to identify the version or sequence of the certificate revocation list.
   * @type {number}
   * @memberof RevocationGrouped
   */
  crl_number?: number | null;
  /**
   * Delta CRLs that provide incremental revocation updates for this base CRL.
   * @type {RevocationGroupedDelta[]}
   * @memberof RevocationGrouped
   */
  deltas: RevocationGroupedDelta[];
}
