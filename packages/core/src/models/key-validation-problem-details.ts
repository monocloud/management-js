import { ProblemDetails } from './problem-details';

export class KeyValidationProblemDetails extends ProblemDetails {
  /// <summary>
  /// A collection of errors
  /// </summary>
  errors: Record<string, string[]>;

  constructor(response: ProblemDetails) {
    super(response);
    this.errors = response.errors;
  }
}
