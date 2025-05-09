import DownloadButton from '@site/src/components/DownloadButton';

# Build Your First Agent

This tutorial guides you through building an **HR Assistant AI Agent** that can answer employee FAQs using a knowledge base (PDF) and log structured requests (like leave and expense claims) to a Google Sheet.

:::tip ⏳ Estimated Time: 10 minutes
By the end of this tutorial, you will learn to:

- Connect a knowledge base PDF to your agent.
- Configure function calling to log leave and expense requests in Google Sheets.
- Create and test a Retrieval-Augmented Generation (RAG) based HR assistant.
:::

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



1. Open your Appsmith Agents workspace.

<dd>

If you are not yet signed up, visit [login.appsmithai.com](https://login.appsmithai.com), enter your organization name and domain to create your workspace (e.g., `org-name.appsmithai.com`).

</dd>

2. Click **Create New Agent** from the top-right corner and select **Start from Scratch**. You’ll also see a list of templates with pre-configured system instructions that integrate with your everyday tools like Jira, Slack, and More.


3. Once your AI Agent opens, you’ll see a modal where you can configure the agent’s knowledge source. The [knowledge sources](/connect-data/overview) is a set of documents or links the agent can reference to answer user questions. Click on the Upload Files section.


<dd> 


Click **Add files**, then upload the document from your computer. You can download the PDF file from the link below and use it as your knowledge base.

<DownloadButton
  fileName="HR_Policy_Guide.pdf"
  fileUrl="/user-files/HR_Policy_Guide.pdf"
  description="Download the agent configuration file."
/>



</dd> 

4. Once uploaded, close the knowledge source modal. You’ll now see the AI chat widget on the right, where you can interact with your agent, and the chat query editor on the left, where you can configure how the agent responds.


5. Add a **System Instructions** to define how the AI should behave. This prompt guides the AI's responses by setting clear expectations for how it should use the knowledge base and database functions.

<dd> 

Within the prompt, you can explicitly define which queries the AI can call and what kind of data each query expects. 


*Example system prompt:*

```js
You are an HR Assistant. Use the uploaded HR Policy Guide PDF as your primary knowledge source.

Answer questions about:
- Leave policies (casual leave, sick leave, earned leave, etc.)
- Leave balances, approval process, or combining leave types
- Rules around maternity, paternity, and half-day leaves

Always refer to the uploaded document before responding. Do not make assumptions beyond what's covered in the document.

If the user wants to **apply for leave**, collect the following details:
- name
- leave_type
- start_date
- end_date
- reason

After collecting all fields, pass them to the `LogLeaveRequest` query using the format:
- this.params.name  
- this.params.leave_type  
- this.params.start_date  
- this.params.end_date  
- this.params.reason  

Ensure you confirm the details with the user before submitting the leave request.
```

See [How to Configure Chat Query](/build-agents/agent).

</dd>


6. Save the source configuration to enable document-based retrieval.

<dd>

To verify the setup, enter a question in the Chat Widget, such as _“How many casual leave days do I get?”_ or _“What’s the process for expense reimbursement?”_ The AI should respond using information from the uploaded HR Policy Guide.  


</dd>

Great! You just created a knowledge-based HR Assistant that can answer employee questions using your uploaded HR Policy Guide. In the next section, you’ll extend this assistant by enabling it to log leave requests into a Google Sheet.

## Set Up Function Calling

Function calling allows the AI to interact with connected data sources and perform real-time actions. In this section, you’ll connect a Google Sheet and configure a query that lets the HR Assistant log leave requests submitted by employees.

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


1. Navigate to the **Data** section, click the **+** icon, and select **Google Sheets**. Connect your Google account and authorize access to allow the agent to read from and write to your spreadsheet. 

2. Click the link below to make a copy of the sample sheet with pre-filled data and the required column structure:

<dd>

[📄 Copy Sample Sheet](https://docs.google.com/spreadsheets/d/1fti6HNRgyeC2-MQOnaUkudyo72vc5ZIv2liUAB9noKE/copy)

This sample sheet includes leave requests with columns like Name, Leave Type, Start Date, End Date, Reason, and Submitted On.

</dd>

3. Click New Query and name it `LogLeaveRequest`. This creates a Google Sheets query that allows the AI to log leave requests submitted by users into the connected sheet.


<dd>

Under Configuration, set the following:

- Operation: `Insert one`
- Entity: `Sheet row(s)`
- Spreadsheet: Select the copied sample sheet
- Sheet Name: `Leave_Requests`
- In the Row Object (JSON) field, paste the following:

```json
{
  "Name": "{{this.params.name}}",
  "Leave Type": "{{this.params.leave_type}}",
  "Start Date": "{{this.params.start_date}}",
  "End Date": "{{this.params.end_date}}",
  "Reason": "{{this.params.reason}}",
  "Submitted On": "{{this.params.submitted_on}}"
}
```

 The `this.params` syntax is how the AI passes user-provided values into the query at runtime. For example, if a user says “I want to take casual leave from May 10 to May 12,” the AI will extract those details and pass them into the query as:

- `this.params.leave_type` = "Casual Leave"

- `this.params.start_date` = "2025-05-10"


</dd>


4. Navigate back to the Chat Query and add the `LogLeaveRequest` function to enable the AI to submit leave data to Google Sheets.


5. Once configured, save the query to make it available for AI function calling.


<dd>

You can now test the integration by entering prompts in the chat, such as: - _“I want to apply for casual leave from May 10 to May 12 for a personal errand.”_ - _“Log 2 days of sick leave starting tomorrow. My name is Raj Mehta.”_

</dd>


## See also

- [Set Up the AI Agents Chrome Extension](/build-agents/how-to-guides/embed-agents): Learn how to install and configure the Chrome extension to use AI agents across web applications.
- [Appsmith AI Integration](/build-agents/overview): Understand how to integrate Appsmith with AI features for chat-based data interaction and function calling.