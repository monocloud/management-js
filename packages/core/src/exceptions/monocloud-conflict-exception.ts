import { ProblemDetails } from '../models/problem-details';
import { MonoCloudRequestException } from './monocloud-request-exception';

/**
 * The MonoCloud Conflict Exception
 * @export
 * @class MonoCloudConflictException
 */
export class MonoCloudConflictException extends MonoCloudRequestException {
  /**
   * Initializes the MonoCloudConflictException Class
   * @param response - The problem details returned from the server.
   */
  constructor(response: ProblemDetails);

  /**
   * Initializes the MonoCloudConflictException Class
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
