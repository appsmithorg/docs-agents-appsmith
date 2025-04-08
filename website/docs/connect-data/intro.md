import BuildHomeCards from '@site/src/components/BuildHomeCards';

# Overview


Appsmith Agents become truly powerful when connected to your data. By combining large language models (LLMs) with both unstructured and structured data sources, agents can provide intelligent, context-aware responses and take real-time actions within your applications.

Agents in Appsmith gain context and capability through two primary methods:

- **Knowledge Sources** – for accessing unstructured data like documents and webpages

- **Function Calling** – for interacting with structured data such as APIs and databases


## Knowledge Sources

Knowledge Sources enable your agent to access and understand unstructured data such as files, websites, and cloud-based documents. Appsmith uses Retrieval-Augmented Generation (RAG) to allow the agent to retrieve relevant content and include it as context in its responses.

When a knowledge source is connected, its content is automatically chunked, indexed, and stored in a vector database. This enables the agent to efficiently retrieve and reason over the most relevant pieces of information based on the user’s query.

Initial indexing may take some time. Once completed, the agent can access the knowledge source instantly during runtime.


<BuildHomeCards
  cards={[
    {
      title: "View Supported Sources",
      description: "Explore the types of documents, databases, and URLs you can connect as knowledge sources.",
      link: "/connect-data/overview",
      className: "tutorials",
    },
  ]}
/>


## Function Calling

Function Calling enables your agent to perform actions and retrieve real-time information by calling APIs, triggering queries, or executing backend functions. This feature is ideal for structured, transactional, or time-sensitive data needs.

Agents can call any API using Appsmith’s built-in REST API or GraphQL integrations, and also work with databases and external services to support a variety of workflows.

- With function calls, agents can:
- Query live business data
- Submit forms and create records
- Trigger workflows like sending emails or notifications

<BuildHomeCards
  cards={[
    {
      title: "View Supported Integrations",
      description: "Discover all supported backend actions your agent can trigger using function calls.",
      link: "/connect-data/overview",
      className: "guides",
    },
  ]}
/>
