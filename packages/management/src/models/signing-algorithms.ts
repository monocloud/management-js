/**
 * The signing algorithm.
 * @export
 * @enum {string}
 */

export const SigningAlgorithms = {
  /**
   * RSASSA-PKCS1-v1_5 using SHA-256.
   */
  Rs256: 'rs256',

  /**
   * RSASSA-PKCS1-v1_5 using SHA-384.
   */
  Rs384: 'rs384',

  /**
   * RSASSA-PKCS1-v1_5 using SHA-512.
   */
  Rs512: 'rs512',

  /**
   * RSASSA-PSS using SHA-256.
   */
  Ps256: 'ps256',

  /**
   * RSASSA-PSS using SHA-384.
   */
  Ps384: 'ps384',

  /**
   * RSASSA-PSS using SHA-512.
   */
  Ps512: 'ps512',

  /**
   * ECDSA using P-256 and SHA-256.
   */
  Es256: 'es256',

  /**
   * ECDSA using P-384 and SHA-384.
   */
  Es384: 'es384',

  /**
   * ECDSA using P-521 and SHA-512.
   */
  Es512: 'es512',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SigningAlgorithms =
  (typeof SigningAlgorithms)[keyof typeof SigningAlgorithms];
