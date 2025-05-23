---
description: Learn about Appsmith's security features and how to protect your data on the Appsmith platform.
---

# Security

This page explains the security features and considerations that Appsmith has implemented to make your apps as safe as possible.

## Data security

Appsmith applications are secure-by-default, with a number of strategies in place to protect your data.

- **Encryption**: Appsmith ensures that all sensitive information, such as database credentials and Git SSH keys, are protected using AES-256 encryption. This robust encryption standard safeguards your credentials, making them unreadable to unauthorized users.

- **Data-at-Rest**: For self-hosted instances of Appsmith, security is enhanced through a unique configuration of salt and password values, mitigating the risk of data breaches when data is at rest.

- **SSL Certification**: Self-hosted instances have the option to set up SSL certificates during the installation process using Let's Encrypt, or admins can choose to upload their own SSL certificates to establish a secure connection.

- **Secure Connections**: Appsmith Cloud establishes connections with databases and API endpoints exclusively through whitelisted IP addresses `18.223.74.0/32`, `3.131.104.27/32`, and `3.148.74.197/32`. All traffic to and from Appsmith Cloud is secured using TLS encryption.

- **Domain Whitelisting**: For self-hosted Appsmith users, it’s necessary to whitelist the domain `cs.appsmith.com`. IP-based whitelisting is not allowed for this domain because it relies on dynamic IPs for scaling and load balancing. 

- **Compliant Hosting**: The cloud version of Appsmith is hosted on AWS data centers that adhere to SOC 1 and SOC 2 compliance standards. These servers provide a secure environment, and their integrity is bolstered by systematic backups to prevent data loss.

- **Access Control**: Internal access to Appsmith Cloud is strictly regulated. A two-factor authentication (2FA) system is in place, along with detailed audit logs to monitor and control access, providing an additional layer of security.

## Appsmith AI

Appsmith AI uses OpenAI’s APIs to provide chat completions and embeddings. Below is an overview of the data Appsmith processes and stores:

1. **Chat completion data:** All interactions through Appsmith’s AI features are processed in real-time via OpenAI's APIs. All response data from OpenAI APIs is transient and **not** stored, logged or retained by Appsmith.
    
2. **File upload data:** When you upload files, Appsmith generates embeddings (vector representations of your data) using OpenAI’s embedding API. These embeddings are stored securely in a PostgreSQL database. The original files and content are not stored after processing.

## Query security

- **No Data Logging**: The backend system of Appsmith is designed to act solely as a proxy, without logging or storing any data retrieved from databases or API endpoints. This includes response data and user input, thereby preventing unauthorized data access or leakage.

- **Secure Storage of Queries**: Query configurations and bodies are securely stored within the platform. When an application is in View mode, this information is not disclosed to users, ensuring that sensitive data within the queries remains confidential.

- **Credential Handling**: When executing a query, the Appsmith server securely appends sensitive credentials just prior to forwarding the request to your backend service. This process ensures that sensitive credentials are not exposed to the client's browser.

- **Secrets Management**: API secrets and datasource configurations containing sensitive information are securely handled. While in View mode, these secrets remain concealed, and although you can update secrets in Edit mode, it is not possible to view the current value of existing secrets, maintaining their confidentiality irrespective of the mode.

- **SQL Injection Protection**: To safeguard against SQL injection attacks, all SQL queries on the Appsmith platform have prepared statements enabled by default. This feature helps prevent unauthorized commands from being executed via user input.

## JavaScript security

Appsmith takes measures to ensure JavaScript security within the platform, but it is important to understand the context in which JavaScript code is executed and accessed.

- **Client-Side Execution**: JavaScript code within an Appsmith app executes on the client's side. This implies that users can use browser tools to inspect and potentially view your JavaScript code. Code visibility is an inherent trait of client-side JavaScript, underscoring the need for caution when dealing with sensitive information.

- **Handling Sensitive Data**: It is critical to avoid embedding sensitive keys or credentials within your JavaScript code in plain text. Best practices for securing client-side code should be implemented.

- **Local Storage Caution**: Utilizing Appsmith's `storeValue()` function to store sensitive information is discouraged. Data stored using this function resides in the browser's local storage and can be inspected by users, posing a security risk.

- **DOM API Exposure**: Direct access to JavaScript DOM APIs is not provided by Appsmith to minimize security risks. However, certain featuressuch as `setInterval()`and `clearInterval()` are offered through similar, global framework functions.

- **Fetch API Specifics**: Although the JavaScript `Fetch` API is supported on Appsmith, it is configured to exclude cookies or session data in requests, further aligning with security protocols.

## Sandboxed Iframe widgets

With the update to version 1.8.6 and beyond, Appsmith has enhanced the security of Iframe widgets through the use of the `sandbox` attribute.

- **XSS Mitigation**: The `sandbox` attribute is enabled by default on Iframe widgets to mitigate the risk of [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. While this may limit certain capabilities, it generally does not interfere with the anticipated functionalities of the Iframe widget in typical use cases.

- **Sandboxing Control**: Administration of the `sandbox` attribute is possible through the `APPSMITH_DISABLE_IFRAME_WIDGET_SANDBOX` environment variable within the `stacks/configuration/docker.env` file of the Appsmith instance. Setting this variable to `true` removes the sandboxing attributes, and hence, should be done judiciously, acknowledging the potential implications for security.

```sh
APPSMITH_DISABLE_IFRAME_WIDGET_SANDBOX=false
```

## Login rate limiting

Rate limiting on password-based login attempts is implemented with the following traits:

- Five consecutive failed login attempts will lock the account of that email address for 24 hours.
- A successful forgot-password flow for that email, will immediately unlock the account for login.

This method allows for a good balance between security, and convenience. Having the lock makes brute-force a lot less feasible, and yet the original owner of the email still has a way to unlock their account when needed.

These security implementations demonstrate Appsmith's commitment to maintaining a secure environment for developers and users alike. By following the guidelines provided, you can contribute to creating secure applications on the Appsmith platform.

:::info
Appsmith maintains an open communication channel with security researchers to report security vulnerabilities responsibly. If you notice a security vulnerability, please email `security@appsmith.com`.
:::