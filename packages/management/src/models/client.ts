import { AccessTokenTypes } from './access-token-types';
import { ApplicationTypes } from './application-types';
import { Authenticators } from './authenticators';
import { GrantTypes } from './grant-types';
import { RefreshTokenExpirationTypes } from './refresh-token-expiration-types';
import { RefreshTokenUsageTypes } from './refresh-token-usage-types';
import { RememberConsentTypes } from './remember-consent-types';
import { TechTypes } from './tech-types';

/**
 * Client: Represents an OAuth 2.0 / OIDC client application configuration.
 * @export
 * @interface Client
 */
export interface Client {
  /**
   * The unique identifier of the client.
   * @type {string}
   * @memberof Client
   */
  id: string;
  /**
   * Indicates whether the client is enabled.
   * @type {boolean}
   * @memberof Client
   */
  enabled: boolean;
  /**
   * Preferred application type for the client.
   * @type {ApplicationTypes}
   * @memberof Client
   */
  app_type: ApplicationTypes;
  /**
   * Preferred technology stack for the client.
   * @type {TechTypes}
   * @memberof Client
   */
  tech_type: TechTypes;
  /**
   * Requires confidential clients to present a client secret when requesting tokens.
   * @warning Only disable for public clients (e.g., SPA / mobile).
   * @type {boolean}
   * @memberof Client
   */
  require_client_secret: boolean;
  /**
   * Human-readable name for the client application, displayed to users on the login and consent screens.
   * @type {string}
   * @memberof Client
   */
  client_name: string;
  /**
   * Description that explains the purpose of the client application.
   * @type {string}
   * @memberof Client
   */
  description?: string | null;
  /**
   * Public URL that provides additional information about the client application.
   * @type {string}
   * @memberof Client
   */
  client_uri?: string | null;
  /**
   * URL of the client application logo, displayed on the consent screen to help users identify the application.
   * @type {string}
   * @memberof Client
   */
  logo_uri?: string | null;
  /**
   * Controls whether users are prompted to review and approve requested permissions.
   * @note Secure+ subscription required to use consents.
   * @type {boolean}
   * @memberof Client
   */
  require_consent: boolean;
  /**
   * Always prompts users for consent when requesting offline (refresh token) access.
   * @note This setting applies even if the user previously chose to remember their consent.
   * @type {boolean}
   * @memberof Client
   */
  always_require_consent_for_offline_access: boolean;
  /**
   * Controls how consent decisions are remembered for future sign-ins.
   * @type {RememberConsentTypes}
   * @memberof Client
   */
  remember_consent: RememberConsentTypes;
  /**
   * Allows end users to choose which requested scopes to grant on the consent screen.
   * @type {boolean}
   * @memberof Client
   */
  show_consent_scope_selection: boolean;
  /**
   * Always embeds user claims in the ID token instead of requiring calls to the `UserInfo` endpoint.
   * @note Enabling this increases the ID token size and may expose more user data to applications than necessary.
   * @type {boolean}
   * @memberof Client
   */
  always_include_user_claims_in_id_token: boolean;
  /**
   * Defines which OAuth / OIDC grant types this client is permitted to use.
   * @note Only valid and secure grant combinations are supported.
   * @type {GrantTypes[]}
   * @memberof Client
   */
  allowed_grant_types: GrantTypes[];
  /**
   * Requires Proof Key for Code Exchange (PKCE) for authorization code flows.
   * @note Strongly recommended for public clients such as SPAs and mobile applications.
   * @type {boolean}
   * @memberof Client
   */
  require_pkce: boolean;
  /**
   * Allows Proof Key for Code Exchange (PKCE) verification using the plain (unhashed) method.
   * @warning Use only for legacy compatibility — strongly discouraged for production.
   * @type {boolean}
   * @memberof Client
   */
  allow_plain_text_pkce: boolean;
  /**
   * Requires authorization requests to be sent as signed JWT request objects (JAR).
   * @note Secure+ subscription required to use JWT request objects (JAR).
   * @type {boolean}
   * @memberof Client
   */
  require_request_object: boolean;
  /**
   * Requires clients to use Pushed Authorization Requests (PAR) instead of sending parameters directly to the authorization endpoint.
   * @note Secure+ subscription required to use Pushed Authorization Requests (PAR).
   * @type {boolean}
   * @memberof Client
   */
  require_pushed_authorization_requests: boolean;
  /**
   * Allows the client to use any redirect URI when using Pushed Authorization Requests (PAR), instead of being limited to the configured redirect URI list.
   * @type {boolean}
   * @memberof Client
   */
  allow_any_pushed_authorization_redirect_uri: boolean;
  /**
   * Lifetime of the authorization request (in seconds). Controls how long the request data is considered valid during the authorization flow.
   * @type {number}
   * @memberof Client
   */
  authorization_request_lifetime: number;
  /**
   * Controls whether access tokens may be transmitted via the browser for this client.
   * @warning Enable only when absolutely necessary. Returning access tokens to the browser increases the risk of leakage through logs, plugins, redirects, or malicious scripts. Recommended to keep disabled and prefer the Authorization Code + PKCE flow.
   * @type {boolean}
   * @memberof Client
   */
  allow_access_tokens_via_browser: boolean;
  /**
   * List of approved redirect URIs where authorization codes or tokens may be sent.
   * @note Only exact, fully-qualified matches are allowed.
   * @type {string[]}
   * @memberof Client
   */
  redirect_uris: string[];
  /**
   * List of approved URIs users can be redirected to after a successful logout.
   * @note Only exact, fully-qualified matches are allowed.
   * @type {string[]}
   * @memberof Client
   */
  post_logout_redirect_uris: string[];
  /**
   * Browser-based (front-channel) endpoint on the client that receives user logout notifications from MonoCloud.
   * @note Pro plan subscription required to use front-channel logout.
   * @type {string}
   * @memberof Client
   */
  front_channel_logout_uri?: string | null;
  /**
   * Indicates whether the user’s session identifier should be included when invoking the front-channel logout URI.
   * @type {boolean}
   * @memberof Client
   */
  front_channel_logout_session_required: boolean;
  /**
   * Server-side (back-channel) endpoint that MonoCloud calls to notify the application of a user logout.
   * @note Secure+ subscription required to use back-channel logout.
   * @type {string}
   * @memberof Client
   */
  back_channel_logout_uri?: string | null;
  /**
   * Indicates whether the user’s session identifier should be included when invoking the back-channel logout URI.
   * @type {boolean}
   * @memberof Client
   */
  back_channel_logout_session_required: boolean;
  /**
   * Binds issued tokens to the user\'s session. When enabled, all tokens and grants are automatically revoked when the user signs out or the session expires.
   * @note ScaleX subscription required to use session binding.
   * @type {boolean}
   * @memberof Client
   */
  bind_tokens_to_session: boolean;
  /**
   * Allows the client to obtain refresh tokens using the `offline_access` scope.
   * @note Use only for trusted applications that can securely store long-lived tokens.
   * @type {boolean}
   * @memberof Client
   */
  allow_offline_access: boolean;
  /**
   * Defines the approved identity scopes that this client is authorized to request.
   * @type {string[]}
   * @memberof Client
   */
  allowed_identity_scopes: string[];
  /**
   * Specifies how long an ID token remains valid (in seconds).
   * @type {number}
   * @memberof Client
   */
  identity_token_lifetime: number;
  /**
   * Specifies how long an access token remains valid (in seconds).
   * @type {number}
   * @memberof Client
   */
  access_token_lifetime: number;
  /**
   * Specifies how long an authorization code remains valid (in seconds).
   * @type {number}
   * @memberof Client
   */
  authorization_code_lifetime: number;
  /**
   * Specifies the validity period for stored user consent (in seconds). Set to `0` to allow consent to remain valid indefinitely.
   * @type {number}
   * @memberof Client
   */
  consent_lifetime: number;
  /**
   * Specifies the maximum lifetime of a refresh token (in seconds), regardless of how often it is used.
   * @note ScaleX subscription required to configure refresh token lifetimes longer than a month.
   * @type {number}
   * @memberof Client
   */
  absolute_refresh_token_lifetime: number;
  /**
   * Defines the sliding expiration window for refresh tokens (in seconds). Token expiry is extended on each valid refresh, subject to the absolute refresh token lifetime.
   * @type {number}
   * @memberof Client
   */
  sliding_refresh_token_lifetime: number;
  /**
   * Controls whether refresh tokens are single-use (rotated) or reusable.
   * @type {RefreshTokenUsageTypes}
   * @memberof Client
   */
  refresh_token_usage: RefreshTokenUsageTypes;
  /**
   * Controls whether access token claims are recalculated and reissued when refreshing a token.
   * @type {boolean}
   * @memberof Client
   */
  update_access_token_claims_on_refresh: boolean;
  /**
   * Includes the `offline_access` scope in issued access tokens when requested by the client.
   * @type {boolean}
   * @memberof Client
   */
  emit_offline_access_scope_in_access_token: boolean;
  /**
   * Controls whether refresh tokens expire at a fixed time or are extended with continued use.
   * @type {RefreshTokenExpirationTypes}
   * @memberof Client
   */
  refresh_token_expiration: RefreshTokenExpirationTypes;
  /**
   * Specifies whether access tokens are issued as self-contained JWTs or as opaque references stored server-side.
   * @type {AccessTokenTypes}
   * @memberof Client
   */
  access_token_type: AccessTokenTypes;
  /**
   * Defines the authenticators users may use to sign in with this client. Leave empty to inherit the global authenticator policy.
   * @note Pro plan subscription required to enable authenticator restrictions.
   * @type {Authenticators[]}
   * @memberof Client
   */
  authenticator_restrictions: Authenticators[];
  /**
   * Determines whether issued access tokens include a unique token identifier (jti).
   * @note Recommended for auditing, correlation, and replay-detection.
   * @type {boolean}
   * @memberof Client
   */
  include_jwt_id: boolean;
  /**
   * Defines custom claims issued to this client and embedded into access tokens for downstream APIs and resources.
   * @type {{ [key: string]: any; }}
   * @memberof Client
   */
  claims: Record<string, any>;
  /**
   * Controls whether client claims are always emitted in access tokens, or only when using the client credentials flow.
   * @type {boolean}
   * @memberof Client
   */
  always_send_client_claims: boolean;
  /**
   * Configures a prefix for client claims, helping avoid naming collisions across tokens and downstream APIs.
   * @type {string}
   * @memberof Client
   */
  client_claims_prefix?: string | null;
  /**
   * Configures the set of trusted origins permitted to perform cross-origin requests for this client.
   * @type {string[]}
   * @memberof Client
   */
  allowed_cors_origins: string[];
  /**
   * Maximum allowed SSO duration (in seconds). After this window, users must sign in again to confirm identity. Set to `0` to disable the limit.
   * @type {number}
   * @memberof Client
   */
  user_sso_lifetime: number;
  /**
   * Specifies the length of the user verification code generated for the device flow.
   * @type {number}
   * @memberof Client
   */
  device_code_length: number;
  /**
   * Specifies the lifetime of the device authorization code (in seconds).
   * @type {number}
   * @memberof Client
   */
  device_code_lifetime: number;
  /**
   * Specifies the creation time of the client (in Epoch).
   * @type {number}
   * @memberof Client
   */
  creation_time: number;
  /**
   * Specifies the last update time of the client (in Epoch).
   * @type {number}
   * @memberof Client
   */
  last_updated: number;
}
