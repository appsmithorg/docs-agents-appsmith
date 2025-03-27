
const sidebars = {
  tutorialSidebar: [
    {
      //getting started section start
      type: 'category',
      collapsed: false,
      label: 'Get Started',
      items: [
        'intro',
        'getting-started/build-your-first-app',
      
      ],
    }, //getting started section end
    
    
//ai start
{ 
  type: 'category',
  collapsed: false,
  label: 'AI Agents',
  items: [
    'getting-started/overview',
    {
      //Reference start
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        {
          type: 'category',
          collapsed: true,
          label: 'Widgets',
          link: { type: 'doc', id: 'build-apps/widgets/overview' },
          items: [
          'build-apps/widgets/reference/AIChat', 
            'build-apps/widgets/reference/button',  
        'build-apps/widgets/reference/checkbox',  
        'build-apps/widgets/reference/ComboBox',
        'build-apps/widgets/reference/checkbox-group',  
        'build-apps/widgets/reference/currency-input',
        'build-apps/widgets/reference/custom',  
        'build-apps/widgets/reference/date',  
        'build-apps/widgets/reference/emailinput',
        'build-apps/widgets/reference/Heading', 
        'build-apps/widgets/reference/icon-button',  
        'build-apps/widgets/reference/inline-button',  
        'build-apps/widgets/reference/input',  
        'build-apps/widgets/reference/menu-button',  
        'build-apps/widgets/reference/modal',  
        'build-apps/widgets/reference/multilineInput',
        'build-apps/widgets/reference/number-input',  
        'build-apps/widgets/reference/paragraph',  
        'build-apps/widgets/reference/password-input',
        'build-apps/widgets/reference/phone-input',
        'build-apps/widgets/reference/radio-group',  
        'build-apps/widgets/reference/select', 
        'build-apps/widgets/reference/stats',  
        'build-apps/widgets/reference/switch',  
        'build-apps/widgets/reference/switch-group',  
        'build-apps/widgets/reference/table',
        'build-apps/widgets/reference/toolbar', 
        'build-apps/widgets/reference/zone',

          
          ],
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Integrations',
          link: { type: 'doc', id: 'connect-data/integrations/overview' },
          items: [
       
          ],
        },
       
          ],
    }, //Reference End
    
  ]
}, //ai end
   
  ],
};

module.exports = sidebars;