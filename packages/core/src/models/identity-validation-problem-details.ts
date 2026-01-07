import { IdentityError } from './identity-error';
import { ProblemDetails } from './problem-details';

export class IdentityValidationProblemDetails extends ProblemDetails {
  errors: IdentityError[];

  constructor(response: ProblemDetails) {
    super(response);
    this.errors = (response.errors as IdentityError[]).map(
      err => new IdentityError(err.code, err.description)
    );
  }
}
