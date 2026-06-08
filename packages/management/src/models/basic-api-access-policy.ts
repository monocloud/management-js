import { ApiAccessPolicyActions } from './api-access-policy-actions';
import { PolicyTypes } from './policy-types';

/**
 * Basic API Access Policy Response: Represents a basic API access policy defined using structured conditions.
 * @export
 * @interface BasicApiAccessPolicy
 */
export interface BasicApiAccessPolicy {
  /**
   * The unique identifier of the policy.
   * @type {string}
   * @memberof BasicApiAccessPolicy
   */
  id: string;
  /**
   * Indicates whether the policy is enabled.
   * @type {boolean}
   * @memberof BasicApiAccessPolicy
   */
  enabled: boolean;
  /**
   * Human-readable name for the policy.
   * @type {string}
   * @memberof BasicApiAccessPolicy
   */
  name: string;
  /**
   * Description that explains the purpose of the policy.
   * @type {string}
   * @memberof BasicApiAccessPolicy
   */
  description?: string | null;
  /**
   * The policy authoring mode. Basic policies are authored using structured conditions; advanced policies are authored using Cedar policy source.
   * @type {PolicyTypes}
   * @memberof BasicApiAccessPolicy
   */
  type: PolicyTypes;
  /**
   * Indicates whether the policy grants access when matched.
   * @type {boolean}
   * @memberof BasicApiAccessPolicy
   */
  is_permitted: boolean;
  /**
   * Action settings applied when the policy matches.
   * @type {ApiAccessPolicyActions}
   * @memberof BasicApiAccessPolicy
   */
  actions: ApiAccessPolicyActions;
  /**
   * Specifies the creation time of the policy (in Epoch).
   * @type {number}
   * @memberof BasicApiAccessPolicy
   */
  creation_time: number;
  /**
   * Specifies the last update time of the policy (in Epoch).
   * @type {number}
   * @memberof BasicApiAccessPolicy
   */
  last_updated: number;
  /**
   * The unique identifier of the client this policy applies to.
   * @type {string}
   * @memberof BasicApiAccessPolicy
   */
  client_id: string;
  /**
   * The API scopes that may be requested by the client. If empty, all scopes may be requested.
   * @type {string[]}
   * @memberof BasicApiAccessPolicy
   */
  scopes: string[];
}
