/**
 * The pagination header.
 * @export
 * @interface PaginationHeader
 */
export interface PaginationHeader {
  /**
   * Number of items returned per page.
   * @type {number}
   * @memberof PaginationHeader
   */
  page_size: number;
  /**
   * The current page number.
   * @type {number}
   * @memberof PaginationHeader
   */
  current_page: number;
  /**
   * Total number of items available.
   * @type {number}
   * @memberof PaginationHeader
   */
  total_count: number;
  /**
   * Indicates whether a previous page exists.
   * @type {boolean}
   * @memberof PaginationHeader
   */
  has_previous: boolean;
  /**
   * Indicates whether a next page exists.
   * @type {boolean}
   * @memberof PaginationHeader
   */
  has_next: boolean;
}
