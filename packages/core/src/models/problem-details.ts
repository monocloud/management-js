/**
 * The Problem Details
 * @export
 * @class ProblemDetails
 */
export class ProblemDetails {
  /**
   * The type of error
   * @type {string}
   * @memberof ProblemDetails
   */
  type: string;

  /**
   * The title of the error
   * @type {string}
   * @memberof ProblemDetails
   */
  title: string;

  /**
   * The status code representing the error
   * @type {number}
   * @memberof ProblemDetails
   */
  status: number;

  /**
   * The error details
   * @type {string}
   * @memberof ProblemDetails
   */
  detail: string;

  /**
   * The instance
   * @type {string}
   * @memberof ProblemDetails
   */
  instance: string;

  /**
   * The machine-readable code identifying the error
   * @type {string}
   * @memberof ProblemDetails
   */
  error_code?: string;

  /**
   * The identifier of the request, for tracing and diagnostics
   * @type {string}
   * @memberof ProblemDetails
   */
  trace_id?: string;

  /**
   * Additional data about the error
   */

  [key: string]: any;

  constructor(response: ProblemDetails) {
    this.type = response.type;
    this.title = response.title;
    this.status = response.status;
    this.detail = response.detail;
    this.instance = response.instance;
    this.error_code = response.error_code;
    this.trace_id = response.trace_id;
    Object.keys(response)
      .filter(
        x =>
          x !== 'type' &&
          x !== 'title' &&
          x !== 'status' &&
          x !== 'instance' &&
          x !== 'error_code' &&
          x !== 'trace_id'
      )
      .forEach(key => {
        this[key] = response[key];
      });
  }
}
