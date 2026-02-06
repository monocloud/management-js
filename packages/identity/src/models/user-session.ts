import { UserSessionMetadata } from './user-session-metadata';

/**
 * User Session: Represents an authentication session for a user.
 * @export
 * @interface UserSession
 */
export interface UserSession {
  /**
   * The unique identifier of the user session.
   * @type {string}
   * @memberof UserSession
   */
  session_id: string;
  /**
   * The list of client identifiers associated with this session.
   * @type {string[]}
   * @memberof UserSession
   */
  client_ids: string[];
  /**
   * Specifies the time at which the session was initiated (in Epoch).
   * @type {number}
   * @memberof UserSession
   */
  initiated_at: number;
  /**
   * Specifies the time at which the session is scheduled to expire (in Epoch).
   * @type {number}
   * @memberof UserSession
   */
  expires_at: number;
  /**
   * Specifies the time at which the session was last updated (in Epoch).
   * @type {number}
   * @memberof UserSession
   */
  last_updated: number;
  /**
   * The most recent metadata recorded for this session.
   * @type {UserSessionMetadata}
   * @memberof UserSession
   */
  last_metadata: UserSessionMetadata;
}
