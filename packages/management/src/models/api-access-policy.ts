import { PolicyTypes } from './policy-types';

/**
 * API Access Policy Response: Represents an API access policy.
 * @export
 * @interface ApiAccessPolicy
 */
export interface ApiAccessPolicy {
  /**
   * The unique identifier of the policy.
   * @type {string}
   * @memberof ApiAccessPolicy
   */
  id: string;
  /**
   * Indicates whether the policy is enabled.
   * @type {boolean}
   * @memberof ApiAccessPolicy
   */
  enabled: boolean;
  /**
   * Human-readable name for the policy.
   * @type {string}
   * @memberof ApiAccessPolicy
   */
  name: string;
  /**
   * Description that explains the purpose of the policy.
   * @type {string}
   * @memberof ApiAccessPolicy
   */
  description?: string | null;
  /**
   * The policy authoring mode. Basic policies are authored using structured conditions; advanced policies are authored using Cedar policy source.
   * @type {PolicyTypes}
   * @memberof ApiAccessPolicy
   */
  type: PolicyTypes;
  /**
   * Indicates whether the policy grants access when matched.
   * @type {boolean}
   * @memberof ApiAccessPolicy
   */
  is_permitted: boolean;
  /**
   * Specifies the creation time of the policy (in Epoch).
   * @type {number}
   * @memberof ApiAccessPolicy
   */
  creation_time: number;
  /**
   * Specifies the last update time of the policy (in Epoch).
   * @type {number}
   * @memberof ApiAccessPolicy
   */
  last_updated: number;
  /**
   * The unique identifier of the client this policy applies to. Returned for basic policies; `null` for advanced policies.
   * @type {string}
   * @memberof ApiAccessPolicy
   */
  client_id?: string | null;
}
