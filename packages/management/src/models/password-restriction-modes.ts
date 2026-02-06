/**
 * The password restriction mode.
 * @export
 * @enum {string}
 */

export const PasswordRestrictionModes = {
  /**
   * No password reuse restrictions are enforced.
   */
  Off: 'off',

  /**
   * Prevents reuse of passwords used within a specified time window.
   */
  Date: 'date',

  /**
   * Prevents reuse of the most recently used passwords, based on a configured count.
   */
  Count: 'count',

  /**
   * Prevents reuse of passwords based on both a time window and a usage count.
   */
  DateAndCount: 'date_and_count',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type PasswordRestrictionModes =
  (typeof PasswordRestrictionModes)[keyof typeof PasswordRestrictionModes];
