import { ExternalAuthenticators } from './external-authenticators';
import { PatchAppleAuthenticatorOptionsRequest } from './patch-apple-authenticator-options-request';
import { PatchDiscordAuthenticatorOptionsRequest } from './patch-discord-authenticator-options-request';
import { PatchEmailAuthenticatorOptionsRequest } from './patch-email-authenticator-options-request';
import { PatchFacebookAuthenticatorOptionsRequest } from './patch-facebook-authenticator-options-request';
import { PatchGitHubAuthenticatorOptionsRequest } from './patch-git-hub-authenticator-options-request';
import { PatchGitLabAuthenticatorOptionsRequest } from './patch-git-lab-authenticator-options-request';
import { PatchGoogleAuthenticatorOptionsRequest } from './patch-google-authenticator-options-request';
import { PatchLinkedInAuthenticatorOptionsRequest } from './patch-linked-in-authenticator-options-request';
import { PatchMicrosoftAuthenticatorOptionsRequest } from './patch-microsoft-authenticator-options-request';
import { PatchPasskeyAuthenticatorOptionsRequest } from './patch-passkey-authenticator-options-request';
import { PatchPasswordAuthenticatorOptionsRequest } from './patch-password-authenticator-options-request';
import { PatchPhoneAuthenticatorOptionsRequest } from './patch-phone-authenticator-options-request';
import { PatchTwitterAuthenticatorOptionsRequest } from './patch-twitter-authenticator-options-request';
import { PatchXeroAuthenticatorOptionsRequest } from './patch-xero-authenticator-options-request';

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
   * Defines the ordering of external authentication providers during sign-in.
   * @type {ExternalAuthenticators[]}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  external_sign_in_methods_order?: ExternalAuthenticators[];
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
  /**
   * Google external identity provider configuration.
   * @type {PatchGoogleAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  google?: PatchGoogleAuthenticatorOptionsRequest | null;
  /**
   * Apple external identity provider configuration.
   * @type {PatchAppleAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  apple?: PatchAppleAuthenticatorOptionsRequest | null;
  /**
   * Facebook external identity provider configuration.
   * @type {PatchFacebookAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  facebook?: PatchFacebookAuthenticatorOptionsRequest | null;
  /**
   * Microsoft external identity provider configuration.
   * @type {PatchMicrosoftAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  microsoft?: PatchMicrosoftAuthenticatorOptionsRequest | null;
  /**
   * GitHub external identity provider configuration.
   * @type {PatchGitHubAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  github?: PatchGitHubAuthenticatorOptionsRequest | null;
  /**
   * GitLab external identity provider configuration.
   * @type {PatchGitLabAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  gitlab?: PatchGitLabAuthenticatorOptionsRequest | null;
  /**
   * Discord external identity provider configuration.
   * @type {PatchDiscordAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  discord?: PatchDiscordAuthenticatorOptionsRequest | null;
  /**
   * Twitter/X external identity provider configuration.
   * @type {PatchTwitterAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  twitter?: PatchTwitterAuthenticatorOptionsRequest | null;
  /**
   * LinkedIn external identity provider configuration.
   * @type {PatchLinkedInAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  linkedin?: PatchLinkedInAuthenticatorOptionsRequest | null;
  /**
   * Xero external identity provider configuration.
   * @type {PatchXeroAuthenticatorOptionsRequest}
   * @memberof PatchAuthenticatorOptionsRequest
   */
  xero?: PatchXeroAuthenticatorOptionsRequest | null;
}
