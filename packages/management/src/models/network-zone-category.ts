/**
 *
 * @export
 * @enum {string}
 */

export const NetworkZoneCategory = {
  /**
   * Trusted Network Zone
   */
  Trusted: 'trusted',

  /**
   * Blocked Network Zone
   */
  Blocked: 'blocked',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type NetworkZoneCategory =
  (typeof NetworkZoneCategory)[keyof typeof NetworkZoneCategory];
