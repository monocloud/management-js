import { IdentityError } from '../models/identity-error';
import { IdentityValidationProblemDetails } from '../models/identity-validation-problem-details';
import { MonoCloudRequestException } from './monocloud-request-exception';

/**
 * The MonoCloud Identity Validation Exception
 * @export
 * @class MonoCloudIdentityValidationException
 */
export class MonoCloudIdentityValidationException extends MonoCloudRequestException {
  errors: IdentityError[];

  /**
   * Initializes the MonoCloudIdentityValidationException Class
   * @param response - The problem details returned from the server.
   */
  constructor(response: IdentityValidationProblemDetails) {
    super(
      response,
      `${response.title} : ${JSON.stringify(response.errors, undefined, 2)}`
    );
    this.errors = response.errors;
  }
}
