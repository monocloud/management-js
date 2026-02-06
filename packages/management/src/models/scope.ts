import { ScopeClaim } from './scope-claim';

/**
 * Scope Response: Represents a permission that can be requested by clients and evaluated during authorization.
 * @export
 * @interface Scope
 */
export interface Scope {
  /**
   * The unique identifier of the resource.
   * @type {string}
   * @memberof Scope
   */
  id: string;
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof Scope
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof Scope
   */
  description?: string | null;
  /**
   * Indicates whether this resource is advertised via the discovery document.
   * @type {boolean}
   * @memberof Scope
   */
  show_in_discovery_document: boolean;
  /**
   * Specifies the creation time of the resource (in Epoch).
   * @type {number}
   * @memberof Scope
   */
  creation_time: number;
  /**
   * Specifies the last update time of the resource (in Epoch).
   * @type {number}
   * @memberof Scope
   */
  last_updated: number;
  /**
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof Scope
   */
  name: string;
  /**
   * Specifies whether the scope is mandatory and cannot be de-selected by the user on the consent screen.
   * @type {boolean}
   * @memberof Scope
   */
  required: boolean;
  /**
   * Indicates whether this scope is visually emphasized on the consent screen, typically for sensitive or high-impact permissions.
   * @type {boolean}
   * @memberof Scope
   */
  emphasize: boolean;
  /**
   * Indicates whether this is a built-in identity scope provided by the platform.
   * @type {boolean}
   * @memberof Scope
   */
  is_default: boolean;
  /**
   * List of user claim types that will be embedded into identity tokens and/or returned from the `UserInfo` endpoint when this scope is granted.
   * @type {ScopeClaim[]}
   * @memberof Scope
   */
  user_claims: ScopeClaim[];
}
