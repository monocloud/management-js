import { ProblemDetails } from './problem-details';

/**
 * The Key Validation Problem Details
 * @export
 * @class KeyValidationProblemDetails
 */
export class KeyValidationProblemDetails extends ProblemDetails {
  /**
   * A collection of errors
   * @type {Record<string, string[]>}
   * @memberof KeyValidationProblemDetails
   */
  errors: Record<string, string[]>;

  constructor(response: ProblemDetails) {
    super(response);
    this.errors = response.errors;
  }
}
