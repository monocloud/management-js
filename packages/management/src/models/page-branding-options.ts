/**
 * Page Branding Options Response: Represents visual and layout branding settings applied to hosted pages.
 * @export
 * @interface PageBrandingOptions
 */
export interface PageBrandingOptions {
  /**
   * Specifies whether the MonoCloud watermark is displayed on hosted login pages.
   * @type {boolean}
   * @memberof PageBrandingOptions
   */
  show_watermark: boolean;
  /**
   * Defines the primary brand color used across hosted login pages (HEX format).
   * @type {string}
   * @memberof PageBrandingOptions
   */
  primary_color: string;
  /**
   * Defines the background color of hosted login pages (HEX format).
   * @type {string}
   * @memberof PageBrandingOptions
   */
  background_color: string;
}
