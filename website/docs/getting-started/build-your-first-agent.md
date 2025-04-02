import DownloadButton from '@site/src/components/DownloadButton';
import CalloutCard from "@site/src/components/CalloutCard";

# Build Your First Agent

This tutorial guides you through building a customer support AI agent that can answer FAQs from a knowledge base and retrieve ticket statuses from a database.

<CalloutCard  
  text={`This tutorial takes approximately 30-45 minutes to complete.`}  
  tag="Estimated Time"  
/>  


1. Open the Appsmith Home to view all workspaces and agents. A workspace is a collection of agents where teams can collaborate on building and managing different apps.

2. To create a new app, click the **Create New** dropdown in the top-right corner of the workspace and select **AI Agents**.

3. The editor opens with a default layout:


<dd> 


The Editor Pane includes:

</dd>




4. Add a **System Prompt** to define how the AI should behave. The prompt provides instructions to guide AI responses based on the uploaded knowledge base and function calling setup.

<dd> 

Example system prompt:
"This AI assists users with customer support inquiries by retrieving information from the uploaded FAQ document and checking ticket statuses in the PostgreSQL database. Always reference the document before responding and call the database function when asked about ticket status."

</dd>

5. In the AI Query Settings, configure the following parameters:

<dd>

- **Model:** Select gpt-4o for optimal performance in understanding and responding to customer queries.

- **Temperature**: Controls the randomness of responses.

    - Lower values (e.g., 0.2) make responses more predictable.

    - Higher values (e.g., 0.8) introduce more creativity.

    - Set to 0.3 for this lesson to keep responses accurate and consistent.

- **Top-p (Nucleus Sampling):** Determines the probability mass used for response generation.

    - Set to `0.9` to balance creativity and reliability.

- **Re-ranking Model:** Helps prioritize the most relevant responses when multiple answers exist.

- **Number of Chunks:** Defines how the document is split for retrieval-augmented generation (RAG).

    - Set to `4` to optimize retrieval while keeping context intact.

</dd>



6. In the AI Query, go to the Sources section. This source acts as the AI’s knowledge base, allowing it to retrieve accurate responses.

7. Click Add Source, then select Import Source. Choose Local File as the import option.

<dd>

Download the FAQ document below and upload it to Appsmith AI:



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

## Retrieve Ticket Status with Function Calling

Function calling enables the AI to query a connected database for real-time ticket status updates. In this section, you will configure a PostgreSQL database and set up queries for retrieving ticket details.

1. Go to the Data section and create a PostgreSQL database with the following details:

<dd>

```js
Host: dpg-cvmgjgje5dus73f5f3tg-a
Port: 5432
Database Name: customer_support_db
Username: <your_username>
Password: <your_password>
```

</dd>

2. Create a new query (`Create_New_Ticket`) to add a support ticket to the database:

<dd>

```sql
INSERT INTO tickets (user_id, issue_type, status, created_at) 
VALUES ({{this.params.user_id}}, {{this.params.issue_type}}, 'Open', NOW()) 
RETURNING ticket_id;
```

This query inserts a new ticket into the tickets table. The `{{this.params.user_id}}` and `{{this.params.issue_type}} `placeholders allow dynamic values to be passed at runtime, enabling function calling to create tickets based on user input.


</dd>

3. Create a new query (`Get_Ticket_Status`) to retrieve the status of a specific ticket:

<dd>

```sql
SELECT ticket_id, user_id, issue_type, status, created_at, updated_at 
FROM tickets 
WHERE ticket_id = {{this.params.ticket_id}};
```

This query fetches ticket details based on the provided `ticket_id`. The `{{this.params.ticket_id}}` placeholder ensures that the AI dynamically retrieves information based on user input.

</dd>

4. Navigate to Chat Query and add both functions (`Create_New_Ticket` and `Get_Ticket_Status`) to enable AI-driven database interactions. If required, enable Requires Approval to review and approve database actions before execution, ensuring control over ticket creation and retrieval.







