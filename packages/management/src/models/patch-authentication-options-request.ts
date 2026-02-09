import { PatchAccountProtectionOptionsRequest } from './patch-account-protection-options-request';
import { PatchAuthenticatorOptionsRequest } from './patch-authenticator-options-request';
import { PatchIdentifierOptionsRequest } from './patch-identifier-options-request';
import { PatchLogoutOptionsRequest } from './patch-logout-options-request';
import { PatchPushedAuthorizationOptionsRequest } from './patch-pushed-authorization-options-request';
import { PatchRecoveryMethodsOptionsRequest } from './patch-recovery-methods-options-request';
import { PatchSessionOptionsRequest } from './patch-session-options-request';
import { PatchSignUpOptionsRequest } from './patch-sign-up-options-request';

/**
 * Patch Authentication Options Request: Used to update the authentication configuration.
 * @export
 * @interface PatchAuthenticationOptionsRequest
 */
export interface PatchAuthenticationOptionsRequest {
  /**
   * Pushed Authorization Request Options
   * @type {PatchPushedAuthorizationOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  pushed_authorization?: PatchPushedAuthorizationOptionsRequest;
  /**
   * Account Protection Options
   * @type {PatchAccountProtectionOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  account_protection?: PatchAccountProtectionOptionsRequest;
  /**
   * Authenticators Options
   * @type {PatchAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  authenticators?: PatchAuthenticatorOptionsRequest;
  /**
   * Identifiers Options
   * @type {PatchIdentifierOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  identifiers?: PatchIdentifierOptionsRequest;
  /**
   * Recovery Methods Options
   * @type {PatchRecoveryMethodsOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  recovery_methods?: PatchRecoveryMethodsOptionsRequest;
  /**
   * Session Options
   * @type {PatchSessionOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  session?: PatchSessionOptionsRequest;
  /**
   * Logout Options
   * @type {PatchLogoutOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  logout?: PatchLogoutOptionsRequest;
  /**
   * Sign-up Options
   * @type {PatchSignUpOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  sign_up?: PatchSignUpOptionsRequest;
}
