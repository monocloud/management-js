/**
 * Patch Custom SMS Branding Options Request: Used to update a custom SMS template.
 * @export
 * @interface PatchCustomSmsBrandingOptionsRequest
 */
export interface PatchCustomSmsBrandingOptionsRequest {
  /**
   * Custom Liquid template used to render the SMS message content with runtime variables; when empty, the default template is used.
   * @type {string}
   * @memberof PatchCustomSmsBrandingOptionsRequest
   */
  template?: string | null;
}
