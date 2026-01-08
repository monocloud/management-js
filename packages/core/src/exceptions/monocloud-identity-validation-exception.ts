import { IdentityError } from '../models/identity-error';
import { IdentityValidationProblemDetails } from '../models/identity-validation-problem-details';
import { MonoCloudRequestException } from './monocloud-request-exception';

/// <summary>
/// The MonoCloud Identity Validation Exception
/// </summary>
export class MonoCloudIdentityValidationException extends MonoCloudRequestException {
  errors: IdentityError[];

  /// <summary>
  /// Initializes the MonoCloudIdentityValidationException Class
  /// </summary>
  /// <param name="response">The problem details returned from the server.</param>
  constructor(response: IdentityValidationProblemDetails) {
    super(
      response,
      `${response.title} : ${JSON.stringify(response.errors, undefined, 2)}`
    );
    this.errors = response.errors;
  }
}
