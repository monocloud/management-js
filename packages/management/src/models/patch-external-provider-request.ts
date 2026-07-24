import { PatchExternalProviderConnectionRequest } from './patch-external-provider-connection-request';
import { PatchExternalProviderCredentialsRequest } from './patch-external-provider-credentials-request';
import { TrustIdentifierModes } from './trust-identifier-modes';

/**
 * Patch External Provider Request: Used to update an external authenticator\'s configuration.
 * @export
 * @interface PatchExternalProviderRequest
 */
export interface PatchExternalProviderRequest {
  /**
   * A custom display name for the provider\'s sign-in button.
   * @type {string}
   * @memberof PatchExternalProviderRequest
   */
  display_name?: string | null;
  /**
   * A custom icon URL for the provider\'s sign-in button.
   * @type {string}
   * @memberof PatchExternalProviderRequest
   */
  icon?: string | null;
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof PatchExternalProviderRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof PatchExternalProviderRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether the provider\'s sign-in button is shown on the login page.
   * @type {boolean}
   * @memberof PatchExternalProviderRequest
   */
  show_on_login_page?: boolean;
  /**
   * The client credentials issued by the external identity provider. When not set, MonoCloud-managed credentials are used.
   * @type {PatchExternalProviderCredentialsRequest}
   * @memberof PatchExternalProviderRequest
   */
  credentials?: PatchExternalProviderCredentialsRequest | null;
  /**
   * The protocol connection settings used to communicate with the external identity provider.
   * @type {PatchExternalProviderConnectionRequest}
   * @memberof PatchExternalProviderRequest
   */
  connection?: PatchExternalProviderConnectionRequest | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof PatchExternalProviderRequest
   */
  scopes?: string[];
  /**
   * A map of claim names to upstream source claim names used to map the upstream profile onto the MonoCloud user.
   * @type {{ [key: string]: string; }}
   * @memberof PatchExternalProviderRequest
   */
  claim_mappings?: Record<string, string>;
  /**
   * A map of parameter names to the values sent to the external provider\'s authorization endpoint. A value prefixed with `$` forwards the incoming authorization request query parameter with that name; any other value is sent as-is.
   * @type {{ [key: string]: string; }}
   * @memberof PatchExternalProviderRequest
   */
  authorization_parameters?: Record<string, string>;
  /**
   * The email domains routed to this provider through home realm discovery.
   * @type {string[]}
   * @memberof PatchExternalProviderRequest
   */
  home_realm_domains?: string[];
  /**
   * Determines whether the email received from the external provider is treated as verified.
   * @type {TrustIdentifierModes}
   * @memberof PatchExternalProviderRequest
   */
  trust_email?: TrustIdentifierModes;
  /**
   * Determines whether the phone number received from the external provider is treated as verified.
   * @type {TrustIdentifierModes}
   * @memberof PatchExternalProviderRequest
   */
  trust_phone?: TrustIdentifierModes;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof PatchExternalProviderRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Specifies whether the IdP claims should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof PatchExternalProviderRequest
   */
  sync_idp_claims_always?: boolean;
  /**
   * The priority of the external provider. Used to order the provider relative to others.
   * @type {number}
   * @memberof PatchExternalProviderRequest
   */
  priority?: number;
}
