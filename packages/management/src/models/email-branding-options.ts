import { CustomEmailBrandingOptions } from './custom-email-branding-options';

/**
 * Email Branding Options Response: Represents the email branding configuration applied to system-generated emails.
 * @export
 * @interface EmailBrandingOptions
 */
export interface EmailBrandingOptions {
  /**
   * Configuration for welcome emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  welcome: CustomEmailBrandingOptions;
  /**
   * Configuration for user blocked notification emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  user_blocked: CustomEmailBrandingOptions;
  /**
   * Configuration for sign-in code emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  sign_in_code: CustomEmailBrandingOptions;
  /**
   * Configuration for sign-in link emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  sign_in_link: CustomEmailBrandingOptions;
  /**
   * Configuration for sign-in code and link emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  sign_in_code_and_link: CustomEmailBrandingOptions;
  /**
   * Configuration for verification code emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  verification_code: CustomEmailBrandingOptions;
  /**
   * Configuration for verification link emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  verification_link: CustomEmailBrandingOptions;
  /**
   * Configuration for verification code and link emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  verification_code_and_link: CustomEmailBrandingOptions;
  /**
   * Configuration for password reset code emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  password_reset_code: CustomEmailBrandingOptions;
  /**
   * Configuration for password reset link emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  password_reset_link: CustomEmailBrandingOptions;
  /**
   * Configuration for password reset code and link emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  password_reset_code_and_link: CustomEmailBrandingOptions;
  /**
   * Configuration for password updated notification emails, including delivery enablement, subject, and template.
   * @type {CustomEmailBrandingOptions}
   * @memberof EmailBrandingOptions
   */
  password_updated: CustomEmailBrandingOptions;
}
