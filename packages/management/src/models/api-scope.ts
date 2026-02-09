/**
 * API Scope Response: Represents a permissioned scope that defines the level of access a client may request and that can be embedded into access tokens.
 * @export
 * @interface ApiScope
 */
export interface ApiScope {
  /**
   * The unique identifier of the resource.
   * @type {string}
   * @memberof ApiScope
   */
  id: string;
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof ApiScope
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof ApiScope
   */
  description?: string | null;
  /**
   * Indicates whether this API scope is advertised via the discovery document.
   * @type {boolean}
   * @memberof ApiScope
   */
  show_in_discovery_document: boolean;
  /**
   * Specifies the creation time of the resource (in Epoch).
   * @type {number}
   * @memberof ApiScope
   */
  creation_time: number;
  /**
   * Specifies the last update time of the resource (in Epoch).
   * @type {number}
   * @memberof ApiScope
   */
  last_updated: number;
  /**
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof ApiScope
   */
  name: string;
  /**
   * Specifies whether the scope is mandatory and cannot be de-selected by the user on the consent screen.
   * @type {boolean}
   * @memberof ApiScope
   */
  required: boolean;
  /**
   * Indicates whether this scope is visually emphasized on the consent screen, typically for sensitive or high-impact permissions.
   * @type {boolean}
   * @memberof ApiScope
   */
  emphasize: boolean;
  /**
   * Specifies whether this scope is automatically included in issued tokens when the `scope` parameter is omitted.
   * @type {boolean}
   * @memberof ApiScope
   */
  is_default: boolean;
  /**
   * List of user claim types that will be embedded into access tokens when this scope is granted.
   * @type {string[]}
   * @memberof ApiScope
   */
  user_claims: string[];
}
