---
title: Function Calling
description: Learn how Appsmith agents can call queries and JavaScript functions
---


# Function Calling

This concept page explains what these functions are, how they differ, and the key ideas behind how they work in agent-powered applications.


## What Are Function Calls?

Agents in Appsmith can interact with your application logic through two primary types of function calls:

- **Query Functions** – for interacting with external systems and data sources.

- **JavaScript Functions** – for implementing business logic and workflows.

## Query Functions

Query functions are operations that allow agents to interact with external systems and data sources in Appsmith. These functions are typically used to retrieve, send, or manipulate data and are defined using Appsmith's built-in query editors.

They form the foundation for external communication in agent-driven workflows, enabling access to APIs, databases, and third-party services.

Query functions can connect to a variety of data sources, including:

- **REST APIs** — for sending HTTP requests to external services.

- **SQL and NoSQL Databases** — such as PostgreSQL, MySQL, MongoDB, etc.

- **GraphQL Endpoints** — for querying or mutating structured APIs.

- **Third-party Integrations** — including services like Stripe, Twilio, or SendGrid.

When an agent needs to retrieve, create, update, or delete data, it can invoke query functions that you've configured in your application.

#### Use Cases

Agents may invoke query functions in a wide range of scenarios, including:

- Retrieving a list of users from a database.
- Submitting form data to an external API.
- Filtering product listings based on search criteria.
- Creating a new order record in a backend system.
-  Fetching shipping status from a third-party logistics service.

## JavaScript Functions

JavaScript functions in Appsmith allow you to define and execute business logic directly within your application. These functions are written inside JS Objects and provide a flexible way to orchestrate logic, transform data, and coordinate multiple queries or operations.

They are essential when workflows require conditional logic, multiple steps, or integration between data sources and UI behaviors.

JavaScript functions can:

- Call one or more query functions.
- Perform data transformations and formatting.
- Execute conditional logic based on input or context.
- Manage control flow (e.g., retries, delays, branching).
- Handle errors gracefully using try-catch blocks.
- Interact with widgets, modals, or application state.


#### Use Cases for JS Functions

Agents may rely on JavaScript functions when:

- Formatting API response data before displaying it.
- Executing different queries based on user roles or input.
- Combining multiple queries to create a step-by-step flow.
- Validating form data before sending it to a backend.
- Handling errors from queries and showing user-friendly messages.

## Passing Parameters

Parameters allow functions to behave dynamically based on context, input, or user interaction. In Appsmith, both Query Functions and JavaScript Functions support parameterization to make them reusable and adaptable.

Parameters are critical in enabling agents to invoke functions correctly, with the appropriate values at runtime. Instead of hardcoding values, parameters allow functions to:

- Accept dynamic input
- Personalize logic per user or context
- Reuse the same function across multiple workflows
- Respond to real-time data or user interactions

### Parameters for Queries

Query parameters enable the dynamic construction of API calls or database queries. These are typically referenced using mustache syntax:


```javascript
{{this.params.paramName}}
```

- Use `{{this.params.<paramName>}}` to reference parameters inside queries.

- Define expected parameters clearly in the function description so the agent understands what inputs are required.

- Parameters are passed when calling the query at runtime.

*Example*:

```sql
SELECT * FROM users WHERE id = {{this.params.userId}}
```

### Parameters for JavaScript Functions

For JavaScript functions, parameters are defined as standard function arguments:

```javascript
export default function getUserDetails(userId, includeOrders) {
  // Function logic here
}
```

- Use standard function arguments to define parameters.

- Document parameter names and types in the function description to guide agent usage.

- Parameters are passed directly when calling the function.
