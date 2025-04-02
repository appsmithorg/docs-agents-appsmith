const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      collapsed: false,
      label: 'Get Started',
      items: [
        'intro',
        'getting-started/build-your-first-agent',
      ],
    },
    
    {
      type: 'category',
      collapsed: false,
      label: 'Connect Data',
      items: [
               'connect-data/integrations/overview',
        {
          type: 'category',
          collapsed: false,
          label: 'Reference',
          items: [
               'connect-data/integrations/reference/chat-query',
            {
              type: 'category',
              collapsed: true,
              label: 'Knowledge Bases',
                 items: ['connect-data/integrations/reference/knowledge-bases/overview'],
            },
            {
              type: 'category',
              collapsed: true,
              label: 'Tools',
              items: [
                
                'connect-data/integrations/reference/tools/jira',
                'connect-data/integrations/reference/tools/zendesk',
              ],
            },
          ],
        },
        'connect-data/integrations/reference/query-settings',
        
      ],
    },
    
    {
      type: 'category',
      collapsed: false,
      label: 'Build Apps / Agents',
      items: [
      
        'build-agents/overview',
        {
          type: 'category',
          collapsed: false,
          label: 'How-to Guides',
          items: [
                'build-agents/how-to-guides/setup-extension-google-chrome',
          ],
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Reference',
          items: [
            {
              type: 'category',
              collapsed: true,
              label: 'Widgets',
              items: [
                'build-agents/widgets/reference/AIChat', 
                'build-agents/widgets/reference/button',  
            'build-agents/widgets/reference/checkbox',  
            'build-agents/widgets/reference/ComboBox',
            'build-agents/widgets/reference/checkbox-group',  
            'build-agents/widgets/reference/currency-input',
            'build-agents/widgets/reference/custom',  
            'build-agents/widgets/reference/date',  
            'build-agents/widgets/reference/emailinput',
            'build-agents/widgets/reference/Heading', 
            'build-agents/widgets/reference/icon-button',  
            'build-agents/widgets/reference/inline-button',  
            'build-agents/widgets/reference/input',  
            'build-agents/widgets/reference/menu-button',  
            'build-agents/widgets/reference/modal',  
            'build-agents/widgets/reference/multilineInput',
            'build-agents/widgets/reference/number-input',  
            'build-agents/widgets/reference/paragraph',  
            'build-agents/widgets/reference/password-input',
            'build-agents/widgets/reference/phone-input',
            'build-agents/widgets/reference/radio-group',  
            'build-agents/widgets/reference/select', 
            'build-agents/widgets/reference/stats',  
            'build-agents/widgets/reference/switch',  
            'build-agents/widgets/reference/switch-group',  
            'build-agents/widgets/reference/table',
            'build-agents/widgets/reference/toolbar', 
            'build-agents/widgets/reference/zone',
              ],
            },
          ],
        },
              ],
    },
    
    {
      type: 'category',
      collapsed: false,
      label: 'Troubleshooting',
      items: [
       
        'help-and-support/troubleshooting/overview',
        'help-and-support/troubleshooting/widget-errors',
        'help-and-support/troubleshooting/datasource-errors',
      ],
    },
  ],
};

module.exports = sidebars;
