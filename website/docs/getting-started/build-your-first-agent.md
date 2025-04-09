import DownloadButton from '@site/src/components/DownloadButton';

# Build Your First Agent

This tutorial guides you through building a customer support AI agent that can answer FAQs from a knowledge base and retrieve ticket statuses from a database.

## Set Up Your AI Agent

<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/U2wDO3adeI3y4jDN2IyK?embed"
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



1. Open the [Appsmith Agents](https://login.test.appsmithai.com/) Home to view all workspaces and agents. A workspace is a collection of agents where teams can collaborate on building and managing different apps.

2. To create a new agent, click the **Create New** dropdown in the top-right corner of the workspace and select **AI Agents**.

3. When the AI Agent editor opens, you'll see a split layout. The chat widget appears on the right, where you can interact with your agent. On the left, the editor pane allows you to configure how your agent behaves.

<dd> 


By default, you're in the Query tab with a pre-configured AI Chat Query. This is where you can:

- Add knowledge sources, such as uploaded documents or URLs.

- Connect to database queries for function calling, so your agent can perform actions like checking a ticket status.


</dd>


4. Add a **System Instructions** to define how the AI should behave. This prompt guides the AI's responses by setting clear expectations for how it should use the knowledge base and database functions.

<dd> 

Within the prompt, you can explicitly define which queries the AI can call and what kind of data each query expects. 


*Example system prompt:*

```js
This AI assists users with customer support inquiries by retrieving information from the uploaded FAQ document and checking ticket statuses in the PostgreSQL database. Always reference the document before responding. To retrieve ticket status, call the Get_Ticket_Status function with the ticket_id provided by the user. To create a new ticket, use the Create_New_Ticket function with the user's user_id and the issue_type.
```

</dd>

5. In the AI Query Settings, configure the following parameters:

<dd>

- **Model:** Select `gpt-4o` for the best results in understanding and handling customer support queries with speed and accuracy.

- **Temperature**: Set to` 0.3`. This controls the randomness of responses—lower values (e.g., `0.2`) yield more focused, deterministic replies, while higher values (e.g., `0.8`) allow for more varied or creative output.

- **Top-p (Nucleus Sampling):** Set to `0.9`. This determines the cumulative probability mass considered when generating responses, helping strike a balance between reliability and diversity.

- **Re-ranking Model:** Select `JINA` for optimal performance. Re-ranking helps the AI prioritize the most relevant responses when multiple documents or answers are retrieved. 

- **Number of Chunks:** Set to `4`. This defines how the knowledge document is split for retrieval-augmented generation (RAG), ensuring that the AI can access relevant context without losing coherence.

</dd>



6.  In the AI Query, navigate to the **Knowledge Sources** section. This is where you configure the AI's knowledge base, enabling it to retrieve accurate responses from uploaded documents.

7. Click **Add Source**, then select **Import Source**. Choose Local File as the import option. You can also connect to external storage services such as Google Drive, Dropbox, or OneDrive to import documents. 

<dd>

Download the FAQ document provided below and upload it to Appsmith AI to serve as the primary knowledge base for your agent.

<DownloadButton
  fileName="Customer_Support_SLA_Guide.pdf"
  fileUrl="/user-files/Customer_Support_SLA_Guide.pdf"
  description="Download the agent configuration file (used for step 2 setup)"
/>


</dd>

9. After uploading, save the source configuration to enable document-based retrieval.

<dd>

To verify the setup, enter a query in the Chat Widget, such as "What is the refund policy?" or "How long does it take to resolve a ticket?" The AI should generate responses based on the uploaded document. 


</dd>

## Set Up Function Calling

Function calling allows the AI to interact with connected databases and fetch real-time information. In this section, you will connect a PostgreSQL database and configure queries to retrieve ticket status details dynamically based on user input.

<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/KyCIMfHl10U2CJ4xM28b?embed"
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


1. Navigate to the **Data** section, click the **+** icon, and select PostgreSQL. Create a new PostgreSQL database using the following connection details:

<dd>

```js
Host: dpg-cvmgjgje5dus73f5f3tg-a.oregon-postgres.render.com
Port: 5432
Database: customer_support_db
Username: admin
Password: Jfy1wkrukPb5n4QMS3o5A0Ju7vx3uvjO
```

This datasource will be used to retrieve real-time data during AI interactions, such as checking the status of support tickets.

</dd>

2.  Create a new query (`Create_New_Ticket`) that allows the AI to add a new support ticket to the database based on user input:

<dd>

```sql
INSERT INTO tickets (user_id, issue_type, status, created_at) 
VALUES ({{this.params.user_id}}, {{this.params.issue_type}}, 'Open', NOW()) 
RETURNING ticket_id;
```

This query inserts a new ticket into the tickets table. The `{{this.params.user_id}}` and `{{this.params.issue_type}} `placeholders allow dynamic values to be passed at runtime, enabling function calling to create tickets based on user input.


</dd>

3. Create a new query (`Get_Ticket_Status`) to retrieve the current status of a specific support ticket:


<dd>

```sql
SELECT ticket_id, user_id, issue_type, status, created_at, updated_at 
FROM tickets 
WHERE ticket_id = {{this.params.ticket_id}};
```

This query fetches ticket details based on the provided `ticket_id`. The `{{this.params.ticket_id}}` placeholder ensures that the AI dynamically retrieves information based on user input.

</dd>

4. Navigate to Chat Query and add both functions (`Create_New_Ticket` and `Get_Ticket_Status`) to enable AI-driven database interactions. If required, enable Requires Approval to review and approve database actions before execution, ensuring control over ticket creation and retrieval.

5. Once configured, save the query to make it available for AI function calling.


<dd>

You can now test the integration by entering prompts in the chat, such as "Fetch details of ticket 2" or "John P is having an issue with payment. Create a new high-priority ticket."
</dd>


## See also

- [Set Up the AI Agents Chrome Extension](/build-agents/how-to-guides/embed-agents): Learn how to install and configure the Chrome extension to use AI agents across web applications.
- [Appsmith AI Integration](/build-agents/overview): Understand how to integrate Appsmith with AI features for chat-based data interaction and function calling.