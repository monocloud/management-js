/**
 * Patch Page Branding Options Request: Used to update the visual appearance and localization of hosted authentication pages.
 * @export
 * @interface PatchPageBrandingOptionsRequest
 */
export interface PatchPageBrandingOptionsRequest {
  /**
   * Specifies whether the MonoCloud watermark is displayed on hosted login pages.
   * @type {boolean}
   * @memberof PatchPageBrandingOptionsRequest
   */
  show_watermark?: boolean;
  /**
   * Defines the primary brand color used across hosted login pages (HEX format).
   * @type {string}
   * @memberof PatchPageBrandingOptionsRequest
   */
  primary_color?: string;
  /**
   * Defines the background color of hosted login pages (HEX format).
   * @type {string}
   * @memberof PatchPageBrandingOptionsRequest
   */
  background_color?: string;
}
