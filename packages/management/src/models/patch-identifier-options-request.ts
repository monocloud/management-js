import { PatchEmailIdentifierOptionsRequest } from './patch-email-identifier-options-request';
import { PatchPhoneIdentifierOptionsRequest } from './patch-phone-identifier-options-request';
import { PatchUsernameIdentifierOptionsRequest } from './patch-username-identifier-options-request';

/**
 * Patch Identifier Options Request: Used to update email, phone, and username identifier configuration.
 * @export
 * @interface PatchIdentifierOptionsRequest
 */
export interface PatchIdentifierOptionsRequest {
  /**
   * Email Identifier Options
   * @type {PatchEmailIdentifierOptionsRequest}
   * @memberof PatchIdentifierOptionsRequest
   */
  email?: PatchEmailIdentifierOptionsRequest;
  /**
   * Phone Identifier Options
   * @type {PatchPhoneIdentifierOptionsRequest}
   * @memberof PatchIdentifierOptionsRequest
   */
  phone?: PatchPhoneIdentifierOptionsRequest;
  /**
   * Username Identifier Options
   * @type {PatchUsernameIdentifierOptionsRequest}
   * @memberof PatchIdentifierOptionsRequest
   */
  username?: PatchUsernameIdentifierOptionsRequest;
}
