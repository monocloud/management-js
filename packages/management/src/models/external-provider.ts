import { ExternalAuthenticators } from './external-authenticators';
import { ExternalProviderConnectionResponse } from './external-provider-connection-response';
import { ExternalProviderCredentialsResponse } from './external-provider-credentials-response';
import { TrustIdentifierModes } from './trust-identifier-modes';

/**
 * External Provider Response: Represents the configuration of an external authenticator.
 * @export
 * @interface ExternalProvider
 */
export interface ExternalProvider {
  /**
   * The unique logical name of the connection. Identifies the connection and addresses it through the API.
   * @type {string}
   * @memberof ExternalProvider
   */
  name: string;
  /**
   * The external identity provider of the connection.
   * @type {ExternalAuthenticators}
   * @memberof ExternalProvider
   */
  authenticator: ExternalAuthenticators;
  /**
   * A custom display name for the provider\'s sign-in button. When not set, the provider\'s default display name is used.
   * @type {string}
   * @memberof ExternalProvider
   */
  display_name?: string | null;
  /**
   * A custom icon URL for the provider\'s sign-in button. When not set, the provider\'s default icon is used.
   * @type {string}
   * @memberof ExternalProvider
   */
  icon?: string | null;
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof ExternalProvider
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof ExternalProvider
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether the provider\'s sign-in button is shown on the login page.
   * @type {boolean}
   * @memberof ExternalProvider
   */
  show_on_login_page: boolean;
  /**
   * The client credentials issued by the external identity provider. When not set, MonoCloud-managed credentials are used.
   * @type {ExternalProviderCredentialsResponse}
   * @memberof ExternalProvider
   */
  credentials?: ExternalProviderCredentialsResponse | null;
  /**
   * The protocol connection settings used to communicate with the external identity provider. Applies only to custom and enterprise connections.
   * @type {ExternalProviderConnectionResponse}
   * @memberof ExternalProvider
   */
  connection?: ExternalProviderConnectionResponse | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof ExternalProvider
   */
  scopes: string[];
  /**
   * A map of claim names to upstream source claim names used to map the upstream profile onto the MonoCloud user.
   * @type {{ [key: string]: string; }}
   * @memberof ExternalProvider
   */
  claim_mappings: Record<string, string>;
  /**
   * A map of parameter names to the values sent to the external provider\'s authorization endpoint. A value prefixed with `$` forwards the incoming authorization request query parameter with that name; any other value is sent as-is.
   * @type {{ [key: string]: string; }}
   * @memberof ExternalProvider
   */
  authorization_parameters: Record<string, string>;
  /**
   * Determines whether the email received from the external provider is treated as verified.
   * @type {TrustIdentifierModes}
   * @memberof ExternalProvider
   */
  trust_email: TrustIdentifierModes;
  /**
   * Determines whether the phone number received from the external provider is treated as verified.
   * @type {TrustIdentifierModes}
   * @memberof ExternalProvider
   */
  trust_phone: TrustIdentifierModes;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof ExternalProvider
   */
  sync_user_profile_always: boolean;
  /**
   * Specifies whether the IdP claims should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof ExternalProvider
   */
  sync_idp_claims_always: boolean;
  /**
   * The email domains routed to this provider through home realm discovery.
   * @type {string[]}
   * @memberof ExternalProvider
   */
  home_realm_domains: string[];
  /**
   * The priority of the external provider. Used to order the provider relative to others.
   * @type {number}
   * @memberof ExternalProvider
   */
  priority: number;
}
