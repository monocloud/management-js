import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudRequest,
} from '@monocloud/management-core';
import {
  EmailBrandingOptions,
  PageBrandingOptions,
  PatchEmailBrandingOptionsRequest,
  PatchPageBrandingOptionsRequest,
  PatchSmsBrandingOptionsRequest,
  SmsBrandingOptions,
} from '../models';

export class BrandingClient extends MonoCloudClientBase {
  /**
   * @summary Retrieve page branding options
   * @description Retrieves the current branding configuration for hosted pages, including colors and watermark settings.
   * @returns PageBrandingOptions - The branding page options were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof BrandingClient
   */
  public findPageBrandingOptions(): Promise<
    MonoCloudResponse<PageBrandingOptions>
  > {
    const url = `/branding/page`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<PageBrandingOptions>(request);
  }

  /**
   * @summary Update page branding options
   * @description Applies a partial update to the branding configuration for hosted pages, including colors and watermark settings. Only fields included in the request are updated.
   * @param {PatchPageBrandingOptionsRequest} patchPageBrandingOptionsRequest The request payload used to update the page branding options.
   * @returns PageBrandingOptions - The branding page options were updated successfully
   * @throws {MonoCloudException}
   * @memberof BrandingClient
   */
  public patchPageBrandingOptions(
    patchPageBrandingOptionsRequest: PatchPageBrandingOptionsRequest
  ): Promise<MonoCloudResponse<PageBrandingOptions>> {
    const url = `/branding/page`;

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchPageBrandingOptionsRequest;

    return this.processRequest<PageBrandingOptions>(request);
  }

  /**
   * @summary Retrieve email branding options
   * @description Retrieves the current email branding configuration, including subjects and delivery behavior for system-generated emails.
   * @returns EmailBrandingOptions - The branding email options were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof BrandingClient
   */
  public findEmailBrandingOptions(): Promise<
    MonoCloudResponse<EmailBrandingOptions>
  > {
    const url = `/branding/email`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<EmailBrandingOptions>(request);
  }

  /**
   * @summary Update email branding options
   * @description Applies a partial update to the email branding configuration, including subjects and delivery behavior. Only fields included in the request are updated.
   * @param {PatchEmailBrandingOptionsRequest} patchEmailBrandingOptionsRequest The request payload used to update the email branding options.
   * @returns EmailBrandingOptions - The branding email options were updated successfully
   * @throws {MonoCloudException}
   * @memberof BrandingClient
   */
  public patchEmailBrandingOptions(
    patchEmailBrandingOptionsRequest: PatchEmailBrandingOptionsRequest
  ): Promise<MonoCloudResponse<EmailBrandingOptions>> {
    const url = `/branding/email`;

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchEmailBrandingOptionsRequest;

    return this.processRequest<EmailBrandingOptions>(request);
  }

  /**
   * @summary Retrieve SMS branding options
   * @description Retrieves the current SMS message templates used for system-generated notifications.
   * @returns SmsBrandingOptions - The branding SMS options were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof BrandingClient
   */
  public findSmsBrandingOptions(): Promise<
    MonoCloudResponse<SmsBrandingOptions>
  > {
    const url = `/branding/sms`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<SmsBrandingOptions>(request);
  }

  /**
   * @summary Update SMS branding options
   * @description Applies a partial update to the SMS message templates used for system-generated notifications. Only fields included in the request are updated.
   * @param {PatchSmsBrandingOptionsRequest} patchSmsBrandingOptionsRequest The request payload used to update the SMS branding options.
   * @returns SmsBrandingOptions - The branding SMS options were updated successfully
   * @throws {MonoCloudException}
   * @memberof BrandingClient
   */
  public patchSmsBrandingOptions(
    patchSmsBrandingOptionsRequest: PatchSmsBrandingOptionsRequest
  ): Promise<MonoCloudResponse<SmsBrandingOptions>> {
    const url = `/branding/sms`;

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchSmsBrandingOptionsRequest;

    return this.processRequest<SmsBrandingOptions>(request);
  }
}
