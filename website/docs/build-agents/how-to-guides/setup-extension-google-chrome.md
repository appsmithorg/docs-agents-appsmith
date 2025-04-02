# Set Up the AI Agents Chrome Extension

This guide shows you how to set up the Appsmith AI Agents Chrome extension, which allows you to embed AI directly into the platforms you use every day.

<ZoomImage
  src="/img/embed-ai1.png" 
  alt=""
  caption=""
/>

1. Open your Appsmith AI Agents application and navigate to Settings from the left-side panel.

2. Click on Share & Embed and make the application public.

3. Copy the embed URL. It should look something like:

<dd>

```ruby
https://ai.appsmithai.com/app/ai-agent/page1-67ecebbb3a72292?embed=true
```

</dd>

4. To add the Chrome extension, open the [Chrome Web Store](https://chromewebstore.google.com/detail/appsmith-agents/mlmnoikcaeggnjijgimjbiojaeeeifal).


5. Click **Add to Chrome** and install the extension.

6. In the Chrome extension configuration, paste the embed URL as the **Default Assistant URL**. This allows the AI Agent to load when no specific URL mapping is matched.

7. If you want to add different AI Agents for different platforms, you can configure them in the **URL Mappings** section.

<dd>

*Example:* To set up different AI Agents for Zendesk, Salesforce, and LinkedIn, add the respective assistant URLs for each domain in the URL Mappings section.



<ZoomImage
  src="/img/ai-agent-chrome.png" 
  alt=""
  caption=""
/>


</dd>



8. Click **Save** to apply the configuration.


The AI Agent is now active and ready to use across the configured websites. 

















