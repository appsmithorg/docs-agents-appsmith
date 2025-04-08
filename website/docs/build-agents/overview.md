# Overview

Appsmith agents provide a powerful way to integrate AI capabilities into your applications. An Appsmith agent consists of two main components: an Agent Query and a Chat widget that connects to the agent query.

## Key Components

### Agent Query
The Agent Query is the backend configuration for your AI agent. It can be configured to:
- Access organization data through knowledge sources
- Perform actions through function calls
- Follow specific system instructions
- Use customized model settings

### Chat Widget
The Chat widget provides the user interface for interacting with your agent. It connects to the Agent Query to display conversations and responses.

## Configuration Options

### Knowledge Sources
Knowledge sources allow your agent to access and reference organization data, providing context for more accurate and relevant responses. [Learn more about knowledge sources](../connect-data/intro.md#knowledge-sources) or see [detailed configuration options](agent.md#knowledge-source).

### Function Calls
Function calls enable your agent to perform actions and access external systems. This allows for dynamic, data-driven interactions. [Learn more about function calls](../connect-data/intro.md) or see [detailed configuration options](agent.md#function-calls).

### System Instructions
System instructions define how your agent behaves, its personality, and its capabilities. These instructions guide the agent's responses and actions. See [detailed configuration options](agent.md#system-instructions).

### Model Settings
Fine-tune your agent's behavior with model settings, including parameters like temperature, top_p, and other configuration options that affect the agent's responses. See [detailed configuration options](agent.md#model).

## Getting Started
To build your first Appsmith agent, create a new Agent Query from the query pane, configure its settings, and connect it to a Chat widget on your application page. For a step-by-step guide, check out [Build Your First Agent](../getting-started/build-your-first-agent.md).
