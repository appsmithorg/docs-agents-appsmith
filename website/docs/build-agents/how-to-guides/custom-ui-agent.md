# Create Custom UI Agent

This guide shows how to create a Custom UI Agent using JSObject in Appsmith. This approach allows you to fetch data, display it in a modal, and take actions based on user input. 


1. Open your Appsmith Agent and connect to the necessary datasources.

2. Create a new query to fetch the relevant data. 


<dd>

*Example*: If you want to fetch a Zendesk ticket, create a query to get the ticket by ID and set the ticket ID as:

```js
{{this.params.ticket_id}}
```

`this.params.ticket_id` refers to the dynamic ticket ID passed to the query at runtime.

</dd>

3. Navigate to the **UI** tab, and drag a [**Modal**](/build-agents/widgets/reference/modal) widget onto the canvas. Add the necessary widgets to the modal based on your requirements. 

<dd>

*Example*: If you want to display the ticket issue summary, drag two [Text](/build-agents/widgets/reference/multilineInput) widgets onto the modal.

</dd>

4. Set the **OnClick** event of the Submit button in the Modal to create an issue when the button is clicked.

<dd>

**Example:** To create a Jira ticket when the submit button is clicked, you can use the following code:

```js
{{create_jira_ticket.run().then(() => {
  showAlert('Successfully created a Jira ticket!', 'success');
});}}
```



</dd>

5. Create a new JSObject to handle the logic of setting the modal values and opening the modal. 


<dd>

*Example:* To display the modal with the ticket summary and description before creating an issue, create a JSObject function like the following:

```javascript
export default {
    async showSuggestedAction(summary, description) {
        summary_input.setValue(summary);  // Set the summary text
        description_input.setValue(description);  // Set the description text
        showModal('ActionModal');  // Open the modal
        return "A modal has been opened with the suggested action for review.";  // Return confirmation message
    }
}
```

</dd>

6. Create a new query to create or update the data after the modal is submitted.

<dd>

*Example:* To create a new Jira ticket, create a query using the `create_issue` command and set the summary and description from the modal input values:

```js
summary: summary_input.text,
description: description_input.text
```

</dd>

7. Navigate to the Chat Query, update the system prompt. This allows you to automate ticket handling and task creation.

<dd>

*Example:* Update the system prompt to guide the system in fetching ticket details and creating issues. Add the necessary function calls to integrate ticket fetching and Jira ticket creation.

```js
Assist customer support teams in resolving Zendesk issues by fetching the ticket details, understanding the issue, consulting documentation, suggesting a clear response, prompting the user to send the response via Zendesk, and recommending Jira ticket creation for the engineering team. Fetch the Zendesk ticket, understand the issue, consult documentation, suggest a response, prompt the user to send the response via Zendesk, and recommend Jira ticket creation for the engineering team.
```

</dd>

8. Add the necessary function calls to the chat query.

<dd>

*Example:*

- `fetch_ticket`: Fetches a specific ticket from Zendesk based on the ticket ID.

- `jira.createIssue`: Opens a modal to show the summary and description for creating a Jira ticket.



 <ZoomImage
    src="/img/jira-agent.png" 
    alt=""
    caption=""
  /> 

</dd>

Now, when a user prompts "create a new ticket," the Modal will display the summary and description of the ticket. Once the Submit button is clicked, a new ticket will be created.








