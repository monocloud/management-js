import { PatchCustomSmsBrandingOptionsRequest } from './patch-custom-sms-branding-options-request';

/**
 * Patch SMS Branding Options Request: Used to update SMS templates for system-generated messages.
 * @export
 * @interface PatchSmsBrandingOptionsRequest
 */
export interface PatchSmsBrandingOptionsRequest {
  /**
   * Configuration for sign-in SMS messages, including delivery enablement and message template.
   * @type {PatchCustomSmsBrandingOptionsRequest}
   * @memberof PatchSmsBrandingOptionsRequest
   */
  sign_in?: PatchCustomSmsBrandingOptionsRequest;
  /**
   * Configuration for verification SMS messages, including delivery enablement and message template.
   * @type {PatchCustomSmsBrandingOptionsRequest}
   * @memberof PatchSmsBrandingOptionsRequest
   */
  verification?: PatchCustomSmsBrandingOptionsRequest;
  /**
   * Configuration for password reset SMS messages, including delivery enablement and message template.
   * @type {PatchCustomSmsBrandingOptionsRequest}
   * @memberof PatchSmsBrandingOptionsRequest
   */
  password_reset?: PatchCustomSmsBrandingOptionsRequest;
}
