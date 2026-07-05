import { PatchExternalAuthenticatorConnectionRequest } from './patch-external-authenticator-connection-request';
import { PatchExternalAuthenticatorCredentialsRequest } from './patch-external-authenticator-credentials-request';
import { SigningAlgorithms } from './signing-algorithms';
import { TrustEmailModes } from './trust-email-modes';

/**
 * Patch External Authenticator Request: Used to update an external authenticator\'s configuration.
 * @export
 * @interface PatchExternalAuthenticatorRequest
 */
export interface PatchExternalAuthenticatorRequest {
  /**
   * A custom display name for the provider\'s sign-in button.
   * @type {string}
   * @memberof PatchExternalAuthenticatorRequest
   */
  display_name?: string | null;
  /**
   * A custom icon URL for the provider\'s sign-in button.
   * @type {string}
   * @memberof PatchExternalAuthenticatorRequest
   */
  icon?: string | null;
  /**
   * The priority of the external provider. Used to order the provider relative to others.
   * @type {number}
   * @memberof PatchExternalAuthenticatorRequest
   */
  priority?: number;
  /**
   * Specifies whether the provider\'s sign-in button is shown on the login page.
   * @type {boolean}
   * @memberof PatchExternalAuthenticatorRequest
   */
  show_on_login_page?: boolean;
  /**
   * Determines whether the email received from the external provider is treated as verified.
   * @type {TrustEmailModes}
   * @memberof PatchExternalAuthenticatorRequest
   */
  trust_email?: TrustEmailModes;
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof PatchExternalAuthenticatorRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof PatchExternalAuthenticatorRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof PatchExternalAuthenticatorRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Specifies whether the IdP claims should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof PatchExternalAuthenticatorRequest
   */
  sync_idp_claims_always?: boolean;
  /**
   * The client credentials issued by the external identity provider. When not set, MonoCloud-managed credentials are used.
   * @type {PatchExternalAuthenticatorCredentialsRequest}
   * @memberof PatchExternalAuthenticatorRequest
   */
  credentials?: PatchExternalAuthenticatorCredentialsRequest | null;
  /**
   * The protocol connection settings used to communicate with the external identity provider.
   * @type {PatchExternalAuthenticatorConnectionRequest}
   * @memberof PatchExternalAuthenticatorRequest
   */
  connection?: PatchExternalAuthenticatorConnectionRequest | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof PatchExternalAuthenticatorRequest
   */
  scopes?: string[];
  /**
   * A map of claim names to upstream source claim names used to map the upstream profile onto the MonoCloud user.
   * @type {{ [key: string]: string; }}
   * @memberof PatchExternalAuthenticatorRequest
   */
  claim_mappings?: Record<string, string>;
  /**
   * @type {SigningAlgorithms[]}
   * @memberof PatchExternalAuthenticatorRequest
   */
  allowed_signing_algorithms?: SigningAlgorithms[] | null;
  /**
   * The email domains routed to this provider through home realm discovery.
   * @type {string[]}
   * @memberof PatchExternalAuthenticatorRequest
   */
  home_realm_domains?: string[];
  /**
   * A map of parameter names to the values sent to the external provider\'s authorization endpoint. A value prefixed with `$` forwards the incoming authorization request query parameter with that name; any other value is sent as-is.
   * @type {{ [key: string]: string; }}
   * @memberof PatchExternalAuthenticatorRequest
   */
  authorization_parameters?: Record<string, string>;
}
