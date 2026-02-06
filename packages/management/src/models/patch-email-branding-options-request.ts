import { PatchCustomEmailBrandingOptionsRequest } from './patch-custom-email-branding-options-request';

/**
 * Patch Email Branding Options Request: Used to update email branding configuration for system-generated emails.
 * @export
 * @interface PatchEmailBrandingOptionsRequest
 */
export interface PatchEmailBrandingOptionsRequest {
  /**
   * Configuration for welcome emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  welcome?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for user blocked notification emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  user_blocked?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for sign-in code emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  sign_in_code?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for sign-in link emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  sign_in_link?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for sign-in code and link emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  sign_in_code_and_link?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for verification code emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  verification_code?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for verification link emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  verification_link?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for verification code and link emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  verification_code_and_link?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for password reset code emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  password_reset_code?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for password reset link emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  password_reset_link?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for password reset code and link emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  password_reset_code_and_link?: PatchCustomEmailBrandingOptionsRequest;
  /**
   * Configuration for password updated notification emails, including delivery enablement, subject, and template.
   * @type {PatchCustomEmailBrandingOptionsRequest}
   * @memberof PatchEmailBrandingOptionsRequest
   */
  password_updated?: PatchCustomEmailBrandingOptionsRequest;
}
