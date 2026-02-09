import { ProblemDetails } from '../models/problem-details';
import { MonoCloudRequestException } from './monocloud-request-exception';

/**
 * The MonoCloud Bad Request Exception
 * @export
 * @class MonoCloudBadRequestException
 */
export class MonoCloudBadRequestException extends MonoCloudRequestException {
  /**
   * Initializes the MonoCloudBadRequestException Class
   * @param response - The problem details returned from the server.
   */
  constructor(response: ProblemDetails);

  /**
   * Initializes the MonoCloudBadRequestException Class
   * @param message - The error message.
   */
  constructor(message: string);

  constructor(arg: ProblemDetails | string) {
    if (typeof arg === 'string') {
      super(arg);
    } else {
      super(arg);
    }
  }
}
