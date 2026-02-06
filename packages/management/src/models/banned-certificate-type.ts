/**
 * The banned certificate identifier type.
 * @export
 * @enum {string}
 */

export const BannedCertificateType = {
  /**
   * Ban by certificate thumbprint.
   */
  Thumbprint: 'thumbprint',

  /**
   * Ban by certificate serial number.
   */
  SerialNumber: 'serial_number',

  /**
   * Ban by certificate subject.
   */
  Subject: 'subject',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type BannedCertificateType =
  (typeof BannedCertificateType)[keyof typeof BannedCertificateType];
