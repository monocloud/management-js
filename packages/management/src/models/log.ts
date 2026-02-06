import { EventCodes } from './event-codes';
import { EventTypes } from './event-types';
import { LogActor } from './log-actor';
import { LogCategories } from './log-categories';
import { LogClient } from './log-client';
import { LogRequest } from './log-request';
import { LogSystem } from './log-system';
import { LogTarget } from './log-target';

/**
 * Log Response: Represents an audit log entry capturing a system or security event.
 * @export
 * @interface Log
 */
export interface Log {
  /**
   * The unique identifier of the log entry.
   * @type {string}
   * @memberof Log
   */
  id: string;
  /**
   * Specifies the event time (in Epoch).
   * @type {number}
   * @memberof Log
   */
  time_stamp: number;
  /**
   * The event category.
   * @type {LogCategories}
   * @memberof Log
   */
  category: LogCategories;
  /**
   * The event name.
   * @type {string}
   * @memberof Log
   */
  name: string;
  /**
   * A human-readable description of the event.
   * @type {string}
   * @memberof Log
   */
  description: string;
  /**
   * The event severity/type.
   * @type {EventTypes}
   * @memberof Log
   */
  type: EventTypes;
  /**
   * The event code.
   * @type {EventCodes}
   * @memberof Log
   */
  code: EventCodes;
  /**
   * The message associated with the event.
   * @type {string}
   * @memberof Log
   */
  message?: string | null;
  /**
   * System/environment details for the event.
   * @type {LogSystem}
   * @memberof Log
   */
  system: LogSystem;
  /**
   * Request details for the event.
   * @type {LogRequest}
   * @memberof Log
   */
  request: LogRequest;
  /**
   * The source endpoint or path that generated the event.
   * @type {string}
   * @memberof Log
   */
  source?: string | null;
  /**
   * The actor that performed the action.
   * @type {LogActor}
   * @memberof Log
   */
  actor: LogActor;
  /**
   * The targets affected by the action.
   * @type {LogTarget[]}
   * @memberof Log
   */
  targets: LogTarget[];
  /**
   * The client application details.
   * @type {LogClient}
   * @memberof Log
   */
  client?: LogClient | null;
  /**
   * Log Details Response: Represents additional event-specific details associated with the log entry.
   * @type {object}
   * @memberof Log
   */
  details?: object;
}
