import { KeyValidationProblemDetails } from '../models/key-validation-problem-details';
import { MonoCloudRequestException } from './monocloud-request-exception';

/**
 * The MonoCloud Key Validation Exception
 * @export
 * @class MonoCloudKeyValidationException
 */
export class MonoCloudKeyValidationException extends MonoCloudRequestException {
  errors: Record<string, string[]>;

  /**
   * Initializes the MonoCloudKeyValidationException Class
   * @param response - The problem details returned from the server.
   */
  constructor(response: KeyValidationProblemDetails) {
    super(
      response,
      `${response.title} : ${JSON.stringify(response.errors, undefined, 2)}`
    );
    this.errors = response.errors;
  }
}
