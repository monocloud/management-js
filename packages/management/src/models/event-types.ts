/**
 * The log event type.
 * @export
 * @enum {string}
 */

export const EventTypes = {
  /**
   * Indicates that the operation completed successfully.
   */
  Success: 'success',

  /**
   * Indicates that the operation failed to complete as expected.
   */
  Failure: 'failure',

  /**
   * Indicates an informational event that does not represent an error or failure.
   */
  Information: 'information',

  /**
   * Indicates an error condition encountered during processing.
   */
  Error: 'error',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type EventTypes = (typeof EventTypes)[keyof typeof EventTypes];
