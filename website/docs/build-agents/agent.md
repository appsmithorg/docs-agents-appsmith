---
title: Chat Query
hide_title: true
toc_max_heading_level: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Chat Query</h1>
</div>

<!-- vale on -->
This page provides information on the agent query and how you can configure it to fine tune your agent and provide it with context.

#### System Instructions

<dd>

The System Instructions property enables you to define specific behaviors and guidelines for the AI assistant, ensuring its responses align with your requirements. 

You can use the Generate Instructions button to automatically create a starting set of instructions based on your current chat context and app setup. These can then be customized further as needed.

You can also use System Instructions to provide context about the flow, expected inputs, and data types. Based on this context, the AI can automatically extract relevant values from user prompts, populate this.params, and trigger the appropriate query or function.


</dd>

#### Model

<dd>

The Model dropdown allows you to select the AI model to use for processing the chat prompt. Different models offer varying levels of performance, speed, and capability depending on the complexity of your use case.

Choosing the right model depends on the required response quality and system performance. If your application requires basic text generation or short responses, a lower-tier model may be sufficient. For more advanced use cases like summarization, multi-turn conversations, or data-driven assistance, higher-tier models are recommended.

</dd>

#### Temperature

<dd>

The Temperature parameter controls the randomness or creativity of the AI's responses. It accepts a numeric value ranging from 0 to 2.

- A lower value (e.g., 0) results in more focused, predictable, and deterministic outputs. This is ideal for factual, structured, or repetitive tasks where consistency is important.

- A higher value (e.g., 1.5 – 2) produces more creative, diverse, and open-ended responses, which may be useful for brainstorming, storytelling, or idea generation.

</dd>


#### Top p

<dd>

The Top P parameter (also known as nucleus sampling) controls the diversity of the AI’s responses by limiting the selection of next-word candidates to a subset of the most probable options.

It accepts a numeric value between 0 and 1:

- A lower value (e.g., 0.1) restricts the output to only the top most likely tokens, making responses more focused and deterministic.

- A higher value (e.g., 0.9 – 1) allows a wider range of possible outputs, increasing creativity and variability in the responses.

Top P is often used in conjunction with Temperature. While both influence randomness, Top P provides a probabilistic cutoff, whereas Temperature adjusts the sharpness of probability distribution. In most cases, adjusting one of the two is sufficient.

</dd>

#### Re-ranking model

<dd>

The Re-ranking Model setting determines how retrieved documents or contextual chunks are evaluated and ordered before being passed to the AI model. This is especially useful when working with file uploads or knowledge base applications where relevance ranking impacts the quality of responses.

Available options:

- **Cohere**: Uses Cohere’s re-ranking model to score and reorder the most relevant document chunks based on semantic similarity to the user's input. This enhances response accuracy when multiple documents are involved.

- **Jina**: Utilizes Jina AI’s re-ranking capabilities, which apply deep learning techniques to prioritize the most relevant content. Ideal for use cases requiring strong contextual alignment, such as AI support bots or content summarization.

- **None**: Disables re-ranking. Documents are processed in their original order of retrieval. This may be faster but can reduce the relevance of the AI-generated response if many sources are involved.


</dd>


#### Number of chunks

<dd>

The Number of Chunks setting determines how many document or file chunks are retrieved and passed to the AI model as context during prompt execution. This is applicable when files are uploaded to enhance the assistant’s understanding of domain-specific information.

- A lower value (e.g., 1–5) limits context to only the most relevant chunks, improving performance and reducing token usage.

- A higher value (e.g., 15–20) includes more supporting content, which may improve accuracy for complex queries but could increase response time or cost.

</dd>

#### Knowledge Source

<dd>

You can add sources from the Appsmith AI Knowledge Base, which provides contextual information to enhance the accuracy and relevance of AI responses. These sources serve as reference material for the AI assistant when generating responses to user queries.

Appsmith AI allows you to connect various types of knowledge sources, including:

- **File Uploads:** Add PDFs, Word documents, text files, and more.

- **Web Links:** Provide URLs to publicly available content for AI to reference.

- **Connected SaaS Tools:** Integrate with external tools such as Google Drive, Notion, Confluence, Jira, and others. This allows the assistant to access real-time or stored content from your organization’s systems.

You can select one or more knowledge sources based on your use case. 

*Example:*

- Select a Google Drive folder for a document-based assistant.

- Add Jira as a source if the AI needs access to support tickets or engineering tasks.

- Upload an internal training manual to help the AI guide new employees.

</dd>


#### Function calls

<dd>

The Function Calls feature allows you to extend the AI assistant’s capabilities by connecting it to custom backend logic. This enables dynamic, actionable experiences where the assistant can trigger application logic in response to user intent.

You can associate one or more Appsmith functions—such as queries, APIs, or JavaScript objects—with the AI agent. When a user initiates a request like “Check ticket status” or “Update user profile,” the assistant can intelligently call the appropriate function and return the result directly in the chat interface.

This functionality empowers developers to build AI agents that go beyond simple Q&A by actively interacting with business data and services. Whether you are creating a customer support assistant, an internal operations bot, or a data retrieval tool, function calls allow the assistant to bridge user input with actionable outcomes—offering a intelligent application experience.


*Example:* Zendesk Ticket Assistant

Consider an AI assistant designed to help users with Zendesk ticket inquiries. You can configure the assistant to run two backend queries to fetch and display ticket details based on user input.

- Prompt example:

```
Can you show me the details of ticket ID 498?
```


- Function calls setup:

Query 1: `getTicketDetails`

<dd>

```sql
SELECT * FROM zendesk_tickets WHERE ticket_id = {{ this.params.id }}
```

</dd>

Query 2: `getTicketComments`

<dd>

```sql
SELECT * FROM zendesk_comments WHERE ticket_id = {{ this.params.id }}
```

</dd>

Execution flow:

1. The assistant extracts 498 from the prompt and assigns it to this.params.id.

2. Both queries are triggered using this dynamic parameter.

3. The results—ticket metadata and user comments—are returned in the assistant’s response.

</dd>
