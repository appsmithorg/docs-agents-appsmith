import BuildHomeCards from '@site/src/components/BuildHomeCards';

# Overview

Appsmith Agents enable seamless AI integration within your applications. By combining AI-powered backend logic with an intuitive frontend chat interface, agents make it easy to build intelligent, interactive experiences.

An agent in Appsmith consists of two core components:

- **Agent Query:** The backend logic powered by AI.

- **Chat Widget:** The user interface for interacting with the agent.

This guide provides a high-level overview of agents and the configuration options available to customize their behavior and capabilities.


## Core Components

### Agent Query

The Agent Query serves as the foundation of your AI agent. It defines the behavior and capabilities of the agent and connects to various data sources, APIs, and instructions. Key features include:

- **Knowledge Sources:** Connect your agent to structured or unstructured data for more relevant responses.

- **Function Calls:** Enable the agent to trigger backend functions or API actions.

- **System Instructions:** Define the agent’s personality, behavior, and response style.

- **Model Settings:** Customize response generation using model-specific parameters.

For more details, see [Agent Query Configuration](/build-agents/agent).

### Chat Widget

The Chat widget provides an interactive frontend interface for end users. It connects directly to an Agent Query, rendering conversations and displaying responses in real time.

To learn more, visit Using the [Chat Widget](/build-agents/widgets/reference/AIChat).


## Configuration Options

Agents can be tailored to specific use cases using the following configurable elements:



### Knowledge Sources


Knowledge sources provide the agent with access to your organization's internal or external data, enhancing the relevance and accuracy of its responses. You can:

- Connect to documents, databases, and URLs.
- Automatically index and update knowledge bases.
- Enable agents to cite sources in their responses.


<BuildHomeCards
  cards={[
    {
      title: "What are Knowledge Sources?",
      description: "Learn how to connect internal or external documents, databases, and URLs to your agent.",
      link: "/connect-data/intro#knowledge-sources",
      className: "tutorials",
    },
    {
      title: "How to configure Knowledge Sources",
      description: "Step-by-step guide to configuring knowledge sources for your agent.",
      link: "/build-agents/agent#knowledge-source",
      className: "guides",
    }
  ]}
/>




### Function Calls


Function calls allow your agent to trigger backend logic, execute queries, or interact with third-party APIs. This turns your agent into more than just a conversational assistant—it becomes a functional interface for performing tasks. You can:

- Call internal or external APIs.
- Execute Appsmith queries (e.g., database or REST APIs).
- Chain multiple function calls within a single conversation.

<BuildHomeCards
  cards={[
    {
      title: "Introduction to Function Calls",
      description: "Learn how agents can trigger backend queries and external APIs.",
      link: "/connect-data/intro#function-calling",
      className: "tutorials",
    },
    {
      title: "How to configure Function Calls",
      description: "Guide to enabling and chaining function calls in your agent.",
      link: "/build-agents/agent#function-calls",
      className: "guides",
    },
  ]}
/>



### System Instructions

System instructions define how your agent behaves in various situations. These instructions act as persistent prompts that guide the model’s tone, capabilities, and scope throughout the interaction. You can:

- Specify tone (e.g., friendly, formal, technical).
- Set role behavior (e.g., act as a customer support assistant).
- Limit or allow types of responses.


<BuildHomeCards
  cards={[
    {
      title: "How to configure System Instructions",
      description: "Customize your agent’s personality, tone, and behavior using system-level prompts.",
      link: "/build-agents/agent#system-instructions",
      className: "guides",
    },
  ]}
/>


### Model Settings

Model settings allow you to fine-tune how the AI model generates responses. These parameters control factors like creativity, verbosity, and the randomness of outputs. Common options include:

- `temperature`: Adjusts randomness (higher = more creative).

- `top_p`: Controls diversity of outputs (lower = more focused).

- `max_tokens`: Limits the length of responses.

<BuildHomeCards
  cards={[
    {
      title: "How to configure Model Settings",
      description: "Adjust AI response behavior using temperature, max tokens, and other model parameters.",
      link: "/build-agents/agent#model",
      className: "guides",
    },
  ]}
/>

## Getting Started

Ready to get started? Follow our step-by-step guide to build your first agent:

- Create a new Agent Query from the query pane.
- Configure your data sources, instructions, and model settings.
- Add a Chat widget to your page and connect it to the Agent Query.

<BuildHomeCards
  cards={[
    {
      title: "Start Building Your First Agent",
      description: "A complete walkthrough to help you create, configure, and deploy your first Appsmith AI agent.",
      link: "/getting-started/build-your-first-agent",
      className: "tutorials",
    },
  ]}
/>



