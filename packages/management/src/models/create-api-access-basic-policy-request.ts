import { CreateApiAccessPolicyActionsRequest } from './create-api-access-policy-actions-request';

/**
 * Create Basic API Access Policy Request: Creates a basic API access policy using structured conditions.
 * @export
 * @interface CreateApiAccessBasicPolicyRequest
 */
export interface CreateApiAccessBasicPolicyRequest {
  /**
   * Indicates whether the policy is enabled.
   * @type {boolean}
   * @memberof CreateApiAccessBasicPolicyRequest
   */
  enabled?: boolean;
  /**
   * Human-readable name for the policy.
   * @type {string}
   * @memberof CreateApiAccessBasicPolicyRequest
   */
  name: string;
  /**
   * Description that explains the purpose of the policy.
   * @type {string}
   * @memberof CreateApiAccessBasicPolicyRequest
   */
  description?: string | null;
  /**
   * Action settings applied when the policy matches.
   * @type {CreateApiAccessPolicyActionsRequest}
   * @memberof CreateApiAccessBasicPolicyRequest
   */
  actions?: CreateApiAccessPolicyActionsRequest;
  /**
   * The unique identifier of the client this policy applies to.
   * @type {string}
   * @memberof CreateApiAccessBasicPolicyRequest
   */
  client_id: string;
  /**
   * The API scopes that may be requested by the client. If empty, all scopes may be requested.
   * @type {string[]}
   * @memberof CreateApiAccessBasicPolicyRequest
   */
  scopes?: string[];
}
