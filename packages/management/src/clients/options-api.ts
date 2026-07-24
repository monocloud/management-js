import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudRequest,
} from '@monocloud/management-core';
import {
  AuthenticationOptions,
  CommunicationOptions,
  CreateExternalProviderRequest,
  CreateSignUpCustomFieldRequest,
  ExternalProvider,
  PatchAuthenticationOptionsRequest,
  PatchCommunicationOptionsRequest,
  PatchExternalProviderRequest,
  PatchSignUpCustomFieldRequest,
  SignUpCustomField,
} from '../models';

export class OptionsClient extends MonoCloudClientBase {
  /**
   * @summary Retrieve authentication options
   * @description Retrieves the current authentication configuration, including enabled authenticators, sign-in and sign-up behavior, and external identity provider settings.
   * @returns AuthenticationOptions - The authentication options were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public findAuthenticationOptions(): Promise<
    MonoCloudResponse<AuthenticationOptions>
  > {
    const url = `/options/authentication`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<AuthenticationOptions>(request);
  }

  /**
   * @summary Update authentication options
   * @description Applies a partial update to the authentication configuration, including internal and external authenticators, sign-in behavior, and provider-specific settings. Only fields included in the request are updated.
   * @param {PatchAuthenticationOptionsRequest} patchAuthenticationOptionsRequest The request payload used to update the authentication options.
   * @returns AuthenticationOptions - The authentication options were updated successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public patchAuthenticationOptions(
    patchAuthenticationOptionsRequest: PatchAuthenticationOptionsRequest
  ): Promise<MonoCloudResponse<AuthenticationOptions>> {
    const url = `/options/authentication`;

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchAuthenticationOptionsRequest;

    return this.processRequest<AuthenticationOptions>(request);
  }

  /**
   * @summary Retrieve communication options
   * @description Retrieves the current email and SMS delivery configuration.
   * @returns CommunicationOptions - The communication options were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public findCommunicationOptions(): Promise<
    MonoCloudResponse<CommunicationOptions>
  > {
    const url = `/options/communication`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<CommunicationOptions>(request);
  }

  /**
   * @summary Update communication options
   * @description Applies a partial update to the email and SMS delivery configuration. Only fields included in the request are updated.
   * @param {PatchCommunicationOptionsRequest} patchCommunicationOptionsRequest The request payload used to update the communication options.
   * @returns CommunicationOptions - The communication options were updated successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public patchCommunicationOptions(
    patchCommunicationOptionsRequest: PatchCommunicationOptionsRequest
  ): Promise<MonoCloudResponse<CommunicationOptions>> {
    const url = `/options/communication`;

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchCommunicationOptionsRequest;

    return this.processRequest<CommunicationOptions>(request);
  }

  /**
   * @summary List sign-up custom fields
   * @description Retrieves a list of configured custom fields collected during user sign-up.
   * @returns SignUpCustomField[] - The sign-up custom fields were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public getAllSignUpCustomFields(): Promise<
    MonoCloudResponse<SignUpCustomField[]>
  > {
    const url = `/options/authentication/signup/custom_fields`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<SignUpCustomField[]>(request);
  }

  /**
   * @summary Create a sign-up custom field
   * @description Creates a new custom field to be collected during user sign-up.
   * @param {CreateSignUpCustomFieldRequest} createSignUpCustomFieldRequest The request payload used to create a sign-up custom field configuration.
   * @returns SignUpCustomField - The sign-up custom field was created successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public createSignUpCustomField(
    createSignUpCustomFieldRequest: CreateSignUpCustomFieldRequest
  ): Promise<MonoCloudResponse<SignUpCustomField>> {
    const url = `/options/authentication/signup/custom_fields`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createSignUpCustomFieldRequest;

    return this.processRequest<SignUpCustomField>(request);
  }

  /**
   * @summary Retrieve a sign-up custom field
   * @description Retrieves detailed information for the specified sign-up custom field.
   * @param {string} claimName The unique claim name identifying the custom field.
   * @returns SignUpCustomField - The custom field was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public findSignUpCustomField(
    claimName: string
  ): Promise<MonoCloudResponse<SignUpCustomField>> {
    const url =
      `/options/authentication/signup/custom_fields/{claim_name}`.replace(
        `{${'claim_name'}}`,
        encodeURIComponent(String(claimName))
      );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<SignUpCustomField>(request);
  }

  /**
   * @summary Update a sign-up custom field
   * @description Applies a partial update to the specified sign-up custom field configuration. Only fields included in the request are updated.
   * @param {string} claimName The unique claim name identifying the custom field.
   * @param {PatchSignUpCustomFieldRequest} patchSignUpCustomFieldRequest The request payload used to update the field configuration.
   * @returns SignUpCustomField - The sign-up custom field was updated successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public patchSignUpCustomField(
    claimName: string,
    patchSignUpCustomFieldRequest: PatchSignUpCustomFieldRequest
  ): Promise<MonoCloudResponse<SignUpCustomField>> {
    const url =
      `/options/authentication/signup/custom_fields/{claim_name}`.replace(
        `{${'claim_name'}}`,
        encodeURIComponent(String(claimName))
      );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchSignUpCustomFieldRequest;

    return this.processRequest<SignUpCustomField>(request);
  }

  /**
   * @summary Delete a sign-up custom field
   * @description Permanently deletes the specified sign-up custom field configuration.
   * @warning This operation is irreversible.
   * @param {string} claimName The unique claim name identifying the custom field.
   * @returns The sign-up custom field was deleted successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public deleteSignUpCustomField(
    claimName: string
  ): Promise<MonoCloudResponse<null>> {
    const url =
      `/options/authentication/signup/custom_fields/{claim_name}`.replace(
        `{${'claim_name'}}`,
        encodeURIComponent(String(claimName))
      );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List external authenticators
   * @description Retrieves the list of configured external authenticators.
   * @returns ExternalProvider[] - The external authenticators were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public getAllExternalAuthenticators(): Promise<
    MonoCloudResponse<ExternalProvider[]>
  > {
    const url = `/options/authentication/external`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ExternalProvider[]>(request);
  }

  /**
   * @summary Configure an external provider
   * @description Configures a new external provider that end-users can authenticate with.
   * @param {CreateExternalProviderRequest} createExternalProviderRequest The request payload used to configure the external provider.
   * @returns ExternalProvider - The external provider was configured successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public createExternalProvider(
    createExternalProviderRequest: CreateExternalProviderRequest
  ): Promise<MonoCloudResponse<ExternalProvider>> {
    const url = `/options/authentication/external`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createExternalProviderRequest;

    return this.processRequest<ExternalProvider>(request);
  }

  /**
   * @summary Retrieve an external provider
   * @description Retrieves detailed information for the specified external provider.
   * @param {string} providerName The name of the external provider.
   * @returns ExternalProvider - The external provider was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public findExternalProvider(
    providerName: string
  ): Promise<MonoCloudResponse<ExternalProvider>> {
    const url = `/options/authentication/external/{provider_name}`.replace(
      `{${'provider_name'}}`,
      encodeURIComponent(String(providerName))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ExternalProvider>(request);
  }

  /**
   * @summary Update an external provider
   * @description Applies a partial update to the specified external provider. Only fields included in the request are updated.
   * @param {string} providerName The name of the external provider.
   * @param {PatchExternalProviderRequest} patchExternalProviderRequest The request payload used to update the external provider.
   * @returns ExternalProvider - The external provider was updated successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public patchExternalProvider(
    providerName: string,
    patchExternalProviderRequest: PatchExternalProviderRequest
  ): Promise<MonoCloudResponse<ExternalProvider>> {
    const url = `/options/authentication/external/{provider_name}`.replace(
      `{${'provider_name'}}`,
      encodeURIComponent(String(providerName))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchExternalProviderRequest;

    return this.processRequest<ExternalProvider>(request);
  }

  /**
   * @summary Delete an external provider
   * @description Permanently deletes the specified external provider.
   * @warning This operation is irreversible.
   * @param {string} providerName The name of the external provider.
   * @returns The external provider was deleted successfully
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   */
  public deleteExternalProvider(
    providerName: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/options/authentication/external/{provider_name}`.replace(
      `{${'provider_name'}}`,
      encodeURIComponent(String(providerName))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }
}
