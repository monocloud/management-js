import { DynamicClientRegistrationModes } from './dynamic-client-registration-modes';

/**
 * Patch Dynamic Client Registration Options Request: Used to update the dynamic client registration configuration.
 * @export
 * @interface PatchDynamicClientRegistrationOptionsRequest
 */
export interface PatchDynamicClientRegistrationOptionsRequest {
  /**
   * The dynamic client registration mode for the tenant.
   * @type {DynamicClientRegistrationModes}
   * @memberof PatchDynamicClientRegistrationOptionsRequest
   */
  mode?: DynamicClientRegistrationModes;
  /**
   * The scope an initial access token must carry to register a client when the mode requires authorization.
   * @type {string}
   * @memberof PatchDynamicClientRegistrationOptionsRequest
   */
  initial_access_token_scope?: string;
  /**
   * The maximum number of dynamically registered clients allowed for the tenant.
   * @type {number}
   * @memberof PatchDynamicClientRegistrationOptionsRequest
   */
  max_dynamic_clients?: number;
  /**
   * The maximum number of redirect uris a registration may include.
   * @type {number}
   * @memberof PatchDynamicClientRegistrationOptionsRequest
   */
  max_redirect_uris?: number;
  /**
   * The maximum number of post logout redirect uris a registration may include.
   * @type {number}
   * @memberof PatchDynamicClientRegistrationOptionsRequest
   */
  max_post_logout_redirect_uris?: number;
}
