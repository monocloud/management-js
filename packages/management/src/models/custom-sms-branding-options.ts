/**
 * Custom SMS Branding Options Response: Represents branding configuration for a specific system-generated SMS.
 * @export
 * @interface CustomSmsBrandingOptions
 */
export interface CustomSmsBrandingOptions {
  /**
   * Custom Liquid template used to render the SMS message content with runtime variables; when empty, the default template is used.
   * @type {string}
   * @memberof CustomSmsBrandingOptions
   */
  template?: string | null;
}
