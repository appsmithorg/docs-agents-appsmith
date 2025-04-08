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
            'connect-data/integrations/overview',
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
                    'connect-data/integrations/reference/tools/authenticated-api',
                    'connect-data/integrations/reference/tools/curl-import',
                    'connect-data/integrations/reference/tools/graphql',
                    'connect-data/integrations/reference/tools/rest-api'
                  ],
                },
                //category- Databases
                {
                  type: 'category',
                  label: 'Databases',
                  items: [
                    'connect-data/integrations/reference/tools/querying-arango-db',
                    'connect-data/integrations/reference/tools/databricks',
                    'connect-data/integrations/reference/tools/querying-dynamodb',
                    'connect-data/integrations/reference/tools/querying-elasticsearch',
                    'connect-data/integrations/reference/tools/querying-firestore',
                    {
                      type: 'category',
                      label: 'MongoDB',
                      link: {
                        type: 'doc',
                        id: 'connect-data/integrations/reference/tools/querying-mongodb/README',
                      },
                      items: [
                        'connect-data/integrations/reference/tools/querying-mongodb/mongo-syntax'
                      ],
                    },
                    'connect-data/integrations/reference/tools/querying-mssql',
                    'connect-data/integrations/reference/tools/querying-mysql',
                    'connect-data/integrations/reference/tools/querying-oracle',
                    'connect-data/integrations/reference/tools/querying-postgres',
                    'connect-data/integrations/reference/tools/querying-redis',
                    'connect-data/integrations/reference/tools/querying-redshift',
                    'connect-data/integrations/reference/tools/querying-amazon-s3',
                    'connect-data/integrations/reference/tools/querying-snowflake-db',
                    'connect-data/integrations/reference/tools/using-smtp'
                  ],
                },
                //category- SaaS Integrations
                {
                  type: 'category',
                  label: 'SaaS Integrations',
                  items: [
                    'connect-data/integrations/reference/tools/airtable',
                    'connect-data/integrations/reference/tools/aws-lambda',
                    'connect-data/integrations/reference/tools/querying-google-sheets',
                    'connect-data/integrations/reference/tools/hubspot',
                    'connect-data/integrations/reference/tools/twilio'
                  ],
                },
                //category- AI Integrations
                {
                  type: 'category',
                  label: 'AI Integrations',
                  items: [
                    'connect-data/integrations/reference/tools/anthropic',
                    'connect-data/integrations/reference/tools/appsmith-ai',
                    'connect-data/integrations/reference/tools/google-ai',
                    'connect-data/integrations/reference/tools/open-ai'
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
            'build-agents/how-to-guides/pass-parameters',
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
      // Product Start
      type: 'category',
      collapsed: false,
      label: 'Product',
      items: [
        'product/security',
        'product/telemetry',
        'product/support',
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
