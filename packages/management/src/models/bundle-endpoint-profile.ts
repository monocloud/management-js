/**
 * The authentication profile used to connect to a SPIFFE bundle endpoint.
 * @export
 * @enum {string}
 */

export const BundleEndpointProfile = {
  /**
   * The bundle endpoint is served over TLS using a Web PKI (publicly trusted) certificate, validated against the system trust store and the endpoint host name.
   */
  HttpsWeb: 'https_web',

  /**
   * The bundle endpoint is served over TLS using a SPIFFE X.509-SVID, validated against the configured endpoint SPIFFE ID and the trust domain's bundle (bootstrapped from an operator-supplied bundle).
   */
  HttpsSpiffe: 'https_spiffe',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type BundleEndpointProfile =
  (typeof BundleEndpointProfile)[keyof typeof BundleEndpointProfile];
