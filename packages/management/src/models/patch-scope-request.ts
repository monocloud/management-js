import { PatchScopeClaimRequest } from './patch-scope-claim-request';

/**
 * Patch Scope Request: Used to update one or more properties of an existing scope.
 * @export
 * @interface PatchScopeRequest
 */
export interface PatchScopeRequest {
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof PatchScopeRequest
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof PatchScopeRequest
   */
  description?: string | null;
  /**
   * Indicates whether this resource is advertised via the discovery document.
   * @type {boolean}
   * @memberof PatchScopeRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof PatchScopeRequest
   */
  name?: string;
  /**
   * Specifies whether the scope is mandatory and cannot be de-selected by the user on the consent screen.
   * @type {boolean}
   * @memberof PatchScopeRequest
   */
  required?: boolean;
  /**
   * Indicates whether this scope is visually emphasized on the consent screen, typically for sensitive or high-impact permissions.
   * @type {boolean}
   * @memberof PatchScopeRequest
   */
  emphasize?: boolean;
  /**
   * List of user claim types that will be embedded into identity tokens and/or returned from the `UserInfo` endpoint when this scope is granted.
   * @type {PatchScopeClaimRequest[]}
   * @memberof PatchScopeRequest
   */
  user_claims?: PatchScopeClaimRequest[];
}
