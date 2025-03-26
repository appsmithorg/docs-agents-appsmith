
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
  ],
};

module.exports = sidebars;