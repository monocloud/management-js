/**
 *
 * @export
 * @enum {string}
 */

export const NetworkZoneOperator = {
  /**
   * In
   */
  In: 'in',

  /**
   * Not In
   */
  NotIn: 'not_in',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type NetworkZoneOperator =
  (typeof NetworkZoneOperator)[keyof typeof NetworkZoneOperator];
