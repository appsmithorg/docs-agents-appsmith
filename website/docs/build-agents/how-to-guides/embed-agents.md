# Embed Appsmith Agents

This guide shows you how to set up the Appsmith Agents Chrome extension, which allows you to embed AI Agents directly into the platforms you use every day.



1. Open your Appsmith AI Agents and click the **Share** icon in the top-right corner.

2. Copy the **application URL**.

<dd>

If you want to make the application public, you can enable the **Public access** option. For embedding, both private and public applications are supported.

*Example URL:*

```ruby
https://your-domain.appsmithai.com/app/ai-agent/page1-64532afbcdffh
```

<ZoomImage
  src="/img/agent-embed.png" 
  alt=""
  caption=""
/>




</dd>



3. To add the Chrome extension, open the [Chrome Web Store](https://chromewebstore.google.com/detail/appsmith-agents/mlmnoikcaeggnjijgimjbiojaeeeifal).


4. Click **Add to Chrome** and install the extension.

5. In the Chrome extension configuration, paste the embed URL as the **Default Assistant URL**. This allows the AI Agent to load when no specific URL mapping is matched.

6. If you want to add different AI Agents for different platforms, you can configure them in the **URL Mappings** section.

<dd>

*Example:* To set up different AI Agents for Zendesk, Salesforce, and LinkedIn, add the respective assistant URLs for each domain in the URL Mappings section.



<ZoomImage
  src="/img/ai-agent-chrome.png" 
  alt=""
  caption=""
/>


</dd>



7. Click **Save** to apply the configuration.


The AI Agent is now active and ready to use across the configured websites. 

















