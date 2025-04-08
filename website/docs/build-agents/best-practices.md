# Best Practices for Building Agent

When developing AI agents, it's essential to adopt clear, reliable, and consistent design practices. Agents rely on well-defined instructions, predictable behavior, and robust underlying functions to deliver effective outcomes.

This document outlines foundational guidelines for building scalable and maintainable agents.

### Provide Clear Descriptions

Agents rely on function descriptions to understand when and how a function should be used.

- Write concise, purpose-driven descriptions.
- Clearly list all parameters and their expected types (e.g., `String`, `Number`, `Boolean`).
- Mention the function's return value and any known side effects (e.g., sending an email, writing to a database).

<dd>

**Avoid:** Descriptions that are too vague, incomplete, or missing.

```js
// Description: Fetch data
```

**Use:** Descriptions that state the purpose, inputs, and output clearly.

```js
// Description: Sends a password reset email to a user.
// Parameters:
// - email (String): The user's email address.
// Returns: Boolean indicating whether the email was sent successfully.
```

</dd>

### Be Explicit with Parameters

Clear parameter definitions help prevent misuse and make the function agent-friendly.

- Use descriptive names for parameters.
- Specify data types and required vs. optional inputs.
- Add default values where appropriate.

<dd>

**Avoid:** Generic or unclear parameter names.

```js
function update(u, d) {
  // ...
}
```

**Use:** Descriptive names and types.

```js
function updateUserData(userId: String, data: Object) {
  // ...
}
```

</dd>




### Handle Errors Gracefully

Functions should anticipate and handle potential errors to avoid interrupting agent workflows.

- Use `try/catch` blocks where appropriate.
- Validate inputs before processing.
- Return consistent error messages and fallback values.

<dd>

**Avoid:** Letting exceptions halt the agent flow.

```js
function sendEmail(email) {
  emailService.send(email); // No error handling
}
```

**Use:** Error handling with input validation.

```js
function sendEmail(email) {
  if (!email) return { success: false, message: "Missing email" };

  try {
    emailService.send(email);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
```

</dd>

### Keep Functions Focused

Functions should follow the Single Responsibility Principle — doing one thing well.

- Avoid combining unrelated logic in one function.
-  Break complex operations into smaller, reusable parts.

<dd>

**Avoid:** Combining multiple operations in a single function.

```js
function registerUserAndNotify(user) {
  db.insert(user);
  emailService.send(user.email);
}
```

**Use:** Separate functions for independent tasks.

```js
function registerUser(user) { ... }
function notifyUser(email) { ... }
```

</dd>


### Save Changes Before Use

Agents can only access the latest saved version of your function. Click "Save" in the editor after any modification.

Ensure that no unsaved changes remain before assigning a function to an agent workflow.
