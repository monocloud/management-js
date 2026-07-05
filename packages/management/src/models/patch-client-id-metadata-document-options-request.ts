/**
 * Patch Client ID Metadata Document Options Request: Used to update tenant-wide CIMD configuration.
 * @export
 * @interface PatchClientIdMetadataDocumentOptionsRequest
 */
export interface PatchClientIdMetadataDocumentOptionsRequest {
  /**
   * Specifies whether Client ID Metadata Documents (CIMD) are enabled for the tenant.
   * @type {boolean}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  enable_client_id_metadata_documents?: boolean;
  /**
   * When `true`, any well-formed HTTPS client_id URL is accepted (subject to SSRF protection).
   * @type {boolean}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  allow_any_client_id_host?: boolean;
  /**
   * The allow-list of client_id hosts permitted as CIMD identifiers (supports a leading wildcard label).
   * @type {string[]}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  trusted_client_id_hosts?: string[];
  /**
   * When `true`, every URL in the metadata document must share the client_id host.
   * @type {boolean}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  require_same_origin?: boolean;
  /**
   * The maximum size, in bytes, of a fetched metadata document.
   * @type {number}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  max_document_size_bytes?: number;
  /**
   * The HTTP timeout, in seconds, when fetching a metadata document.
   * @type {number}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  http_timeout_seconds?: number;
  /**
   * The minimum cache TTL, in seconds, for a fetched metadata document.
   * @type {number}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  min_cache_ttl_seconds?: number;
  /**
   * The default cache TTL, in seconds, applied when the response has no usable HTTP cache headers.
   * @type {number}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  default_cache_ttl_seconds?: number;
  /**
   * The maximum cache TTL, in seconds, for a fetched metadata document.
   * @type {number}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  max_cache_ttl_seconds?: number;
  /**
   * When `true`, consent is always shown for CIMD clients (anti-phishing).
   * @type {boolean}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  force_consent?: boolean;
  /**
   * When `true`, the metadata document is fetched and re-validated on every flow, bypassing the cache.
   * @type {boolean}
   * @memberof PatchClientIdMetadataDocumentOptionsRequest
   */
  always_refetch?: boolean;
}
