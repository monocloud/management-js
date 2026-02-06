import { ActorTypes } from './actor-types';

/**
 * Log Actor Response: Represents the entity that performed the action recorded in the log entry.
 * @export
 * @interface LogActor
 */
export interface LogActor {
  /**
   * The actor type.
   * @type {ActorTypes}
   * @memberof LogActor
   */
  type: ActorTypes;
  /**
   * The unique identifier of the actor entity.
   * @type {string}
   * @memberof LogActor
   */
  id?: string | null;
  /**
   * The display name of the actor.
   * @type {string}
   * @memberof LogActor
   */
  name?: string | null;
  /**
   * The primary identifier of the actor (for example, email address).
   * @type {string}
   * @memberof LogActor
   */
  identifier?: string | null;
  /**
   * The unique identifier of the session associated with the action.
   * @type {string}
   * @memberof LogActor
   */
  session_id?: string | null;
}
