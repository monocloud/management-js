import { ProblemDetails } from '../models/problem-details';
import { MonoCloudRequestException } from './monocloud-request-exception';

/**
 * The MonoCloud Resource Exhausted Exception
 * @export
 * @class MonoCloudResourceExhaustedException
 */
export class MonoCloudResourceExhaustedException extends MonoCloudRequestException {
  /**
   * Initializes the MonoCloudResourceExhaustedException Class
   * @param response - The problem details returned from the server.
   */
  constructor(response: ProblemDetails);

  /**
   * Initializes the MonoCloudResourceExhaustedException Class
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
