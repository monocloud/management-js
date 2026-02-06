import { CustomSmsBrandingOptions } from './custom-sms-branding-options';

/**
 * SMS Branding Options Response: Represents the SMS branding configuration applied to system-generated messages.
 * @export
 * @interface SmsBrandingOptions
 */
export interface SmsBrandingOptions {
  /**
   * Configuration for sign-in SMS messages, including delivery enablement and message template.
   * @type {CustomSmsBrandingOptions}
   * @memberof SmsBrandingOptions
   */
  sign_in: CustomSmsBrandingOptions;
  /**
   * Configuration for verification SMS messages, including delivery enablement and message template.
   * @type {CustomSmsBrandingOptions}
   * @memberof SmsBrandingOptions
   */
  verification: CustomSmsBrandingOptions;
  /**
   * Configuration for password reset SMS messages, including delivery enablement and message template.
   * @type {CustomSmsBrandingOptions}
   * @memberof SmsBrandingOptions
   */
  password_reset: CustomSmsBrandingOptions;
}
