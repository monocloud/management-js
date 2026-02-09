import { ProblemDetails } from '../models/problem-details';
import { MonoCloudRequestException } from './monocloud-request-exception';

/**
 * The MonoCloud Unauthorized Exception
 * @export
 * @class MonoCloudUnauthorizedException
 */
export class MonoCloudUnauthorizedException extends MonoCloudRequestException {
  /**
   * Initializes the MonoCloudUnauthorizedException Class
   * @param response - The problem details returned from the server.
   */
  constructor(response: ProblemDetails);

  /**
   * Initializes the MonoCloudUnauthorizedException Class
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
