/**
 * Log Client Response: Representing the client application associated with the log event.
 * @export
 * @interface LogClient
 */
export interface LogClient {
  /**
   * The unique identifier of the client application associated with the event.
   * @type {string}
   * @memberof LogClient
   */
  id?: string | null;
  /**
   * The display name of the client application.
   * @type {string}
   * @memberof LogClient
   */
  name?: string | null;
}
