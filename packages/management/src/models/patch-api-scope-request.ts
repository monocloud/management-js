/**
 * Patch API Scope Request: Used to update one or more properties of an existing API scope.
 * @export
 * @interface PatchApiScopeRequest
 */
export interface PatchApiScopeRequest {
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof PatchApiScopeRequest
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof PatchApiScopeRequest
   */
  description?: string | null;
  /**
   * Indicates whether this resource is advertised via the discovery document.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof PatchApiScopeRequest
   */
  name?: string;
  /**
   * Specifies whether the scope is mandatory and cannot be de-selected by the user on the consent screen.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  required?: boolean;
  /**
   * Indicates whether this scope is visually emphasized on the consent screen, typically for sensitive or high-impact permissions.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  emphasize?: boolean;
  /**
   * Specifies whether this scope is automatically included in issued tokens when the `scope` parameter is omitted.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  is_default?: boolean;
  /**
   * List of user claim types that will be embedded into access tokens when this scope is granted.
   * @type {string[]}
   * @memberof PatchApiScopeRequest
   */
  user_claims?: string[];
}
