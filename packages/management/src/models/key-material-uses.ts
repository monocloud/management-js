/**
 * The key material usage.
 * @export
 * @enum {string}
 */

export const KeyMaterialUses = {
  /**
   * Indicates that the key may be used to cryptographically sign tokens, and may also be used to validate token signatures.
   */
  Signing: 'signing',

  /**
   * Indicates that the key may only be used to validate or verify the signatures of existing tokens.
   */
  Validation: 'validation',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type KeyMaterialUses =
  (typeof KeyMaterialUses)[keyof typeof KeyMaterialUses];
