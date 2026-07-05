import { DynamicClientRegistrationModes } from './dynamic-client-registration-modes';

/**
 * Dynamic Client Registration Options Response: Represents the current dynamic client registration configuration for the tenant.
 * @export
 * @interface DynamicClientRegistrationOptions
 */
export interface DynamicClientRegistrationOptions {
  /**
   * The dynamic client registration mode for the tenant.
   * @type {DynamicClientRegistrationModes}
   * @memberof DynamicClientRegistrationOptions
   */
  mode: DynamicClientRegistrationModes;
  /**
   * The scope an initial access token must carry to register a client when the mode requires authorization.
   * @type {string}
   * @memberof DynamicClientRegistrationOptions
   */
  initial_access_token_scope: string;
  /**
   * The maximum number of dynamically registered clients allowed for the tenant.
   * @type {number}
   * @memberof DynamicClientRegistrationOptions
   */
  max_dynamic_clients: number;
  /**
   * The maximum number of redirect uris a registration may include.
   * @type {number}
   * @memberof DynamicClientRegistrationOptions
   */
  max_redirect_uris: number;
  /**
   * The maximum number of post logout redirect uris a registration may include.
   * @type {number}
   * @memberof DynamicClientRegistrationOptions
   */
  max_post_logout_redirect_uris: number;
}
