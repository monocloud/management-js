/**
 * Client ID Metadata Document Options Response: Represents the tenant-wide CIMD configuration.
 * @export
 * @interface ClientIdMetadataDocumentOptions
 */
export interface ClientIdMetadataDocumentOptions {
  /**
   * Specifies whether Client ID Metadata Documents (CIMD) are enabled for the tenant.
   * @type {boolean}
   * @memberof ClientIdMetadataDocumentOptions
   */
  enable_client_id_metadata_documents: boolean;
  /**
   * When `true`, any well-formed HTTPS client_id URL is accepted (subject to SSRF protection). When `false`, only hosts in the trusted client_id host allow-list are accepted.
   * @type {boolean}
   * @memberof ClientIdMetadataDocumentOptions
   */
  allow_any_client_id_host: boolean;
  /**
   * The allow-list of client_id hosts permitted as CIMD identifiers. Supports a leading wildcard label (e.g. `*.example.com`). Ignored when any client_id host is allowed.
   * @type {string[]}
   * @memberof ClientIdMetadataDocumentOptions
   */
  trusted_client_id_hosts: string[];
  /**
   * When `true`, every URL in the metadata document (redirect_uris, client_uri, logo_uri) must share the client_id host.
   * @type {boolean}
   * @memberof ClientIdMetadataDocumentOptions
   */
  require_same_origin: boolean;
  /**
   * The maximum size, in bytes, of a fetched metadata document.
   * @type {number}
   * @memberof ClientIdMetadataDocumentOptions
   */
  max_document_size_bytes: number;
  /**
   * The HTTP timeout, in seconds, when fetching a metadata document.
   * @type {number}
   * @memberof ClientIdMetadataDocumentOptions
   */
  http_timeout_seconds: number;
  /**
   * The minimum cache TTL, in seconds, for a fetched metadata document, regardless of HTTP cache headers.
   * @type {number}
   * @memberof ClientIdMetadataDocumentOptions
   */
  min_cache_ttl_seconds: number;
  /**
   * The default cache TTL, in seconds, applied when the response has no usable HTTP cache headers.
   * @type {number}
   * @memberof ClientIdMetadataDocumentOptions
   */
  default_cache_ttl_seconds: number;
  /**
   * The maximum cache TTL, in seconds, for a fetched metadata document, regardless of HTTP cache headers.
   * @type {number}
   * @memberof ClientIdMetadataDocumentOptions
   */
  max_cache_ttl_seconds: number;
  /**
   * When `true`, consent is always shown for CIMD clients (anti-phishing), regardless of remembered consent.
   * @type {boolean}
   * @memberof ClientIdMetadataDocumentOptions
   */
  force_consent: boolean;
  /**
   * When `true`, the metadata document is fetched and re-validated on every flow, bypassing the cache.
   * @type {boolean}
   * @memberof ClientIdMetadataDocumentOptions
   */
  always_refetch: boolean;
}
