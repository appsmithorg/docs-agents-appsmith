# Pass Parameters to Queries and JS Functions

This guide explains how to pass parameters to queries and JavaScript functions using `this.params`. This enables dynamic data to be provided at runtime, allowing live AI agents or user interactions to send relevant inputs into queries and logic functions as part of a conversation or workflow.

1.  Open the Agent where you want to use dynamic parameters.

2. Create a new Query to fetch data from your datasource.

<dd>

- To **pass data from the AI chat** into JS function or queries, include the relevant context or variables in the system prompt. The AI will automatically send this data as parameters.
- To **access those parameters** inside the query, use the `this.params.<paramName> `syntax.


*Example:* To fetch product details by name or SKU, use a query like:


```sql
SELECT * FROM users.inventory_items
WHERE name = {{this.params.name}} OR sku = {{this.params.sku}};
```

</dd>

3. Create a new JSObject from the editor pane to handle business logic on the data returned by the query.

<dd>

- To **pass data from the AI chat** to this function, define the parameters in the system prompt of the agent.

- To **access the passed parameters** inside the function, use standard function arguments (e.g., `stock`, `restock_threshold`).

- To use the query results as input for the JS function, update the system prompt to instruct the agent to run the function after the query executes successfully. 

*Example:* A function to check whether the product should be restocked based on current stock:

```js
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


</dd>

4. Update the **System Instruction** field inside the Chat Query.

<dd>

- In the system prompt, mention the query name and what parameters it expects. This helps the agent call the query with correct input.

- After the query, specify the JavaScript function that should run using the query’s response. The agent will automatically pass relevant fields from the result to the function.

- Clearly describe the flow so the agent understands the sequence: first run the query, then run the JS function with specific fields.

*Example:*

```
You are a product inventory assistant.

When the user provides a product name or SKU, run the productQuery to fetch inventory details.

Once the query is successful, extract the stock value from the result and run the checkAndRestock function, passing the stock and a restock threshold of 10 as arguments.

Return the output of the function as your response to the user.
```

</dd>


5. Add the Query module and JSObject as **Function sources** in the Chat Query configuration and click Save.

