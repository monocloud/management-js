import { PatchApiAccessPolicyActionsRequest } from './patch-api-access-policy-actions-request';

/**
 * Patch Advanced API Access Policy Request: Used to partially update an advanced API access policy.
 * @export
 * @interface PatchApiAccessAdvancedPolicyRequest
 */
export interface PatchApiAccessAdvancedPolicyRequest {
  /**
   * Indicates whether the policy is enabled.
   * @type {boolean}
   * @memberof PatchApiAccessAdvancedPolicyRequest
   */
  enabled?: boolean;
  /**
   * Human-readable name for the policy.
   * @type {string}
   * @memberof PatchApiAccessAdvancedPolicyRequest
   */
  name?: string;
  /**
   * Description that explains the purpose of the policy.
   * @type {string}
   * @memberof PatchApiAccessAdvancedPolicyRequest
   */
  description?: string | null;
  /**
   * Action settings applied when the policy fires.
   * @type {PatchApiAccessPolicyActionsRequest}
   * @memberof PatchApiAccessAdvancedPolicyRequest
   */
  actions?: PatchApiAccessPolicyActionsRequest;
  /**
   * The Cedar policy source used during evaluation for advanced policies.
   * @type {string}
   * @memberof PatchApiAccessAdvancedPolicyRequest
   */
  cedar?: string;
  /**
   * Optional denial message returned to the client when this policy rejects a token request. If unset, a generic denial message is returned.
   * @type {string}
   * @memberof PatchApiAccessAdvancedPolicyRequest
   */
  error?: string | null;
}
