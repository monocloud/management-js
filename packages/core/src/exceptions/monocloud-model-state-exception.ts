import { ProblemDetails } from '../models/problem-details';
import { MonoCloudRequestException } from './monocloud-request-exception';

/**
 * The MonoCloud Model State Exception
 * @export
 * @class MonoCloudModelStateException
 */
export class MonoCloudModelStateException extends MonoCloudRequestException {
  /**
   * Initializes the MonoCloudModelStateException Class
   * @param response - The problem details returned from the server.
   */
  constructor(response: ProblemDetails);

  /**
   * Initializes the MonoCloudModelStateException Class
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
