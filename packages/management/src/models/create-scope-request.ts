import { CreateScopeClaimRequest } from './create-scope-claim-request';

/**
 * Create Scope Request: Creates an identity scope that defines a permission for accessing user claims.
 * @export
 * @interface CreateScopeRequest
 */
export interface CreateScopeRequest {
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof CreateScopeRequest
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof CreateScopeRequest
   */
  description?: string | null;
  /**
   * Indicates whether this resource is advertised via the discovery document.
   * @type {boolean}
   * @memberof CreateScopeRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof CreateScopeRequest
   */
  name: string;
  /**
   * Specifies whether the scope is mandatory and cannot be de-selected by the user on the consent screen.
   * @type {boolean}
   * @memberof CreateScopeRequest
   */
  required?: boolean;
  /**
   * Indicates whether this scope is visually emphasized on the consent screen, typically for sensitive or high-impact permissions.
   * @type {boolean}
   * @memberof CreateScopeRequest
   */
  emphasize?: boolean;
  /**
   * List of user claim types that will be embedded into identity tokens and/or returned from the `UserInfo` endpoint when this scope is granted.
   * @type {CreateScopeClaimRequest[]}
   * @memberof CreateScopeRequest
   */
  user_claims: CreateScopeClaimRequest[];
}
