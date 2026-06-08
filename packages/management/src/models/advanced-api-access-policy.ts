import { ApiAccessPolicyActions } from './api-access-policy-actions';
import { PolicyTypes } from './policy-types';

/**
 * Advanced API Access Policy Response: Represents a stored advanced API access policy authored using Cedar.
 * @export
 * @interface AdvancedApiAccessPolicy
 */
export interface AdvancedApiAccessPolicy {
  /**
   * The unique identifier of the policy.
   * @type {string}
   * @memberof AdvancedApiAccessPolicy
   */
  id: string;
  /**
   * Indicates whether the policy is enabled.
   * @type {boolean}
   * @memberof AdvancedApiAccessPolicy
   */
  enabled: boolean;
  /**
   * Human-readable name for the policy.
   * @type {string}
   * @memberof AdvancedApiAccessPolicy
   */
  name: string;
  /**
   * Description that explains the purpose of the policy.
   * @type {string}
   * @memberof AdvancedApiAccessPolicy
   */
  description?: string | null;
  /**
   * The policy authoring mode. Basic policies are authored using structured conditions; advanced policies are authored using Cedar policy source.
   * @type {PolicyTypes}
   * @memberof AdvancedApiAccessPolicy
   */
  type: PolicyTypes;
  /**
   * Indicates whether the policy grants access when matched.
   * @type {boolean}
   * @memberof AdvancedApiAccessPolicy
   */
  is_permitted: boolean;
  /**
   * The Cedar policy source used during evaluation for advanced policies.
   * @type {string}
   * @memberof AdvancedApiAccessPolicy
   */
  cedar: string;
  /**
   * Action settings applied when the policy matches.
   * @type {ApiAccessPolicyActions}
   * @memberof AdvancedApiAccessPolicy
   */
  actions: ApiAccessPolicyActions;
  /**
   * Specifies the creation time of the policy (in Epoch).
   * @type {number}
   * @memberof AdvancedApiAccessPolicy
   */
  creation_time: number;
  /**
   * Specifies the last update time of the policy (in Epoch).
   * @type {number}
   * @memberof AdvancedApiAccessPolicy
   */
  last_updated: number;
  /**
   * Optional denial message returned to the client when this policy rejects a token request. If unset, a generic denial message is returned.
   * @type {string}
   * @memberof AdvancedApiAccessPolicy
   */
  error?: string | null;
}
