import { PatchApiAccessPolicyActionsRequest } from './patch-api-access-policy-actions-request';

/**
 * Patch Basic API Access Policy Request: Used to partially update a basic API access policy.
 * @export
 * @interface PatchApiAccessBasicPolicyRequest
 */
export interface PatchApiAccessBasicPolicyRequest {
  /**
   * Indicates whether the policy is enabled.
   * @type {boolean}
   * @memberof PatchApiAccessBasicPolicyRequest
   */
  enabled?: boolean;
  /**
   * Human-readable name for the policy.
   * @type {string}
   * @memberof PatchApiAccessBasicPolicyRequest
   */
  name?: string;
  /**
   * Description that explains the purpose of the policy.
   * @type {string}
   * @memberof PatchApiAccessBasicPolicyRequest
   */
  description?: string | null;
  /**
   * Action settings applied when the policy fires.
   * @type {PatchApiAccessPolicyActionsRequest}
   * @memberof PatchApiAccessBasicPolicyRequest
   */
  actions?: PatchApiAccessPolicyActionsRequest;
  /**
   * The API scopes that may be requested by the client. If empty, all scopes may be requested.
   * @type {string[]}
   * @memberof PatchApiAccessBasicPolicyRequest
   */
  scopes?: string[];
}
