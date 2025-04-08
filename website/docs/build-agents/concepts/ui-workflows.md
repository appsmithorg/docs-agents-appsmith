---
title: UI Workflows
description: Learn how Appsmith agents can interact with UI components
---

# UI Workflows

UI workflows allow Appsmith agents to interact with your application's user interface components, providing a seamless way to collect information from users and display results through customized interfaces.

## Understanding UI Workflows

UI workflows enable agents to:
1. Display information in a structured format
2. Collect user input through customized forms
3. Provide interactive experiences using Appsmith's widget library

## Using Modal Widgets with Agents

One powerful UI workflow pattern involves using modal widgets with your agents:

### Creating Modal UI Components

1. **Drag and drop a Modal widget** onto your Appsmith canvas
2. **Design your UI** by adding custom elements inside the modal:
   - Input fields for collecting user data
   - Text widgets for displaying information
   - Buttons for user actions
   - Any other widgets needed for your use case

### Invoking Modals from Agents

Agents can display the modal widget by invoking JavaScript functions:

```javascript
// Example function to show a modal with agent parameters
function showAgentModal(params) {
  // Set values in modal widgets based on agent parameters
  Input1.setValue(params.userInput);
  Text1.setText(params.agentResponse);
  
  // Display the modal
  showModal('Modal1');
}
```

### Parameter Passing and Widget Control

Agents can control UI elements through JavaScript function calls:

1. **Pass parameters from agent to UI**:
   - Include relevant data in function parameters
   - Use the data to populate UI elements

2. **Manipulate widget states**:
   - Use widget setter methods like `Input1.setValue('')`
   - Update text displays with `Text1.setText(response)`
   - Control visibility with `Widget1.setVisibility(true)`

3. **Handle user interaction**:
   - Configure buttons to trigger agent actions
   - Collect and validate form inputs before submitting to agents

## Benefits of UI Workflows

- **Enhanced user experience**: Provide visually appealing interfaces for agent interactions
- **Structured data collection**: Gather information in a controlled format
- **Contextual responses**: Display agent results in the most appropriate UI context
- **Reduced friction**: Seamlessly integrate agent capabilities into your application's existing UI patterns
