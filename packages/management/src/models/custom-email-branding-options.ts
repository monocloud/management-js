/**
 * Custom Email Branding Options Response: Represents branding configuration for a specific system-generated email message.
 * @export
 * @interface CustomEmailBrandingOptions
 */
export interface CustomEmailBrandingOptions {
  /**
   * Specifies whether the email notification is sent using MonoCloud-managed delivery.
   * @type {boolean}
   * @memberof CustomEmailBrandingOptions
   */
  send_notifications: boolean;
  /**
   * Specifies the email subject line, which may include Liquid placeholders; when empty, the default subject template is used.
   * @type {string}
   * @memberof CustomEmailBrandingOptions
   */
  subject?: string | null;
}
