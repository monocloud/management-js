/**
 * The log event code.
 * @export
 * @enum {string}
 */

export const EventCodes = {
  /**
   * Indicates a successful authorization request.
   */
  AuthorizationSucceeded: 'authorization_succeeded',

  /**
   * Indicates a failed authorization request (e.g., invalid request, denied by policy).
   */
  AuthorizationFailed: 'authorization_failed',

  /**
   * Indicates a successful Pushed Authorization Request (PAR).
   */
  PushedAuthorizationSucceeded: 'pushed_authorization_succeeded',

  /**
   * Indicates a failed Pushed Authorization Request (PAR).
   */
  PushedAuthorizationFailed: 'pushed_authorization_failed',

  /**
   * Indicates a successful OAuth client authentication.
   */
  ClientAuthenticationSucceeded: 'client_authentication_succeeded',

  /**
   * Indicates a failed OAuth client authentication (e.g., invalid client credentials).
   */
  ClientAuthenticationFailed: 'client_authentication_failed',

  /**
   * Indicates a successful API authentication.
   */
  ApiAuthenticationSucceeded: 'api_authentication_succeeded',

  /**
   * Indicates a failed API authentication (e.g., invalid or missing access token).
   */
  ApiAuthenticationFailed: 'api_authentication_failed',

  /**
   * Indicates a successful Resource Owner Password Credentials (ROPC) authentication flow.
   */
  PasswordFlowAuthenticationSucceeded: 'password_flow_authentication_succeeded',

  /**
   * Indicates a failed Resource Owner Password Credentials (ROPC) authentication flow.
   */
  PasswordFlowAuthenticationFailed: 'password_flow_authentication_failed',

  /**
   * Indicates a successful device authorization flow.
   */
  DeviceAuthorizationSucceeded: 'device_authorization_succeeded',

  /**
   * Indicates a failed device authorization flow.
   */
  DeviceAuthorizationFailed: 'device_authorization_failed',

  /**
   * Indicates a successful client certificate (mTLS) authentication.
   */
  MtlsAuthenticationSucceeded: 'mtls_authentication_succeeded',

  /**
   * Indicates a failed client certificate (mTLS) authentication.
   */
  MtlsAuthenticationFailed: 'mtls_authentication_failed',

  /**
   * Indicates a failed identifier-based sign-in attempt (e.g., username or email lookup).
   */
  UserLookupFailed: 'user_lookup_failed',

  /**
   * Indicates a failed external identity provider sign-in.
   */
  ExternalProviderAuthenticationFailed:
    'external_provider_authentication_failed',

  /**
   * Indicates a successful interactive user sign-in.
   */
  UserSignInSucceeded: 'user_sign_in_succeeded',

  /**
   * Indicates a failed interactive user sign-in attempt.
   */
  UserSignInFailed: 'user_sign_in_failed',

  /**
   * Indicates a successful user registration.
   */
  UserRegistrationSucceeded: 'user_registration_succeeded',

  /**
   * Indicates a user sign-out event.
   */
  UserSignOutSucceeded: 'user_sign_out_succeeded',

  /**
   * Indicates a successful token issuance.
   */
  TokenIssuanceSucceeded: 'token_issuance_succeeded',

  /**
   * Indicates a failed token issuance attempt.
   */
  TokenIssuanceFailed: 'token_issuance_failed',

  /**
   * Indicates a successful token introspection request.
   */
  TokenIntrospectionSucceeded: 'token_introspection_succeeded',

  /**
   * Indicates a failed token introspection request.
   */
  TokenIntrospectionFailed: 'token_introspection_failed',

  /**
   * Indicates a successful token revocation.
   */
  TokenRevocationSucceeded: 'token_revocation_succeeded',

  /**
   * Indicates a failed token revocation attempt.
   */
  TokenRevocationFailed: 'token_revocation_failed',

  /**
   * Indicates that user consent was successfully granted for the requested scopes.
   */
  ConsentGranted: 'consent_granted',

  /**
   * Indicates that user consent was denied or not granted for the requested scopes.
   */
  ConsentDenied: 'consent_denied',

  /**
   * Indicates that an IP address was blocked for a specific identifier.
   */
  IdentifierIpBlocked: 'identifier_ip_blocked',

  /**
   * Indicates that a user account was blocked.
   */
  UserAccountBlocked: 'user_account_blocked',

  /**
   * Indicates that a user account was unblocked.
   */
  UserAccountUnblocked: 'user_account_unblocked',

  /**
   * Indicates that an IP address was blocked for a user account.
   */
  UserAccountIpBlocked: 'user_account_ip_blocked',

  /**
   * Indicates that an IP address block was removed from a user account.
   */
  UserAccountIpUnblocked: 'user_account_ip_unblocked',

  /**
   * Indicates that all blocks were removed from a user account.
   */
  UserAccountAllUnblocked: 'user_account_all_unblocked',

  /**
   * Indicates that all IP address blocks were removed from a user account.
   */
  UserAccountAllIpBlocksRemoved: 'user_account_all_ip_blocks_removed',

  /**
   * Indicates that a user account was successfully created.
   */
  UserCreated: 'user_created',

  /**
   * Indicates that a user account was deleted.
   */
  UserDeleted: 'user_deleted',

  /**
   * Indicates that a user successfully completed a password reset.
   */
  UserPasswordResetSucceeded: 'user_password_reset_succeeded',

  /**
   * Indicates that a user was added to a group.
   */
  UserAddedToGroup: 'user_added_to_group',

  /**
   * Indicates that a user was removed from a group.
   */
  UserRemovedFromGroup: 'user_removed_from_group',

  /**
   * Indicates that a specific user session was revoked.
   */
  UserSessionRevoked: 'user_session_revoked',

  /**
   * Indicates that all active sessions for a user were revoked.
   */
  UserSessionsRevokedAll: 'user_sessions_revoked_all',

  /**
   * Indicates that all sessions for a user were permanently deleted.
   */
  UserSessionsDeletedAll: 'user_sessions_deleted_all',

  /**
   * Indicates that a sign-in email notification was successfully sent.
   */
  SignInEmailSendingSucceeded: 'sign_in_email_sending_succeeded',

  /**
   * Indicates that a verification email notification was successfully sent.
   */
  VerificationEmailSendingSucceeded: 'verification_email_sending_succeeded',

  /**
   * Indicates that a welcome email notification was successfully sent.
   */
  WelcomeEmailSendingSucceeded: 'welcome_email_sending_succeeded',

  /**
   * Indicates that a password change confirmation email was successfully sent.
   */
  PasswordChangeEmailSendingSucceeded:
    'password_change_email_sending_succeeded',

  /**
   * Indicates that a password reset email notification was successfully sent.
   */
  PasswordResetEmailSendingSucceeded: 'password_reset_email_sending_succeeded',

  /**
   * Indicates that a user blocked notification email was successfully sent.
   */
  UserBlockedEmailSendingSucceeded: 'user_blocked_email_sending_succeeded',

  /**
   * Indicates that a sign-in SMS notification was successfully sent.
   */
  SignInSmsSendingSucceeded: 'sign_in_sms_sending_succeeded',

  /**
   * Indicates that a verification SMS notification was successfully sent.
   */
  VerificationSmsSendingSucceeded: 'verification_sms_sending_succeeded',

  /**
   * Indicates that a password reset SMS notification was successfully sent.
   */
  PasswordResetSmsSendingSucceeded: 'password_reset_sms_sending_succeeded',

  /**
   * Indicates that sending an email notification failed.
   */
  EmailSendingFailed: 'email_sending_failed',

  /**
   * Indicates that sending an SMS notification failed.
   */
  SmsSendingFailed: 'sms_sending_failed',

  /**
   * Indicates that an API resource was created.
   */
  ApiResourceCreated: 'api_resource_created',

  /**
   * Indicates that an API resource was updated.
   */
  ApiResourceUpdated: 'api_resource_updated',

  /**
   * Indicates that an API resource was deleted.
   */
  ApiResourceDeleted: 'api_resource_deleted',

  /**
   * Indicates that a secret was created for an API resource.
   */
  ApiResourceSecretCreated: 'api_resource_secret_created',

  /**
   * Indicates that a secret was deleted from an API resource.
   */
  ApiResourceSecretDeleted: 'api_resource_secret_deleted',

  /**
   * Indicates that a client was granted access to an API resource.
   */
  ApiResourceClientCreated: 'api_resource_client_created',

  /**
   * Indicates that a client's access configuration for an API resource was updated.
   */
  ApiResourceClientUpdated: 'api_resource_client_updated',

  /**
   * Indicates that a client's access to an API resource was removed.
   */
  ApiResourceClientRemoved: 'api_resource_client_removed',

  /**
   * Indicates that a trust store was created.
   */
  TrustStoreCreated: 'trust_store_created',

  /**
   * Indicates that a trust store was updated.
   */
  TrustStoreUpdated: 'trust_store_updated',

  /**
   * Indicates that a trust store was deleted.
   */
  TrustStoreDeleted: 'trust_store_deleted',

  /**
   * Indicates that a certificate revocation list (CRL) was added to the trust store.
   */
  TrustStoreRevocationAdded: 'trust_store_revocation_added',

  /**
   * Indicates that a certificate revocation list (CRL) was removed from the trust store.
   */
  TrustStoreRevocationRemoved: 'trust_store_revocation_removed',

  /**
   * Indicates that a certificate was banned in the trust store.
   */
  TrustStoreCertificateBanned: 'trust_store_certificate_banned',

  /**
   * Indicates that a previously banned certificate was unbanned in the trust store.
   */
  TrustStoreCertificateUnbanned: 'trust_store_certificate_unbanned',

  /**
   * Indicates that a client application was created.
   */
  ClientCreated: 'client_created',

  /**
   * Indicates that a client application was updated.
   */
  ClientUpdated: 'client_updated',

  /**
   * Indicates that a client application was deleted.
   */
  ClientDeleted: 'client_deleted',

  /**
   * Indicates that a client secret was created.
   */
  ClientSecretCreated: 'client_secret_created',

  /**
   * Indicates that a client secret was deleted.
   */
  ClientSecretDeleted: 'client_secret_deleted',

  /**
   * Indicates that a client application was added to a group.
   */
  ClientAddedToGroup: 'client_added_to_group',

  /**
   * Indicates that a client application was removed from a group.
   */
  ClientRemovedFromGroup: 'client_removed_from_group',

  /**
   * Indicates that a group was created.
   */
  GroupCreated: 'group_created',

  /**
   * Indicates that a group was updated.
   */
  GroupUpdated: 'group_updated',

  /**
   * Indicates that a group was deleted.
   */
  GroupDeleted: 'group_deleted',

  /**
   * Indicates that all grants associated with a user were revoked.
   */
  UserGrantsRevoked: 'user_grants_revoked',

  /**
   * Indicates that an authorization code grant was revoked.
   */
  AuthorizationCodeRevoked: 'authorization_code_revoked',

  /**
   * Indicates that a user consent grant was revoked.
   */
  UserConsentRevoked: 'user_consent_revoked',

  /**
   * Indicates that a reference token grant was revoked.
   */
  ReferenceTokenRevoked: 'reference_token_revoked',

  /**
   * Indicates that a refresh token grant was revoked.
   */
  RefreshTokenRevoked: 'refresh_token_revoked',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type EventCodes = (typeof EventCodes)[keyof typeof EventCodes];
