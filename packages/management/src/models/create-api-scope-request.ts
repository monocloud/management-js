/**
 * Create API Scope Request: Creates a permission scope for an API resource.
 * @export
 * @interface CreateApiScopeRequest
 */
export interface CreateApiScopeRequest {
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof CreateApiScopeRequest
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof CreateApiScopeRequest
   */
  description?: string | null;
  /**
   * Indicates whether this API scope is advertised via the discovery document.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof CreateApiScopeRequest
   */
  name: string;
  /**
   * Specifies whether the scope is mandatory and cannot be de-selected by the user on the consent screen.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  required?: boolean;
  /**
   * Indicates whether this scope is visually emphasized on the consent screen, typically for sensitive or high-impact permissions.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  emphasize?: boolean;
  /**
   * Specifies whether this scope is automatically included in issued tokens when the `scope` parameter is omitted.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  is_default?: boolean;
  /**
   * List of user claim types that will be embedded into access tokens when this scope is granted.
   * @type {string[]}
   * @memberof CreateApiScopeRequest
   */
  user_claims?: string[];
}
