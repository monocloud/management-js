import { ValueTypes } from './value-types';

/**
 * Create Sign-Up Custom Field Request: Creates a configuration for a custom field collected during user sign-up.
 * @export
 * @interface CreateSignUpCustomFieldRequest
 */
export interface CreateSignUpCustomFieldRequest {
  /**
   * Specifies whether this custom field is enabled and shown during sign-up.
   * @type {boolean}
   * @memberof CreateSignUpCustomFieldRequest
   */
  enabled: boolean;
  /**
   * Specifies whether this custom field is mandatory during sign-up.
   * @type {boolean}
   * @memberof CreateSignUpCustomFieldRequest
   */
  required: boolean;
  /**
   * The claim name under which the value will be stored.
   * @type {string}
   * @memberof CreateSignUpCustomFieldRequest
   */
  claim_name: string;
  /**
   * The data type of the claim value.
   * @type {ValueTypes}
   * @memberof CreateSignUpCustomFieldRequest
   */
  value_type: ValueTypes;
  /**
   * The user-facing label displayed for this field during sign-up.
   * @type {string}
   * @memberof CreateSignUpCustomFieldRequest
   */
  label: string;
}
