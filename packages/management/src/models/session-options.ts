import { ExpirationTypes } from './expiration-types';
import { SessionPersistenceModes } from './session-persistence-modes';

/**
 * Session Options Response: Represents the session persistence and expiration configuration.
 * @export
 * @interface SessionOptions
 */
export interface SessionOptions {
  /**
   * Determines whether the user session is persisted across browser restarts, expires on browser close, or is decided by the user.
   * @type {SessionPersistenceModes}
   * @memberof SessionOptions
   */
  persistence_mode: SessionPersistenceModes;
  /**
   * Determines whether the session expiration is extended on activity (sliding) or expires at a fixed time (absolute).
   * @type {ExpirationTypes}
   * @memberof SessionOptions
   */
  expiration_type: ExpirationTypes;
  /**
   * The session lifetime applied when using sliding expiration (in minutes). Each qualifying user interaction renews the session up to the absolute limit.
   * @type {number}
   * @memberof SessionOptions
   */
  sliding_session_lifetime: number;
  /**
   * The maximum session lifetime after which the session expires regardless of activity or expiration type (in minutes).
   * @type {number}
   * @memberof SessionOptions
   */
  absolute_session_lifetime: number;
}
