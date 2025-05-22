import DownloadButton from '@site/src/components/DownloadButton';

# Build Your First Agent

In this tutorial, you'll learn how to build your first AI agent using Appsmith Agents. By the end, you'll have created a Project Management Assistant that integrates with Jira to help teams analyze issues, generate status reports, and draft responses to stakeholders.

:::tip ⏳ Estimated Time: 10 minutes
By the end of this tutorial, you will learn to:

- Set up function calling using an API (e.g., order or ticket status).
- Create and test a basic RAG (Retrieval-Augmented Generation) agent.
:::

## Set Up Your AI Agent

<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/bbndcJQPApcNzmatoQoR?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>



1. Open your Appsmith Agent if you already have access.

<dd>

If you are not yet signed up, visit [login.appsmith.com](https://login.appsmithai.com), enter your organization name and domain to create your workspace (e.g., `org-name.appsmithai.com`).

</dd>

2. Click the **Create Agent** button in the top-right corner. Select **Create from Scratch** to begin building a new agent. 


3. Once the agent is created, a setup modal will appear.



<dd>

This modal contains two primary tabs: **Actions** and **Knowledge Sources**. These tabs allow you to define how the agent interacts with external systems and how it retrieves contextual information.


- **Actions**: You can connect to different SaaS tools that allow the agent to perform actions like creating or updating tickets, sending messages, or managing tasks. These connected tools act as function calls the agent can trigger during a conversation. When added from this modal, Appsmith automatically creates queries for common operations like create, update, and delete. If you want to connect other tools, you can do so anytime from the Datasource panel in the editor.

- **[Knowledge Sources](/connect-data/overview)**: You can upload documents or sync external content that the agent can reference while responding. Supported options include uploading files (up to 20MB each), syncing up to 1000 web links, or connecting with platforms like Notion or OneDrive. The agent will search these sources to provide accurate, grounded answers based on the content.

</dd>

4. Click on **Jira** from the **Actions** tab in the setup modal. In the connection options, select **Connect with OAuth**.

<dd>

Use the following details to complete the connection:

- **Email:** `docs+jira@appsmith.com`

- **Password:** `w9k6kJX2G*aRYJS`

- **Site URL:** `https://appsmith-docs-team.atlassian.net`

Once connected, Appsmith will automatically generate a set of queries for this Jira instance.

</dd>


5. Define the system prompt for your agent. This prompt instructs the AI on how it should behave, what tools it can use, and how to interpret user inputs.

<dd>

You can write your own prompt or click **Generate System Prompt** to auto-generate one based on your current setup.

```js
This AI assists users with support-related tasks by referencing the uploaded FAQ document and interacting with Jira. To create a new issue, call the Create_Issue function using the summary, description, and issue_type provided by the user. To retrieve ticket details, use the Get_Issue_By_ID function with the ticket_id. Always use the knowledge source to answer general questions, and call Jira functions only when the user explicitly asks to create or check a ticket.
```

See [How to Configure Chat Query](/build-agents/agent).


</dd>

6. Click **+ New Function** and select Create Query. Choose the Jira datasource you connected earlier, and rename the query to `Create_Issue` for clarity and easy reference in the agent.

7. Select the **Create Issue** command to pass data from the AI to Jira using `{{this.params.name}}` for each input field. This enables the agent to dynamically send values like summary and issue type during a conversation.

<dd>

Configure the query inputs using `{{this.params}}` to make the values dynamic:

- **Summary**: `{{this.params.issue}}`

- **Issue type**: `{{this.params.issue_type}}`

</dd>

8. Add a description for the function:

<dd>

```js
This function creates a new issue in Jira. It accepts parameters—summary —provided by the user during the conversation.
```

</dd>

9. Once configured, save the query to make it available for AI function calling.

<dd>

You can now test the integration by entering prompts in the chat, such as:
"John P is having an issue with payment. Create a new high-priority ticket."

</dd>



## See also

- [Set Up the AI Agents Chrome Extension](/build-agents/how-to-guides/embed-agents): Learn how to install and configure the Chrome extension to use AI agents across web applications.
- [Appsmith AI Integration](/build-agents/overview): Understand how to integrate Appsmith with AI features for chat-based data interaction and function calling.