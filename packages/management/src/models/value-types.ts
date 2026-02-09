/**
 * The value type.
 * @export
 * @enum {string}
 */

export const ValueTypes = {
  /**
   * A plain text value.
   */
  String: 'string',

  /**
   * An email address value.
   */
  Email: 'email',

  /**
   * A phone number value.
   */
  Phone: 'phone',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ValueTypes = (typeof ValueTypes)[keyof typeof ValueTypes];
