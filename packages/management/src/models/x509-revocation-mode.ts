/**
 * The X.509 revocation mode.
 * @export
 * @enum {string}
 */

export const X509RevocationMode = {
  /**
   * Indicates that no revocation checking is performed. Certificate revocation status is not evaluated.
   */
  NoCheck: 'no_check',

  /**
   * Indicates that revocation status is checked using online revocation mechanisms, such as Certificate Revocation Lists (CRLs) and/or OCSP responders, for the certificate chain according to the configured revocation settings.
   */
  Online: 'online',

  /**
   * Indicates that revocation status is checked using tenant-managed CRLs, without making external network calls.
   */
  Offline: 'offline',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type X509RevocationMode =
  (typeof X509RevocationMode)[keyof typeof X509RevocationMode];
