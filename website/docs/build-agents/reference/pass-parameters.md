# Pass Parameters

This page explains how to pass parameters to queries, JavaScript functions, and UI widgets in an Appsmith AI Agent. By defining flows in the system instructions, you can dynamically inject parameters at runtime from user input or other data sources.


## Pass Parameters to Queries

To dynamically pass parameters into a query, use the `this.params` syntax within your SQL query. This allows your queries to receive runtime values from AI-driven workflows or user input during conversations.

The AI agent automatically maps input values to these parameters, as long as the execution flow and expected parameter names are clearly defined in the System Instruction of the Chat Query.

Whenever `this.params.<paramName>` is used inside a query, the AI agent will identify and supply the correct value, provided the prompt defines what data to collect or derive from the user or previous steps.


#### Syntax

```js
this.params.<paramName>
```

#### Example

To fetch product details by name or SKU:

```sql
SELECT * FROM users.inventory_items
WHERE name = {{this.params.name}} OR sku = {{this.params.sku}};
```

**Notes**

- Ensure each parameter (name, sku, etc.) is clearly mentioned in the system prompt.

- You do not need to manually bind or inject these values; the AI agent handles this automatically at runtime.

- This pattern enables queries to be reused across multiple conversations or scenarios, with data passed dynamically based on user input or context.

## Pass Parameters to JavaScript Functions

To dynamically pass data into JavaScript functions, define your function with standard arguments (e.g., name, stock, threshold). The AI agent automatically passes these values at runtime based on the execution flow described in the System Instruction.

Unlike queries, JavaScript functions do not use this.params. Instead, values are passed directly as arguments. You can use these functions to apply business logic, transform data, or control widget behavior after a query runs.

#### Syntax

```js
export default {
  functionName(param1, param2) {
    // logic using param1 and param2
  }
}
```

#### Example

To check whether a product should be restocked:

```JS
export default {
  checkAndRestock(stock, restock_threshold) {
    if (stock < restock_threshold) {
      return `Stock is low (${stock}). Please restock.`;
    } else {
      return `Stock is sufficient (${stock}). No restock needed.`;
    }
  }
}
```

**Notes**

- Define the required arguments in the system prompt so the AI knows which values to pass.

- You can pass raw user input or use query results as arguments to your function.

- This approach makes it easy to build reusable logic and AI-powered workflows without manually wiring inputs.

## Pass Parameters to UI Widgets

To dynamically update UI widgets such as inputs, text fields, or dropdowns, use the widget’s setter methods (e.g., `setText`, `setValue`) and pass parameter values directly. These values can come from user input, query results, or the output of a JavaScript function.

When the flow is described in the System Instruction, the AI agent automatically populates or updates the relevant widget using the appropriate method with the given parameter.

#### Syntax

```js
widgetName.setText(value);
```

#### Example

To set the product name in an input field:

```js
input1.setText(product_name);
```

**Notes**

- Parameter values must be accessible in the agent’s flow (e.g., extracted from user input or query response).

- You can refer to the [widget reference](/build-agents/widgets/overview) to see the full list of available setter methods for each widget.

- Ensure the system prompt clearly describes when and how the widget should be updated, so the AI understands the sequence of actions.