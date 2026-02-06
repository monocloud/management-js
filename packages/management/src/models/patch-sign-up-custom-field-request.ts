import { ValueTypes } from './value-types';

/**
 * Patch Sign-Up Custom Field Request: Used to update a sign-up custom field configuration.
 * @export
 * @interface PatchSignUpCustomFieldRequest
 */
export interface PatchSignUpCustomFieldRequest {
  /**
   * Specifies whether this custom field is enabled and shown during sign-up.
   * @type {boolean}
   * @memberof PatchSignUpCustomFieldRequest
   */
  enabled?: boolean;
  /**
   * Specifies whether this custom field is mandatory during sign-up.
   * @type {boolean}
   * @memberof PatchSignUpCustomFieldRequest
   */
  required?: boolean;
  /**
   * The claim name under which the value will be stored.
   * @type {string}
   * @memberof PatchSignUpCustomFieldRequest
   */
  claim_name?: string;
  /**
   * The data type of the claim value.
   * @type {ValueTypes}
   * @memberof PatchSignUpCustomFieldRequest
   */
  value_type?: ValueTypes;
  /**
   * The user-facing label displayed for this field during sign-up.
   * @type {string}
   * @memberof PatchSignUpCustomFieldRequest
   */
  label?: string;
}
