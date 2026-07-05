import { EmailAuthenticatorOptions } from './email-authenticator-options';
import { PasskeyAuthenticatorOptions } from './passkey-authenticator-options';
import { PasswordAuthenticatorOptions } from './password-authenticator-options';
import { PhoneAuthenticatorOptions } from './phone-authenticator-options';

/**
 * Authenticator Options Response: Defines how users can authenticate, including password, passkeys, and external identity providers.
 * @export
 * @interface AuthenticatorOptions
 */
export interface AuthenticatorOptions {
  /**
   * Determines whether external authentication providers are prioritized over other authenticators during sign-in.
   * @type {boolean}
   * @memberof AuthenticatorOptions
   */
  external_sign_in_methods_first: boolean;
  /**
   * Password authenticator configuration.
   * @type {PasswordAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  password: PasswordAuthenticatorOptions;
  /**
   * Passkey authenticator configuration.
   * @type {PasskeyAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  passkey: PasskeyAuthenticatorOptions;
  /**
   * Email authenticator configuration.
   * @type {EmailAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  email: EmailAuthenticatorOptions;
  /**
   * Phone authenticator configuration.
   * @type {PhoneAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  phone: PhoneAuthenticatorOptions;
}
