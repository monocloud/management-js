import { ExpirationTypes } from './expiration-types';
import { SessionPersistenceModes } from './session-persistence-modes';

/**
 * Patch Session Options Request: Used to update the user session configuration.
 * @export
 * @interface PatchSessionOptionsRequest
 */
export interface PatchSessionOptionsRequest {
  /**
   * Determines whether the user session is persisted across browser restarts, expires on browser close, or is decided by the user.
   * @type {SessionPersistenceModes}
   * @memberof PatchSessionOptionsRequest
   */
  persistence_mode?: SessionPersistenceModes;
  /**
   * Determines whether the session expiration is extended on activity (sliding) or expires at a fixed time (absolute).
   * @type {ExpirationTypes}
   * @memberof PatchSessionOptionsRequest
   */
  expiration_type?: ExpirationTypes;
  /**
   * The session lifetime applied when using sliding expiration (in minutes). Each qualifying user interaction renews the session up to the absolute limit.
   * @type {number}
   * @memberof PatchSessionOptionsRequest
   */
  sliding_session_lifetime?: number;
  /**
   * The maximum session lifetime after which the session expires regardless of activity or expiration type (in minutes).
   * @type {number}
   * @memberof PatchSessionOptionsRequest
   */
  absolute_session_lifetime?: number;
}
