import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/management-core';
import {
  AddEmailRequest,
  AddPhoneRequest,
  AuthorizationCode,
  CreateUserRequest,
  DisableUserRequest,
  ExternalAuthenticatorDisconnectRequest,
  ReferenceToken,
  RefreshToken,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SetPasswordRequest,
  UnblockIpRequest,
  UpdateClaimsRequest,
  UpdatePrivateDataRequest,
  UpdatePublicDataRequest,
  UpdateUsernameRequest,
  User,
  UserClientGrants,
  UserConsent,
  UserGroup,
  UserIpAccessDetails,
  UserPrivateData,
  UserPublicData,
  UserSession,
  UserSummary,
  VerifyEmailRequest,
  VerifyEmailResponse,
} from '../models';

export class UsersClient extends MonoCloudClientBase {
  /**
   * @summary List users
   * @description Retrieves a paginated list of users. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of users to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `failure_count`, `last_sign_in_attempt`, `sign_in_attempts_count`, `last_sign_in_success`, `sign_in_success_count`, `last_activity`, `block_until`, `creation_time`, `last_updated`.
   * @returns UserSummary[] - The users were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getAllUsers(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserSummary[]>> {
    const url = `/users`;

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserSummary[]>(request);
  }

  /**
   * @summary Create a user
   * @description Creates a new user using identifiers such as email, phone number, or username, with an optional password or imported password hash. This endpoint also supports migration scenarios by allowing administrators to preserve verification states and bypass password policies or identifier restrictions when required.
   * @note Configured sign-up policies are enforced by default; however, this allows authorized requests to override them when permitted.
   * @param {CreateUserRequest} createUserRequest The request payload used to create a user.
   * @returns User - The user was created successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public createUser(
    createUserRequest: CreateUserRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createUserRequest;

    return this.processRequest<User>(request);
  }

  /**
   * @summary Retrieve a user
   * @description Retrieves detailed information for the specified user.
   * @param {string} userId The unique identifier of the user.
   * @returns User - The user was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public findUserById(userId: string): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Delete a user
   * @description Permanently deletes the specified user.
   * @warning This operation is irreversible.
   * @param {string} userId The unique identifier of the user.
   * @returns The user was deleted successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public deleteUser(userId: string): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Enable a user
   * @description Re-enables a disabled user, restoring their ability to sign-in and access connected applications.
   * @param {string} userId The unique identifier of the user.
   * @returns User - The user was enabled successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public enableUser(userId: string): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/enable`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Disable a user
   * @description Marks the user account as disabled, preventing sign-in and access to connected applications. Optionally, active sessions can be revoked and existing opaque tokens invalidated, signing the user out immediately across all devices.
   * @param {string} userId The unique identifier of the user.
   * @param {DisableUserRequest} disableUserRequest The request payload used to disable a user.
   * @returns User - The user was disabled successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public disableUser(
    userId: string,
    disableUserRequest: DisableUserRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/disable`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = disableUserRequest;

    return this.processRequest<User>(request);
  }

  /**
   * @summary Reset user lockout
   * @description Resets the lockout triggered by excessive failed sign-in attempts, allowing the user to authenticate again.
   * @param {string} userId The unique identifier of the user.
   * @returns User - The user lockout was reset successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public unblockUser(userId: string): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/unblock`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Add or update username
   * @description Assigns or updates the username for the user, enabling username-based authentication when applicable.
   * @param {string} userId The unique identifier of the user.
   * @param {UpdateUsernameRequest} updateUsernameRequest The request payload used to add or update the username.
   * @returns User - The username was successfully assigned
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public updateUsername(
    userId: string,
    updateUsernameRequest: UpdateUsernameRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/username`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'PUT', url };

    request.body = updateUsernameRequest;

    return this.processRequest<User>(request);
  }

  /**
   * @summary Remove a username
   * @description Removes the username from the user\'s account. Once removed, the user will no longer be able to authenticate using a username.
   * @param {string} userId The unique identifier of the user.
   * @returns User - The user\&#39;s username was removed successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public removeUsername(userId: string): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/username`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Add an email address
   * @description Adds a new email address to the user profile. Optional parameters allow specifying whether the email should be marked as verified.
   * @param {string} userId The unique identifier of the user.
   * @param {AddEmailRequest} addEmailRequest The request payload used to add an email address.
   * @returns User - The email was added to the user successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public addEmail(
    userId: string,
    addEmailRequest: AddEmailRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/emails`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = addEmailRequest;

    return this.processRequest<User>(request);
  }

  /**
   * @summary Remove an email address
   * @description Removes the specified email address from the user’s account. Once removed, it is no longer available for authentication, verification or communication.
   * @note Removing an email may affect flows that depend on it, such as password recovery or notification delivery.
   * @param {string} userId The unique identifier of the user.
   * @param {string} identifierId The unique identifier of the email address.
   * @returns User - The user\&#39;s email was removed successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public removeEmail(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/emails/{identifier_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Set an email as primary
   * @description Marks the specified email address as the user\'s primary email, making it the default for authentication, recovery, and communication.
   * @param {string} userId The unique identifier of the user.
   * @param {string} identifierId The unique identifier of the email address.
   * @returns User - The user\&#39;s email was set as primary successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public setPrimaryEmail(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/emails/{identifier_id}/primary`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Mark an email as verified
   * @description Marks the specified email address as verified, allowing its use for authentication, sensitive actions, and communication.
   * @param {string} userId The unique identifier of the user.
   * @param {string} identifierId The unique identifier of the email address.
   * @returns User - The user\&#39;s email was marked as verified successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public setEmailVerified(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/emails/{identifier_id}/verify`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Mark an email as unverified
   * @description Marks the specified email address as unverified, preventing its use for authentication or any other security-sensitive actions until it is verified again.
   * @param {string} userId The unique identifier of the user.
   * @param {string} identifierId The unique identifier of the email address.
   * @returns User - The user\&#39;s email was marked as unverified successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public setEmailUnverified(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/emails/{identifier_id}/unverify`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Initiate email verification
   * @description Generates a signed, time-bound verification link for the specified email address and sends it to the user. Once verified, the email becomes eligible for authentication and secure communication.
   * @param {string} userId The unique identifier of the user.
   * @param {string} identifierId The unique identifier of the email address.
   * @param {VerifyEmailRequest} verifyEmailRequest The request payload used to initiate email verification.
   * @returns VerifyEmailResponse - The email verification link was generated successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public verifyEmail(
    userId: string,
    identifierId: string,
    verifyEmailRequest: VerifyEmailRequest
  ): Promise<MonoCloudResponse<VerifyEmailResponse>> {
    const url = `/users/{user_id}/emails/{identifier_id}/verify/link`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = verifyEmailRequest;

    return this.processRequest<VerifyEmailResponse>(request);
  }

  /**
   * @summary Add a phone number
   * @description Adds a new phone number to the user profile. Optional parameters allow specifying whether the number should be marked as verified.
   * @param {string} userId The unique identifier of the user.
   * @param {AddPhoneRequest} addPhoneRequest The request payload used to add a phone number.
   * @returns User - The phone number was added to the user successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public addPhone(
    userId: string,
    addPhoneRequest: AddPhoneRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/phones`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = addPhoneRequest;

    return this.processRequest<User>(request);
  }

  /**
   * @summary Remove a phone number
   * @description Removes the specified phone number from the user’s account. Once removed, it is no longer available for authentication, verification or communication.
   * @note Removing a phone number may affect flows that depend on it, such as password recovery or notification delivery.
   * @param {string} userId The unique identifier of the user.
   * @param {string} identifierId The unique identifier of the phone number.
   * @returns User - The user\&#39;s phone number was removed successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public removePhone(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/phones/{identifier_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Set a phone as primary
   * @description Marks the specified phone number as the user\'s primary number, making it the default for authentication and verification.
   * @param {string} userId The unique identifier of the user.
   * @param {string} identifierId The unique identifier of the phone number.
   * @returns User - The user\&#39;s phone number was set as primary successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public setPrimaryPhone(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/phones/{identifier_id}/primary`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Mark a phone as verified
   * @description Marks the specified phone number as verified, allowing its use for authentication and other security-sensitive actions.
   * @param {string} userId The unique identifier of the user.
   * @param {string} identifierId The unique identifier of the phone number.
   * @returns User - The user\&#39;s phone number was marked as verified successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public setPhoneVerified(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/phones/{identifier_id}/verify`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Mark a phone as unverified
   * @description Marks the specified phone number as unverified, preventing its use for authentication or any other security-sensitive actions until it is verified again.
   * @param {string} userId The unique identifier of the user.
   * @param {string} identifierId The unique identifier of the phone number.
   * @returns User - The user\&#39;s phone number was marked as unverified successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public setPhoneUnverified(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/phones/{identifier_id}/unverify`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Remove a passkey
   * @description Removes a passkey previously registered by the user. Once removed, the user will no longer be able to authenticate using that passkey.
   * @param {string} userId The unique identifier of the user.
   * @param {string} passkeyId The unique identifier of the passkey.
   * @returns The user\&#39;s passkey was removed successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public removePasskey(
    userId: string,
    passkeyId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/passkeys/{passkey_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'passkey_id'}}`, encodeURIComponent(String(passkeyId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Set a password
   * @description Sets or replaces the user\'s password. Accepts either plaintext input or a pre-computed hash generated with a supported algorithm.
   * @param {string} userId The unique identifier of the user.
   * @param {SetPasswordRequest} setPasswordRequest The request payload used to set the user\'s password.
   * @returns User - The password was set successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public setPassword(
    userId: string,
    setPasswordRequest: SetPasswordRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/password`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'PUT', url };

    request.body = setPasswordRequest;

    return this.processRequest<User>(request);
  }

  /**
   * @summary Remove the user\'s password
   * @description Removes the password from the specified user’s account. Once removed, the user will no longer be able to authenticate using a password until a new one is set.
   * @param {string} userId The unique identifier of the user.
   * @returns The user\&#39;s password was removed successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public removePassword(userId: string): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/password`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Require password reset
   * @description Enforces a requirement for the user to reset their password at their next password-based sign-in.
   * @param {string} userId The unique identifier of the user.
   * @returns User - The user was successfully marked as requiring a password reset
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public setPasswordResetRequired(
    userId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/password/force_reset`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Clear a password reset requirement
   * @description Clears the enforced password reset requirement for the user\'s next password-based authentication attempt.
   * @param {string} userId The unique identifier of the user.
   * @returns User - The password reset requirement was cleared successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public removePasswordResetRequired(
    userId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/password/force_reset`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<User>(request);
  }

  /**
   * @summary Initiate password reset
   * @description Generates a secure, time-bound password reset link for the specified user. The link may be delivered directly to the user or returned for custom distribution.
   * @param {string} userId The unique identifier of the user.
   * @param {ResetPasswordRequest} resetPasswordRequest The request payload used to generate a password reset link.
   * @returns ResetPasswordResponse - The password reset link was generated successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public resetPassword(
    userId: string,
    resetPasswordRequest: ResetPasswordRequest
  ): Promise<MonoCloudResponse<ResetPasswordResponse>> {
    const url = `/users/{user_id}/password/reset`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = resetPasswordRequest;

    return this.processRequest<ResetPasswordResponse>(request);
  }

  /**
   * @summary Update user claims
   * @description Applies a partial update to the claim values associated with the specified user. Only the claims provided in the request are modified. Claims can be removed by sending a `null` value for the corresponding key.
   * @param {string} userId The unique identifier of the user.
   * @param {UpdateClaimsRequest} updateClaimsRequest The request payload used to update user claims.
   * @returns User - The user claims were updated successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public patchClaims(
    userId: string,
    updateClaimsRequest: UpdateClaimsRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/claims`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = updateClaimsRequest;

    return this.processRequest<User>(request);
  }

  /**
   * @summary Retrieve user private data
   * @description Retrieves the private data associated with the specified user.
   * @note Private data contains sensitive or internal attributes intended only for trusted backend services. It should not be exposed directly to client applications or included in user-visible contexts.
   * @param {string} userId The unique identifier of the user.
   * @returns UserPrivateData - The user\&#39;s private data was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getPrivateData(
    userId: string
  ): Promise<MonoCloudResponse<UserPrivateData>> {
    const url = `/users/{user_id}/private_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<UserPrivateData>(request);
  }

  /**
   * @summary Update user private data
   * @description Applies a partial update to the private data associated with the specified user. Only fields included in the request are updated. Private data fields can be removed by sending a `null` value for the corresponding key.
   * @warning Intended for sensitive or internal-use attributes. Avoid exposing these values to client applications. If surfaced via custom claims, include them only in tokens issued to trusted backend services to prevent accidental disclosure.
   * @param {string} userId The unique identifier of the user.
   * @param {UpdatePrivateDataRequest} updatePrivateDataRequest The request payload used to update a user\'s private data.
   * @returns UserPrivateData - The user\&#39;s private data was updated successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public patchPrivateData(
    userId: string,
    updatePrivateDataRequest: UpdatePrivateDataRequest
  ): Promise<MonoCloudResponse<UserPrivateData>> {
    const url = `/users/{user_id}/private_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = updatePrivateDataRequest;

    return this.processRequest<UserPrivateData>(request);
  }

  /**
   * @summary Retrieve user public data
   * @description Retrieves the public data associated with the specified user.
   * @note Public data contains non-sensitive attributes that can be safely exposed to client applications and may be used to personalize user experiences.
   * @param {string} userId The unique identifier of the user.
   * @returns UserPublicData - The user\&#39;s public data was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getPublicData(
    userId: string
  ): Promise<MonoCloudResponse<UserPublicData>> {
    const url = `/users/{user_id}/public_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<UserPublicData>(request);
  }

  /**
   * @summary Update user public data
   * @description Applies a partial update to the public data associated with the specified user. Only fields included in the request are updated. Public data fields can be removed by sending a `null` value for the corresponding key.
   * @warning Intended for non-sensitive attributes that may be safely exposed to client applications. When surfaced via custom claims, these values may appear in tokens issued to frontend or user-facing applications. Store only data that remains safe even if accessed through browser storage, logs, or debugging tools.
   * @param {string} userId The unique identifier of the user.
   * @param {UpdatePublicDataRequest} updatePublicDataRequest The request payload used to update a user\'s public data.
   * @returns UserPublicData - The user\&#39;s public data was updated successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public patchPublicData(
    userId: string,
    updatePublicDataRequest: UpdatePublicDataRequest
  ): Promise<MonoCloudResponse<UserPublicData>> {
    const url = `/users/{user_id}/public_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = updatePublicDataRequest;

    return this.processRequest<UserPublicData>(request);
  }

  /**
   * @summary List blocked IP addresses
   * @description Retrieves a paginated list of IP addresses currently blocked for the specified user. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {string} userId The unique identifier of the user.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of blocked IPs to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `block_until`, `last_sign_in_attempt`, `last_sign_in_success`.
   * @returns UserIpAccessDetails[] - The user’s blocked IP addresses were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getAllBlockedIps(
    userId: string,
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserIpAccessDetails[]>> {
    const url = `/users/{user_id}/blocked_ips`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserIpAccessDetails[]>(request);
  }

  /**
   * @summary Reset IP lockout
   * @description Removes the lockout applied to the specified IP due to excessive failed authentication attempts, allowing sign-in attempts from that IP again. Providing the value `all` resets lockouts for every IP associated with the user.
   * @param {string} userId The unique identifier of the user whose IP address should be unblocked.
   * @param {UnblockIpRequest} unblockIpRequest The request payload used to unblock a previously blocked IP address.
   * @returns User - The IP lockout was reset successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public unblockIp(
    userId: string,
    unblockIpRequest: UnblockIpRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/blocked_ips/unblock`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = unblockIpRequest;

    return this.processRequest<User>(request);
  }

  /**
   * @summary List user sessions
   * @description Retrieves a paginated list of all active sessions for the specified user. Optional query parameters allow searching, filtering, and sorting the results.
   * @note Access to user session management endpoints requires an active Pro plan subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of user sessions to return per page.
   * @param {string} [clientId] Filters results to user sessions associated with the specified client.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `session_id`, `initiated_at`, `expires_at`, `last_updated`.
   * @returns UserSession[] - The user\&#39;s sessions were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getAllUserSessions(
    userId: string,
    page?: number,
    size?: number,
    clientId?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserSession[]>> {
    const url = `/users/{user_id}/sessions`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (clientId !== undefined && clientId !== null) {
      request.queryParams.client_id = String(clientId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserSession[]>(request);
  }

  /**
   * @summary Retrieve a user session
   * @description Retrieves detailed information about a specific session for the specified user.
   * @note Access to user session management endpoints requires an active Pro plan subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {string} sessionId The unique identifier of the user session.
   * @returns UserSession - The user session was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public findUserSession(
    userId: string,
    sessionId: string
  ): Promise<MonoCloudResponse<UserSession>> {
    const url = `/users/{user_id}/sessions/{session_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'session_id'}}`, encodeURIComponent(String(sessionId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<UserSession>(request);
  }

  /**
   * @summary Revoke a session
   * @description Revokes the specified user session, immediately terminating it and preventing further sign-in activity under that session.
   * @note Access to user session management endpoints requires an active Pro plan subscription. Existing tokens remain active unless the application enforces token-to-session binding.
   * @param {string} userId The unique identifier of the user.
   * @param {string} sessionId The unique identifier of the user session.
   * @returns The user\&#39;s session was revoked successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public revokeUserSession(
    userId: string,
    sessionId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/sessions/{session_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'session_id'}}`, encodeURIComponent(String(sessionId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Disconnect an external authenticator
   * @description Removes a linked external authentication provider (such as Google, Microsoft, GitHub, etc.) from the user’s account. After disconnection, the user will no longer be able to authenticate using that provider.
   * @param {string} userId The unique identifier of the user.
   * @param {ExternalAuthenticatorDisconnectRequest} externalAuthenticatorDisconnectRequest The request payload used to disconnect an external authenticator from a user\'s account.
   * @returns User - The external authenticator was disconnected successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public externalAuthenticatorDisconnect(
    userId: string,
    externalAuthenticatorDisconnectRequest: ExternalAuthenticatorDisconnectRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/external_authenticator/disconnect`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = externalAuthenticatorDisconnectRequest;

    return this.processRequest<User>(request);
  }

  /**
   * @summary List user\'s groups
   * @description Retrieves a paginated list of user groups that the user is assigned to. Optional query parameters allow sorting of the results.
   * @param {string} userId The unique identifier of the user.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of groups to return per page.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `creation_time`.
   * @returns UserGroup[] - The user\&#39;s group associations were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getAllUserGroups(
    userId: string,
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserGroup[]>> {
    const url = `/users/{user_id}/groups`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserGroup[]>(request);
  }

  /**
   * @summary Retrieve a user group
   * @description Retrieves information about the specified group and the user’s membership in it.
   * @param {string} userId The unique identifier of the user.
   * @param {string} groupId The unique identifier of the group.
   * @returns UserGroup - The user\&#39;s group association was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public findUserGroup(
    userId: string,
    groupId: string
  ): Promise<MonoCloudResponse<UserGroup>> {
    const url = `/users/{user_id}/groups/{group_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<UserGroup>(request);
  }

  /**
   * @summary Assign a user to a group
   * @description Adds the specified user to the group, establishing membership and enabling access configurations assigned to that group.
   * @param {string} userId The unique identifier of the user.
   * @param {string} groupId The unique identifier of the group.
   * @returns UserGroup - The user was assigned to the group successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public assignUserToGroup(
    userId: string,
    groupId: string
  ): Promise<MonoCloudResponse<UserGroup>> {
    const url = `/users/{user_id}/groups/{group_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<UserGroup>(request);
  }

  /**
   * @summary Remove a user from a group
   * @description Removes the specified user from the group. After removal, the user will no longer receive any access, permissions, or roles previously granted through that group.
   * @param {string} userId The unique identifier of the user.
   * @param {string} groupId The unique identifier of the group.
   * @returns The user was removed from the group successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public removeUserFromGroup(
    userId: string,
    groupId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/groups/{group_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List users in group
   * @description Retrieves a paginated list of users assigned to the specified group. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {string} groupId The unique identifier of the group.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of users to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `failure_count`, `last_sign_in_attempt`, `sign_in_attempts_count`, `last_sign_in_success`, `sign_in_success_count`, `last_activity`, `block_until`, `creation_time`, `last_updated`.
   * @returns UserSummary[] - The users in the group were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getAllGroupAssignedUsers(
    groupId: string,
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserSummary[]>> {
    const url = `/users/groups/{group_id}/assigned`.replace(
      `{${'group_id'}}`,
      encodeURIComponent(String(groupId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserSummary[]>(request);
  }

  /**
   * @summary List client grants
   * @description Retrieves a paginated list of client-specific grants for the specified user, including consent status and counts of issued refresh tokens, reference tokens, and authorization codes.
   * @note Access to grant and token information endpoints requires an active Pro plan subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of grants to return per page.
   * @returns UserClientGrants[] - The user\&#39;s client grants were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getAllUserClientGrants(
    userId: string,
    page?: number,
    size?: number
  ): Promise<MonoCloudPageResponse<UserClientGrants[]>> {
    const url = `/users/{user_id}/grants/clients`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    return this.processPaginatedRequest<UserClientGrants[]>(request);
  }

  /**
   * @summary List user consents
   * @description Retrieves a paginated list of consents granted by the specified user. Each consent includes the application\'s approved scopes and associated metadata. Optional query parameters allow searching, filtering, and sorting the results.
   * @note Access to grant and token management endpoints requires an active Secure+ subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of consent grants to return per page.
   * @param {string} [clientId] Filters results to consent grants issued to the specified client.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `creation_time`.
   * @returns UserConsent[] - The user\&#39;s consent grants were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getAllUserConsents(
    userId: string,
    page?: number,
    size?: number,
    clientId?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserConsent[]>> {
    const url = `/users/{user_id}/grants/consents`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (clientId !== undefined && clientId !== null) {
      request.queryParams.client_id = String(clientId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserConsent[]>(request);
  }

  /**
   * @summary List reference tokens
   * @description Retrieves a paginated list of reference tokens issued for the specified user. Reference tokens are opaque access tokens that require introspection for validation. Optional query parameters allow searching, filtering, and sorting the results.
   * @note Access to grant and token management endpoints requires an active Secure+ subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of grants to return per page.
   * @param {string} [clientId] Filters results to grants issued to the specified client.
   * @param {string} [sessionId] Filters results to grants issued within the specified session.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `creation_time`.
   * @returns ReferenceToken[] - The user\&#39;s reference tokens were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getAllReferenceTokens(
    userId: string,
    page?: number,
    size?: number,
    clientId?: string,
    sessionId?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<ReferenceToken[]>> {
    const url = `/users/{user_id}/grants/reference_tokens`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (clientId !== undefined && clientId !== null) {
      request.queryParams.client_id = String(clientId);
    }

    if (sessionId !== undefined && sessionId !== null) {
      request.queryParams.session_id = String(sessionId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<ReferenceToken[]>(request);
  }

  /**
   * @summary List refresh tokens
   * @description Retrieves a paginated list of refresh tokens issued for the specified user. Optional query parameters allow searching, filtering, and sorting the results.
   * @note Access to grant and token management endpoints requires an active Secure+ subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of grants to return per page.
   * @param {string} [clientId] Filters results to grants issued to the specified client.
   * @param {string} [sessionId] Filters results to grants issued within the specified session.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `creation_time`.
   * @returns RefreshToken[] - The user\&#39;s refresh tokens were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getAllRefreshTokens(
    userId: string,
    page?: number,
    size?: number,
    clientId?: string,
    sessionId?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<RefreshToken[]>> {
    const url = `/users/{user_id}/grants/refresh_tokens`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (clientId !== undefined && clientId !== null) {
      request.queryParams.client_id = String(clientId);
    }

    if (sessionId !== undefined && sessionId !== null) {
      request.queryParams.session_id = String(sessionId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<RefreshToken[]>(request);
  }

  /**
   * @summary List authorization codes
   * @description Retrieves a paginated list of authorization codes issued for the specified user. Authorization codes are ephemeral credentials used in OAuth 2.0 authorization flows before token exchange. Optional query parameters allow searching, filtering, and sorting the results.
   * @note Access to grant and token management endpoints requires an active Secure+ subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of grants to return per page.
   * @param {string} [clientId] Filters results to grants issued to the specified client.
   * @param {string} [sessionId] Filters results to grants issued within the specified session.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `creation_time`.
   * @returns AuthorizationCode[] - The user\&#39;s authorization codes were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public getAllAuthorizationCodes(
    userId: string,
    page?: number,
    size?: number,
    clientId?: string,
    sessionId?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<AuthorizationCode[]>> {
    const url = `/users/{user_id}/grants/codes`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (clientId !== undefined && clientId !== null) {
      request.queryParams.client_id = String(clientId);
    }

    if (sessionId !== undefined && sessionId !== null) {
      request.queryParams.session_id = String(sessionId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<AuthorizationCode[]>(request);
  }

  /**
   * @summary Revoke client grants
   * @description Revokes all grants issued to the user for the specified application, invalidating existing authorizations.
   * @note Access to grant and token management endpoints requires an active Secure+ subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {string} clientId The unique identifier of the client.
   * @returns All grants were revoked successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public revokeUserClientGrants(
    userId: string,
    clientId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/grants/clients/{client_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Revoke a consent
   * @description Revokes the specified consent, invalidating any previously authorized scopes. If applicable, the application must obtain new consent before acting on behalf of the user again.
   * @note Access to grant and token management endpoints requires an active Secure+ subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {string} consentId The unique identifier of the consent grant.
   * @returns The user\&#39;s consent was revoked successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public revokeUserConsent(
    userId: string,
    consentId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/grants/consents/{consent_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'consent_id'}}`, encodeURIComponent(String(consentId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Revoke a reference token
   * @description Revokes the specified reference token issued to an application, rendering it invalid for future access to protected resources.
   * @note Access to grant and token management endpoints requires an active Secure+ subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {string} tokenId The unique identifier of the reference token grant.
   * @returns The reference token was revoked successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public revokeReferenceToken(
    userId: string,
    tokenId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/grants/reference_tokens/{token_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'token_id'}}`, encodeURIComponent(String(tokenId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Revoke a refresh token
   * @description Revokes the specified refresh token, rendering it unusable for obtaining new access tokens.
   * @note Access to grant and token management endpoints requires an active Secure+ subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {string} tokenId The unique identifier of the refresh token grant.
   * @returns The refresh token was revoked successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public revokeRefreshToken(
    userId: string,
    tokenId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/grants/refresh_tokens/{token_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'token_id'}}`, encodeURIComponent(String(tokenId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Revoke an authorization code
   * @description Revokes an authorization code that has not yet been exchanged for tokens, preventing any further use.
   * @note Access to grant and token management endpoints requires an active Secure+ subscription.
   * @param {string} userId The unique identifier of the user.
   * @param {string} codeId The unique identifier of the authorization code grant.
   * @returns The authorization code was revoked successfully
   * @throws {MonoCloudException}
   * @memberof UsersClient
   */
  public revokeAuthorizationCode(
    userId: string,
    codeId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/grants/codes/{code_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'code_id'}}`, encodeURIComponent(String(codeId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }
}
