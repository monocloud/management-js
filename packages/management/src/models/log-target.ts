import { TargetTypes } from './target-types';

/**
 * Log Target Response: Represents the entity affected by the log event.
 * @export
 * @interface LogTarget
 */
export interface LogTarget {
  /**
   * The target type.
   * @type {TargetTypes}
   * @memberof LogTarget
   */
  type: TargetTypes;
  /**
   * The unique identifier of the target entity.
   * @type {string}
   * @memberof LogTarget
   */
  id?: string | null;
  /**
   * The display name of the target entity.
   * @type {string}
   * @memberof LogTarget
   */
  name?: string | null;
  /**
   * The primary identifier of the target entity (for example, email address).
   * @type {string}
   * @memberof LogTarget
   */
  identifier?: string | null;
}
