# Overview

Appsmith Agents become powerful and intelligent when they're connected to your data. Agents gain context and capabilities through two primary methods:

1. **Knowledge Sources (for unstructured data)**
2. **Function Calling (for structured data)**

## Knowledge Sources

Knowledge sources enable your Appsmith Agents to access and understand unstructured data from files, documents, or websites. Using Retrieval-Augmented Generation (RAG), knowledge sources chunk and index content into a vector database, allowing the agent to retrieve relevant context whenever users ask questions.

Keep in mind, when you first connect a knowledge source, Appsmith Agents may take some time to sync data to the vector database. Once synced, agents can seamlessly access and utilize the information.

### Supported Knowledge Sources:

- Local File Upload
- Website Scraping
- Google Drive
- Notion
- Dropbox
- Box
- Confluence
- OneDrive

## Function Calling

Function calling enables Appsmith Agents to interact directly with structured data sources like APIs and databases. Agents can fetch real-time information or trigger actions across various services, integrating seamlessly into your workflows.

With Appsmith, you can connect to any API using the built-in REST API plugin or leverage ready-to-use integrations with popular SaaS services.

### Supported SaaS Integrations:

- Slack
- Salesforce
- Zendesk
- Jira
- Gmail
- Google Sheets
- Airtable
- Twilio
- Asana
- HubSpot
- Outlook
- Notion

### Supported AI Integrations:

- OpenAI
- Gemini
- Anthropic

## Next Steps

In the upcoming sections, you'll learn detailed steps to:

- Set up knowledge sources
- Integrate structured data sources using APIs
- Create custom agent workflows

Connect your data now and unlock the full potential of your Appsmith Agents.
