import { ValueTypes } from './value-types';

/**
 * Sign-up Custom Field Response: Represents the configuration of a custom field collected during user sign-up.
 * @export
 * @interface SignUpCustomField
 */
export interface SignUpCustomField {
  /**
   * Specifies whether this custom field is enabled and shown during sign-up.
   * @type {boolean}
   * @memberof SignUpCustomField
   */
  enabled: boolean;
  /**
   * Specifies whether this custom field is mandatory during sign-up.
   * @type {boolean}
   * @memberof SignUpCustomField
   */
  required: boolean;
  /**
   * The claim name under which the value will be stored.
   * @type {string}
   * @memberof SignUpCustomField
   */
  claim_name: string;
  /**
   * The data type of the claim value.
   * @type {ValueTypes}
   * @memberof SignUpCustomField
   */
  value_type: ValueTypes;
  /**
   * The user-facing label displayed for this field during sign-up.
   * @type {string}
   * @memberof SignUpCustomField
   */
  label: string;
}
