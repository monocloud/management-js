import { PatchRecoveryMethodsEmailOptionsRequest } from './patch-recovery-methods-email-options-request';
import { PatchRecoveryMethodsPhoneOptionsRequest } from './patch-recovery-methods-phone-options-request';

/**
 * Patch Recovery Methods Options Request: Used to update account and password recovery configuration.
 * @export
 * @interface PatchRecoveryMethodsOptionsRequest
 */
export interface PatchRecoveryMethodsOptionsRequest {
  /**
   * Recovery Methods Email Options
   * @type {PatchRecoveryMethodsEmailOptionsRequest}
   * @memberof PatchRecoveryMethodsOptionsRequest
   */
  email?: PatchRecoveryMethodsEmailOptionsRequest;
  /**
   * Recovery Methods Phone Options
   * @type {PatchRecoveryMethodsPhoneOptionsRequest}
   * @memberof PatchRecoveryMethodsOptionsRequest
   */
  phone?: PatchRecoveryMethodsPhoneOptionsRequest;
}
