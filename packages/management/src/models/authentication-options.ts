import { AccountProtectionOptions } from './account-protection-options';
import { AuthenticatorOptions } from './authenticator-options';
import { IdentifierOptions } from './identifier-options';
import { LogoutOptions } from './logout-options';
import { PushedAuthorizationOptions } from './pushed-authorization-options';
import { RecoveryMethodsOptions } from './recovery-methods-options';
import { SessionOptions } from './session-options';
import { SignUpOptions } from './sign-up-options';

/**
 * Authentication Options Response: Represents the current authentication configuration for the tenant.
 * @export
 * @interface AuthenticationOptions
 */
export interface AuthenticationOptions {
  /**
   * Pushed Authorization Request Options
   * @type {PushedAuthorizationOptions}
   * @memberof AuthenticationOptions
   */
  pushed_authorization: PushedAuthorizationOptions;
  /**
   * Account Protection Options
   * @type {AccountProtectionOptions}
   * @memberof AuthenticationOptions
   */
  account_protection: AccountProtectionOptions;
  /**
   * Authenticators Options
   * @type {AuthenticatorOptions}
   * @memberof AuthenticationOptions
   */
  authenticators: AuthenticatorOptions;
  /**
   * Identifiers Options
   * @type {IdentifierOptions}
   * @memberof AuthenticationOptions
   */
  identifiers: IdentifierOptions;
  /**
   * Recovery Methods Options
   * @type {RecoveryMethodsOptions}
   * @memberof AuthenticationOptions
   */
  recovery_methods: RecoveryMethodsOptions;
  /**
   * Session Options
   * @type {SessionOptions}
   * @memberof AuthenticationOptions
   */
  session: SessionOptions;
  /**
   * Logout Options
   * @type {LogoutOptions}
   * @memberof AuthenticationOptions
   */
  logout: LogoutOptions;
  /**
   * Sign-up Options
   * @type {SignUpOptions}
   * @memberof AuthenticationOptions
   */
  sign_up: SignUpOptions;
}
