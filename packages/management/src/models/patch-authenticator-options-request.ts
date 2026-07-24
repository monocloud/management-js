import { PatchEmailAuthenticatorOptionsRequest } from './patch-email-authenticator-options-request';
import { PatchPasskeyAuthenticatorOptionsRequest } from './patch-passkey-authenticator-options-request';
import { PatchPasswordAuthenticatorOptionsRequest } from './patch-password-authenticator-options-request';
import { PatchPhoneAuthenticatorOptionsRequest } from './patch-phone-authenticator-options-request';

/**
 * Patch Authenticator Options Request: Used to partially update the authentication provider configuration.
 * @export
 * @interface PatchAuthenticatorOptionsRequest
 */
export interface PatchAuthenticatorOptionsRequest {
  /**
   * Determines whether external authentication providers are prioritized over other authenticators during sign-in.
   * @type {boolean}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  external_sign_in_methods_first?: boolean;
  /**
   * Password authenticator configuration.
   * @type {PatchPasswordAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  password?: PatchPasswordAuthenticatorOptionsRequest;
  /**
   * Passkey authenticator configuration.
   * @type {PatchPasskeyAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  passkey?: PatchPasskeyAuthenticatorOptionsRequest;
  /**
   * Email authenticator configuration.
   * @type {PatchEmailAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  email?: PatchEmailAuthenticatorOptionsRequest;
  /**
   * Phone authenticator configuration.
   * @type {PatchPhoneAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  phone?: PatchPhoneAuthenticatorOptionsRequest;
}
