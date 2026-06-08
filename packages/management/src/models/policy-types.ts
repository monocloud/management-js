/**
 * The policy rule authoring type.
 * @export
 * @enum {string}
 */

export const PolicyTypes = {
  /**
   * A rule authored from the structured condition primitives.
   */
  Basic: 'basic',

  /**
   * A rule authored as a raw Cedar expression.
   */
  Advanced: 'advanced',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type PolicyTypes = (typeof PolicyTypes)[keyof typeof PolicyTypes];
