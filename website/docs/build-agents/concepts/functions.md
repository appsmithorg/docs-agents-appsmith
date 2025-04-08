---
title: Function Calls
description: Learn how Appsmith agents can call queries and JavaScript functions
tags: [agents, functions, integrate]
---

# Function Calls

Appsmith agents are capable of calling two types of functions to perform operations and interact with data:

1. **Queries**: For data operations and integrations with external systems
2. **JavaScript Functions**: For implementing business logic and complex workflows

## Query Functions

Queries in Appsmith are used to interact with data sources, including:

- REST APIs
- Databases (SQL, NoSQL)
- GraphQL endpoints
- Other supported data integrations

When an agent needs to retrieve, create, update, or delete data, it can invoke query functions that you've configured in your application.

### Use Cases for Query Functions

- Fetching data from a database
- Sending data to an external API
- Performing CRUD operations on your data sources
- Integrating with third-party services

## JavaScript Functions

JavaScript functions serve as business logic wrappers in Appsmith. They allow you to:

- Process data
- Chain multiple operations
- Implement complex business rules
- Orchestrate the execution of multiple queries

JavaScript functions can call other functions and queries, making them powerful tools for creating sophisticated workflows.

### Use Cases for JavaScript Functions

- Data transformation and manipulation
- Conditional logic implementation
- Error handling
- Multi-step processes that involve several queries

## Passing Parameters

### Parameters for Queries

Parameters can be passed to queries using the mustache syntax. You define the parameter in the query field as:

```javascript
{{this.params.paramName}}
```

The parameter definition should be configured in the Agent's query function description field to provide proper documentation for the AI.

For example, in a SQL query:

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

Like with queries, these parameters should be described in the function description field to help the agent understand how to use them correctly.

## Important Considerations

1. **Save Changes**: All modifications to JS and Query functions must be saved before they can be used by agents.

2. **Function Description**: Provide clear and comprehensive descriptions for your functions to help the agent understand when and how to use them.

3. **Error Handling**: Implement proper error handling in your functions to ensure robust operation of your agent-powered features.

4. **Parameter Types**: Be explicit about the expected parameter types in your function descriptions to prevent type-related errors.

5. **Testing**: Test your functions thoroughly before making them available to agents to ensure they work as expected.

## Best Practices

- Keep functions focused on a single responsibility
- Use descriptive names for functions and parameters
- Document parameter requirements clearly in function descriptions
- Handle errors gracefully to provide meaningful feedback
- Organize related functions logically to improve maintainability
