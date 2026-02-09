import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/management-core';
import { Log } from '../models';

export class LogsClient extends MonoCloudClientBase {
  /**
   * @summary List logs
   * @description Retrieves a paginated list of system logs. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of logs to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `time_stamp`, `category`, `code`, `type`, and `name`
   * @returns Log[] - The log entries were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof LogsClient
   */
  public getAllLogs(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<Log[]>> {
    const url = `/logs`;

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

    return this.processPaginatedRequest<Log[]>(request);
  }

  /**
   * @summary Retrieve a log entry
   * @description Retrieves detailed information for the specified log entry.
   * @param {string} logId The unique identifier of the log entry.
   * @returns Log - The log entry was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof LogsClient
   */
  public findLogById(logId: string): Promise<MonoCloudResponse<Log>> {
    const url = `/logs/{log_id}`.replace(
      `{${'log_id'}}`,
      encodeURIComponent(String(logId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Log>(request);
  }
}
