import { ProblemDetails } from '../models/problem-details';
import { MonoCloudCodedException } from './monocloud-coded-exception';

/**
 * The MonoCloud Forbidden Exception
 * @export
 * @class MonoCloudForbiddenException
 */
export class MonoCloudForbiddenException extends MonoCloudCodedException {
  /**
   * Initializes the MonoCloudForbiddenException Class
   * @param response - The problem details returned from the server.
   */
  constructor(response: ProblemDetails);

  /**
   * Initializes the MonoCloudForbiddenException Class
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
