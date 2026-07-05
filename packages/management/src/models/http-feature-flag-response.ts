/**
 *
 * @export
 * @interface HttpFeatureFlagResponse
 */
export interface HttpFeatureFlagResponse {
  /**
   * The flag\'s unique name.
   * @type {string}
   * @memberof HttpFeatureFlagResponse
   */
  name: string;
  /**
   * Human-readable description of what the flag controls.
   * @type {string}
   * @memberof HttpFeatureFlagResponse
   */
  description: string;
  /**
   * The code default applied when no override is set at any scope.
   * @type {boolean}
   * @memberof HttpFeatureFlagResponse
   */
  default_enabled: boolean;
  /**
   * The override stored for this scope, or null when the flag inherits from a broader scope.
   * @type {boolean}
   * @memberof HttpFeatureFlagResponse
   */
  override?: boolean | null;
}
