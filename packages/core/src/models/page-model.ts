/**
 * The Page Model
 * @export
 * @interface PageModel
 */
export interface PageModel {
  /**
   * Page Size
   * @type {number}
   * @memberof PageModel
   */
  page_size: number;

  /**
   * Current Page
   * @type {number}
   * @memberof PageModel
   */
  current_page: number;

  /**
   * Total Number of Items
   * @type {number}
   * @memberof PageModel
   */
  total_count: number;

  /**
   * Specfies whether there is a previous page
   * @type {boolean}
   * @memberof PageModel
   */
  has_previous: boolean;

  /**
   * Specfies whether there is a next page
   * @type {boolean}
   * @memberof PageModel
   */
  has_next: boolean;
}
