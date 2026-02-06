/**
 * The access token type.
 * @export
 * @enum {string}
 */

export const AccessTokenTypes = {
  /**
   * A self-contained JWT access token.
   */
  Jwt: 'jwt',

  /**
   * An opaque reference token stored and validated server-side.
   */
  Reference: 'reference',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AccessTokenTypes =
  (typeof AccessTokenTypes)[keyof typeof AccessTokenTypes];
