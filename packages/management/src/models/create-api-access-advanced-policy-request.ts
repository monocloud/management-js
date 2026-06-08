import { CreateApiAccessPolicyActionsRequest } from './create-api-access-policy-actions-request';

/**
 * Create Advanced API Access Policy Request: Creates an advanced API access policy from raw Cedar policy source.
 * @export
 * @interface CreateApiAccessAdvancedPolicyRequest
 */
export interface CreateApiAccessAdvancedPolicyRequest {
  /**
   * Indicates whether the policy is enabled.
   * @type {boolean}
   * @memberof CreateApiAccessAdvancedPolicyRequest
   */
  enabled?: boolean;
  /**
   * Human-readable name for the policy.
   * @type {string}
   * @memberof CreateApiAccessAdvancedPolicyRequest
   */
  name: string;
  /**
   * Description that explains the purpose of the policy.
   * @type {string}
   * @memberof CreateApiAccessAdvancedPolicyRequest
   */
  description?: string | null;
  /**
   * The Cedar policy source used during evaluation for advanced policies.
   * @type {string}
   * @memberof CreateApiAccessAdvancedPolicyRequest
   */
  cedar: string;
  /**
   * Action settings applied when the policy matches.
   * @type {CreateApiAccessPolicyActionsRequest}
   * @memberof CreateApiAccessAdvancedPolicyRequest
   */
  actions?: CreateApiAccessPolicyActionsRequest;
  /**
   * Optional denial message returned to the client when this policy rejects a token request. If unset, a generic denial message is returned.
   * @type {string}
   * @memberof CreateApiAccessAdvancedPolicyRequest
   */
  error?: string | null;
}
