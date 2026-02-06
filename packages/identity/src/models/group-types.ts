/**
 * The group type.
 * @export
 * @enum {string}
 */

export const GroupTypes = {
  /**
   * System-defined group managed by MonoCloud
   */
  BuiltIn: 'built_in',

  /**
   * User-defined group created and managed by administrators
   */
  Custom: 'custom',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type GroupTypes = (typeof GroupTypes)[keyof typeof GroupTypes];
