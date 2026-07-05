/**
 * The PKCE mode used with an external OIDC provider.
 * @export
 * @enum {string}
 */

export const OidcPkceMode = {
  /**
   * PKCE is negotiated automatically based on the provider's discovery metadata.
   */
  Auto: 'auto',

  /**
   * PKCE using the S256 code challenge method.
   */
  S256: 's256',

  /**
   * PKCE using the plain code challenge method.
   */
  Plain: 'plain',

  /**
   * PKCE is disabled.
   */
  None: 'none',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type OidcPkceMode = (typeof OidcPkceMode)[keyof typeof OidcPkceMode];
