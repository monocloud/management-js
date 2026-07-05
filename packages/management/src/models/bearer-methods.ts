/**
 * The supported methods of sending a bearer access token to a protected resource (RFC 6750 / RFC 9728 `bearer_methods_supported`).
 * @export
 * @enum {string}
 */

export const BearerMethods = {
  /**
   * The access token is sent in the `Authorization` request header field.
   */
  Header: 'header',

  /**
   * The access token is sent in the HTML form-encoded request body.
   */
  Body: 'body',

  /**
   * The access token is sent as a URI query parameter.
   */
  Query: 'query',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type BearerMethods = (typeof BearerMethods)[keyof typeof BearerMethods];
