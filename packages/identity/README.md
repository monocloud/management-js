![MonoCloud Logo](https://raw.githubusercontent.com/monocld/monocloud-management-dotnet/refs/heads/main/MonoCloud.png)

## Introduction

**MonoCloud Management Identity SDK for JavaScript – programmatically manage users and groups via the MonoCloud Management APIs.**

[MonoCloud](https://www.monocloud.com) is a modern, developer-friendly Identity & Access Management platform.

This SDK provides a full-featured, typed JavaScript client for interacting with the **MonoCloud Management APIs**, allowing you to automate tenant administration programmatically.

## 📘 Documentation

- **Documentation:** https://www.monocloud.com/docs

## Supported Platforms

- **Node.js >= 11.0.0**

## 🚀 Getting Started

### Requirements

- A **MonoCloud tenant**
- A **Management API key** with appropriate permissions

## 📦 Installation

```bash
npm install @monocloud/management-identity
```

## Usage

```typescript
const identityClient = MonoCloudIdentityClient.init({
  domain: 'https://<your-tenant-domain>',
  apiKey: '<your-api-key>',
});
```

⚠️ **Security Note:** Do not hardcode your API key. It is recommended to load it from an environment variable. See: [`monocloud-identity-client`](https://github.com/monocld/monocloud-management-js/blob/main/packages/identity/src/monocloud-identity-client.ts)

### ✨ Usage Examples

The SDK closely mirrors the REST API structure — clients are organized by users and groups.

#### 🔍 Get all users

```typescript
const result = await identityClient.users.getAllUsers(
    page: 1,
    size: 10,
    filter: "bob",
    sort: "given_name:1"
);
```

Explore further operations at https://www.monocloud.com/docs

## 🤝 Contributing & Support

### Issues & Feedback

- Use **GitHub Issues** for bug reports and feature requests.
- For tenant or account-specific help, contact MonoCloud Support through your dashboard.

### Security

Do **not** report security issues publicly. Please follow the contact instructions at: https://www.monocloud.com/contact

## 📄 License

Licensed under the **MIT License**. See the included [`LICENSE`](https://github.com/monocld/monocloud-management-js/blob/main/LICENSE) file.
