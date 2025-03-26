
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
    
    {
      //Data start
      type: 'category',
      collapsed: false,
      label: 'Connect Data',
      items: [
            'connect-data/integrations/overview',   
        
      ]
    }, //Data end

    {
      //WIDGET start
      type: 'category',
      collapsed: false,
      label: 'Widget',
      items: [
      'build-apps/widgets/overview',   
        
      ]
    }, //WIDGET end
  ],
};

module.exports = sidebars;