import { BaseCertificateRevocation } from './base-certificate-revocation';
import { DeltaCertificateRevocation } from './delta-certificate-revocation';

/**
 * @type ICertificateRevocation
 * Certificate Revocation Response: Represents a certificate revocation list (CRL) configured for offline revocation checking within a trust store.
 */
export type ICertificateRevocation =
  | ({ type: 'base' } & BaseCertificateRevocation)
  | ({ type: 'delta' } & DeltaCertificateRevocation);
