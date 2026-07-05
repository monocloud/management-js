import { CreateExternalAuthenticatorConnectionRequest } from './create-external-authenticator-connection-request';
import { CreateExternalAuthenticatorCredentialsRequest } from './create-external-authenticator-credentials-request';
import { ExternalAuthenticators } from './external-authenticators';
import { SigningAlgorithms } from './signing-algorithms';
import { TrustEmailModes } from './trust-email-modes';

/**
 * Create External Authenticator Request: Used to create an external authenticator.
 * @export
 * @interface CreateExternalAuthenticatorRequest
 */
export interface CreateExternalAuthenticatorRequest {
  /**
   * The unique logical name of the connection. Identifies the connection and addresses it through the API.
   * @type {string}
   * @memberof CreateExternalAuthenticatorRequest
   */
  name: string;
  /**
   * @type {ExternalAuthenticators}
   * @memberof CreateExternalAuthenticatorRequest
   */
  provider: ExternalAuthenticators;
  /**
   * A custom display name for the provider\'s sign-in button. When not set, the provider\'s default display name is used.
   * @type {string}
   * @memberof CreateExternalAuthenticatorRequest
   */
  display_name?: string | null;
  /**
   * A custom icon URL for the provider\'s sign-in button. When not set, the provider\'s default icon is used.
   * @type {string}
   * @memberof CreateExternalAuthenticatorRequest
   */
  icon?: string | null;
  /**
   * The priority of the external provider. Used to order the provider relative to others.
   * @type {number}
   * @memberof CreateExternalAuthenticatorRequest
   */
  priority?: number;
  /**
   * Specifies whether the provider\'s sign-in button is shown on the login page.
   * @type {boolean}
   * @memberof CreateExternalAuthenticatorRequest
   */
  show_on_login_page?: boolean;
  /**
   * Determines whether the email received from the external provider is treated as verified.
   * @type {TrustEmailModes}
   * @memberof CreateExternalAuthenticatorRequest
   */
  trust_email?: TrustEmailModes;
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof CreateExternalAuthenticatorRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof CreateExternalAuthenticatorRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof CreateExternalAuthenticatorRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Specifies whether the IdP claims should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof CreateExternalAuthenticatorRequest
   */
  sync_idp_claims_always?: boolean;
  /**
   * The client credentials issued by the external identity provider. When not set, MonoCloud-managed credentials are used.
   * @type {CreateExternalAuthenticatorCredentialsRequest}
   * @memberof CreateExternalAuthenticatorRequest
   */
  credentials?: CreateExternalAuthenticatorCredentialsRequest | null;
  /**
   * The protocol connection settings used to communicate with the external identity provider. Applies only to custom and enterprise connections.
   * @type {CreateExternalAuthenticatorConnectionRequest}
   * @memberof CreateExternalAuthenticatorRequest
   */
  connection?: CreateExternalAuthenticatorConnectionRequest | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof CreateExternalAuthenticatorRequest
   */
  scopes?: string[];
  /**
   * A map of claim names to upstream source claim names used to map the upstream profile onto the MonoCloud user.
   * @type {{ [key: string]: string; }}
   * @memberof CreateExternalAuthenticatorRequest
   */
  claim_mappings?: Record<string, string>;
  /**
   * The token signing algorithms accepted from the external provider. When not set, no restriction is applied.
   * @type {SigningAlgorithms[]}
   * @memberof CreateExternalAuthenticatorRequest
   */
  allowed_signing_algorithms?: SigningAlgorithms[] | null;
  /**
   * The email domains routed to this provider through home realm discovery.
   * @type {string[]}
   * @memberof CreateExternalAuthenticatorRequest
   */
  home_realm_domains?: string[];
  /**
   * A map of parameter names to the values sent to the external provider\'s authorization endpoint. A value prefixed with `$` forwards the incoming authorization request query parameter with that name; any other value is sent as-is.
   * @type {{ [key: string]: string; }}
   * @memberof CreateExternalAuthenticatorRequest
   */
  authorization_parameters?: Record<string, string>;
}
