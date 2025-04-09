# Trigger Multiple Queries 

This guide shows how to create a multi-step workflow using a JSObject in Appsmith, which allows you to call multiple queries in sequence and return a single final result. This is useful when you need to combine logic like looking up data, checking conditions, and returning a message or triggering an action all from one function.


1. Open your Appsmith Agent and connect to the required datasource.

2. Create queries to fetch and process the required data.

<dd>

*Example:* If you want to create an agent that checks product availability and restock info, create these queries:

- `searchProduct` — Find the product by name

- `getInventoryBySku` — Fetch stock level using SKU

- `getRestockETA` — Get the expected restock date for that product


Make sure each query accepts dynamic inputs using this.params, such as `{{ this.params.name }}` or `{{ this.params.sku }}`, so they can be reused inside a JSObject.

</dd>


3. Create a new JSObject to build your workflow logic. This allows you to run multiple queries in order, handle conditions, and return a single final response.

<dd>

*Example:* For the product inventory assistant, create a function like this:

```js
export default {
  async checkInventory(productName) {
    // Step 1: Search for the product by name
    const product = await searchProduct.run({ name: productName });
    const item = product?.[0];

    // Step 2: If product not found, return a message
    if (!item) return `"${productName}" not found.`;

    // Step 3: Extract SKU and name from the result
    const { sku, name } = item;

    // Step 4: Get current stock level using SKU
    const stockInfo = await getInventoryBySku.run({ sku });
    const stock = stockInfo?.[0]?.stock || 0;

    // Step 5: If stock is available, return that info
    if (stock > 0) {
      return `${name} is in stock — ${stock} units available.`;
    }

    // Step 6: If out of stock, get expected restock date
    const restock = await getRestockETA.run({ sku });
    const eta = restock?.[0]?.expected_date;

    // Step 7: Return restock info, if available
    return eta
      ? `${name} is out of stock. Restock expected by ${moment(eta).format("MMMM D")}.`
      : `${name} is out of stock and no restock date is available.`;
  }
};
```

</dd>


4. Update the system prompt in your chat query to trigger the JSObject based on user input.

<dd>

*Example:*

```js
You are a product inventory agent.

When the user asks about a product's availability, follow this flow:

1. Call the function `checkInventory(productName)` from the `inventoryAgent` JSObject, using the product name mentioned by the user.

2. Based on the returned response:
  - If the product is in stock, return the message as is (e.g., "MacBook Pro is in stock — 12 units available.").
  - If the product is out of stock with a restock date, return that (e.g., "MacBook Pro is out of stock. Restock expected by April 15.").
  - If the product is out of stock with no restock info, return that too (e.g., "MacBook Pro is out of stock and no restock date is available.").
  - If the product is not found, let the user know (e.g., "MacBook Pro not found.").
```

</dd>
