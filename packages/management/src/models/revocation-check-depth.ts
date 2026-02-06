/**
 * The revocation check depth.
 * @export
 * @enum {string}
 */

export const RevocationCheckDepth = {
  /**
   * Indicates that only the end-entity (leaf) certificate is checked for revocation.
   */
  EndCertificateOnly: 'end_certificate_only',

  /**
   * Indicates that all certificates in the chain except the root certificate are checked for revocation.
   */
  ExcludeRoot: 'exclude_root',

  /**
   * Indicates that all certificates in the chain, including the root certificate, are checked for revocation.
   */
  EntireChain: 'entire_chain',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RevocationCheckDepth =
  (typeof RevocationCheckDepth)[keyof typeof RevocationCheckDepth];
