import { AppleAuthenticatorOptions } from './apple-authenticator-options';
import { DiscordAuthenticatorOptions } from './discord-authenticator-options';
import { EmailAuthenticatorOptions } from './email-authenticator-options';
import { ExternalAuthenticators } from './external-authenticators';
import { FacebookAuthenticatorOptions } from './facebook-authenticator-options';
import { GitHubAuthenticatorOptions } from './git-hub-authenticator-options';
import { GitLabAuthenticatorOptions } from './git-lab-authenticator-options';
import { GoogleAuthenticatorOptions } from './google-authenticator-options';
import { LinkedInAuthenticatorOptions } from './linked-in-authenticator-options';
import { MicrosoftAuthenticatorOptions } from './microsoft-authenticator-options';
import { PasskeyAuthenticatorOptions } from './passkey-authenticator-options';
import { PasswordAuthenticatorOptions } from './password-authenticator-options';
import { PhoneAuthenticatorOptions } from './phone-authenticator-options';
import { TwitterAuthenticatorOptions } from './twitter-authenticator-options';
import { XeroAuthenticatorOptions } from './xero-authenticator-options';

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
   * Defines the ordering of external authentication providers during sign-in.
   * @type {ExternalAuthenticators[]}
   * @memberof AuthenticatorOptions
   */
  external_sign_in_methods_order: ExternalAuthenticators[];
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
  /**
   * Google external identity provider configuration.
   * @type {GoogleAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  google?: GoogleAuthenticatorOptions | null;
  /**
   * Apple external identity provider configuration.
   * @type {AppleAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  apple?: AppleAuthenticatorOptions | null;
  /**
   * Facebook external identity provider configuration.
   * @type {FacebookAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  facebook?: FacebookAuthenticatorOptions | null;
  /**
   * Microsoft external identity provider configuration.
   * @type {MicrosoftAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  microsoft?: MicrosoftAuthenticatorOptions | null;
  /**
   * GitHub external identity provider configuration.
   * @type {GitHubAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  github?: GitHubAuthenticatorOptions | null;
  /**
   * GitLab external identity provider configuration.
   * @type {GitLabAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  gitlab?: GitLabAuthenticatorOptions | null;
  /**
   * Discord external identity provider configuration.
   * @type {DiscordAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  discord?: DiscordAuthenticatorOptions | null;
  /**
   * Twitter/X external identity provider configuration.
   * @type {TwitterAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  twitter?: TwitterAuthenticatorOptions | null;
  /**
   * LinkedIn external identity provider configuration.
   * @type {LinkedInAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  linkedin?: LinkedInAuthenticatorOptions | null;
  /**
   * Xero external identity provider configuration.
   * @type {XeroAuthenticatorOptions}
   * @memberof AuthenticatorOptions
   */
  xero?: XeroAuthenticatorOptions | null;
}
