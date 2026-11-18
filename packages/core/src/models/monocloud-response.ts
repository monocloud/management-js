export class MonoCloudResponse<TResult = unknown> {
  /** HTTP status code returned by the API. */
  status: number;

  /** Response headers. Set-Cookie values are a string array; other headers are strings. */
  headers: Record<string, any>;

  /** Parsed response body, or null when the response has no content. */
  result: TResult;

  constructor(status: number, headers: Record<string, any>, result: TResult) {
    this.status = status;
    this.headers = headers;
    this.result = result;
  }
}
