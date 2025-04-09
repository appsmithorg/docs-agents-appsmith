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
        'connect-data/intro',
        {
          type: 'category',
          collapsed: false,
          label: 'Reference',
          items: [
            'connect-data/overview',
            {
              type: 'category',
              collapsed: true,
              label: 'Functions',
              items: [
                //category- Api
                {
                  type: 'category',
                  label: 'APIs',
                  items: [
                    'connect-data/reference/authenticated-api',
                    'connect-data/reference/curl-import',
                    'connect-data/reference/graphql',
                    'connect-data/reference/rest-api'
                  ],
                },
                //category- Databases
                {
                  type: 'category',
                  label: 'Databases',
                  items: [
                    'connect-data/reference/querying-arango-db',
                    'connect-data/reference/databricks',
                    'connect-data/reference/querying-dynamodb',
                    'connect-data/reference/querying-elasticsearch',
                    'connect-data/reference/querying-firestore',
                    {
                      type: 'category',
                      label: 'MongoDB',
                      link: {
                        type: 'doc',
                        id: 'connect-data/reference/querying-mongodb/README',
                      },
                      items: [
                        'connect-data/reference/querying-mongodb/mongo-syntax'
                      ],
                    },
                    'connect-data/reference/querying-mssql',
                    'connect-data/reference/querying-mysql',
                    'connect-data/reference/querying-oracle',
                    'connect-data/reference/querying-postgres',
                    'connect-data/reference/querying-redis',
                    'connect-data/reference/querying-redshift',
                    'connect-data/reference/querying-amazon-s3',
                    'connect-data/reference/querying-snowflake-db',
                    'connect-data/reference/using-smtp'
                  ],
                },
                //category- SaaS Integrations
                {
                  type: 'category',
                  label: 'SaaS Integrations',
                  items: [
                    'connect-data/reference/airtable',
                    'connect-data/reference/aws-lambda',
                    'connect-data/reference/querying-google-sheets',
                    'connect-data/reference/hubspot',
                    'connect-data/reference/jira',
                    'connect-data/reference/slack',
                    'connect-data/reference/twilio'
                  ],
                },
                //category- AI Integrations
                {
                  type: 'category',
                  label: 'AI Integrations',
                  items: [
                    'connect-data/reference/anthropic',
                    'connect-data/reference/appsmith-ai',
                    'connect-data/reference/google-ai',
                    'connect-data/reference/open-ai'
                  ],
                },
              ],
            },
          ],
        },       
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Build Agents',
      items: [
        'build-agents/overview',
        'build-agents/agent',
        {
          type: 'category',
          collapsed: true,
          label: 'How-to Guides',
          items: [
            'build-agents/how-to-guides/embed-agents',
            'build-agents/how-to-guides/custom-ui-agent',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          label: 'Concepts',
          items: [
            'build-agents/concepts/functions',
            'build-agents/concepts/ui-workflows',
          ],
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Reference',
          items: [
            'build-agents/reference/pass-parameters',
            {
              type: 'category',
              collapsed: true,
              label: 'Widgets',
              link: { type: 'doc', id: 'build-agents/widgets/overview' },
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
        'build-agents/best-practices',
      ],
    },
    {
      // WRITE CODE start
      type: 'category',
      collapsed: false,
      label: 'Write Code',
      items: [
        'write-code/overview',
        
        {
          type: 'category',
          collapsed: false,
          label: 'Reference',
              items: [
            {
              type: 'category',
              collapsed: true,
              label: 'Global Objects',
              items: [
                'reference/appsmith-framework/query-object',
                'reference/appsmith-framework/context-object',
                'reference/appsmith-framework/console-object',
              ],
            },
            {
              type: 'category',
              label: 'Global Functions',
              link: {
                type: 'doc',
                id: 'reference/appsmith-framework/widget-actions/README',
              },
              items: [
                'reference/appsmith-framework/widget-actions/clear-interval',
                'reference/appsmith-framework/widget-actions/clear-store',
                'reference/appsmith-framework/widget-actions/close-modal',
                'reference/appsmith-framework/widget-actions/copy-to-clipboard',
                'reference/appsmith-framework/widget-actions/download',
                'reference/appsmith-framework/widget-actions/logout-user',
                'reference/appsmith-framework/widget-actions/navigate-to',
                'reference/appsmith-framework/widget-actions/post-message',
                'reference/appsmith-framework/widget-actions/remove-value',
                'reference/appsmith-framework/widget-actions/reset-widget',
                'reference/appsmith-framework/widget-actions/set-timeout',
                'reference/appsmith-framework/widget-actions/intervals-time-events',
                'reference/appsmith-framework/widget-actions/store-value',
                'reference/appsmith-framework/widget-actions/show-alert',
                'reference/appsmith-framework/widget-actions/show-modal',
                'reference/appsmith-framework/widget-actions/unlisten-window-message',
                'reference/appsmith-framework/widget-actions/window-message-listener',
              ],
            },
            
          ],
        },
      ],
    },
    {
      // Product Start
      type: 'category',
      collapsed: false,
      label: 'Product',
      items: [
        'product/security',
        'product/telemetry',
        'product/use-cases',
        'product/pricing',
        {
          type: 'link',
          label: 'Privacy Policy',
          href: 'https://www.appsmith.com/privacy-policy',
        },
      ],
    }, // Product End
  ],
};

module.exports = sidebars;
