/**
 * Patch Custom Email Branding Options Request: Used to update the content and delivery behavior of a custom email.
 * @export
 * @interface PatchCustomEmailBrandingOptionsRequest
 */
export interface PatchCustomEmailBrandingOptionsRequest {
  /**
   * Specifies whether the email notification is sent using MonoCloud-managed delivery.
   * @type {boolean}
   * @memberof PatchCustomEmailBrandingOptionsRequest
   */
  send_notifications?: boolean;
  /**
   * Specifies the email subject line, which may include Liquid placeholders; when empty, the default subject template is used.
   * @type {string}
   * @memberof PatchCustomEmailBrandingOptionsRequest
   */
  subject?: string | null;
}
