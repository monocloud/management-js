/**
 * Identity Error: Represents a validation or processing error returned by the identity system.
 * @export
 * @class IdentityError
 */
export class IdentityError {
  /**
   * Machine-readable error code.
   * @type {string}
   * @memberof IdentityError
   */
  code: string;

  /**
   * Human-readable description of the error.
   * @type {string}
   * @memberof IdentityError
   */
  description: string;

  constructor(code: string, description: string) {
    this.code = code;
    this.description = description;
  }
}
