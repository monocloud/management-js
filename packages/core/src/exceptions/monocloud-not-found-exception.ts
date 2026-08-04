import { ProblemDetails } from '../models/problem-details';
import { MonoCloudCodedException } from './monocloud-coded-exception';

/**
 * The MonoCloud Not Found Exception
 * @export
 * @class MonoCloudNotFoundException
 */
export class MonoCloudNotFoundException extends MonoCloudCodedException {
  /**
   * Initializes the MonoCloudNotFoundException Class
   * @param response - The problem details returned from the server.
   */
  constructor(response: ProblemDetails);

  /**
   * Initializes the MonoCloudNotFoundException Class
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
