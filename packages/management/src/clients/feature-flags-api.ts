import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudRequest,
} from '@monocloud/management-core';
import { HttpFeatureFlagResponse, HttpSetFeatureFlagRequest } from '../models';

export class FeatureFlagsClient extends MonoCloudClientBase {
  /**
   * @summary List feature flags with the current tenant\'s overrides.
   * @returns HttpFeatureFlagResponse[] - Success
   * @throws {MonoCloudException}
   * @memberof FeatureFlagsClient
   */
  public getFeatureFlags(): Promise<
    MonoCloudResponse<HttpFeatureFlagResponse[]>
  > {
    const url = `/feature_flags`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<HttpFeatureFlagResponse[]>(request);
  }

  /**
   * @summary Set the override for a flag for the current tenant.
   * @param {string} name The feature flag name.
   * @param {HttpSetFeatureFlagRequest} httpSetFeatureFlagRequest The desired enabled state for the flag.
   * @returns HttpFeatureFlagResponse - Success
   * @throws {MonoCloudException}
   * @memberof FeatureFlagsClient
   */
  public setFeatureFlag(
    name: string,
    httpSetFeatureFlagRequest: HttpSetFeatureFlagRequest
  ): Promise<MonoCloudResponse<HttpFeatureFlagResponse>> {
    const url = `/feature_flags/{name}`.replace(
      `{${'name'}}`,
      encodeURIComponent(String(name))
    );

    const request: MonoCloudRequest = { method: 'PUT', url };

    request.body = httpSetFeatureFlagRequest;

    return this.processRequest<HttpFeatureFlagResponse>(request);
  }

  /**
   * @summary Clear the override for a flag for the current tenant so it reverts to the inherited value.
   * @param {string} name The feature flag name.
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof FeatureFlagsClient
   */
  public clearFeatureFlag(name: string): Promise<MonoCloudResponse<null>> {
    const url = `/feature_flags/{name}`.replace(
      `{${'name'}}`,
      encodeURIComponent(String(name))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }
}
