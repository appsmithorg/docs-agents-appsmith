
const sidebars = {
  tutorialSidebar: [
   //getting started section end
    
    {
      // Product Start
      type: 'category',
      collapsed: false,
      label: 'Product',
      items: [
        'getting-started/faq',
        'product/security',
        'product/telemetry',
        'product/support',
        {
          type: 'link',
          label: 'Privacy Policy',
          href: 'https://www.appsmith.com/privacy-policy',
        },
        {
          type: 'link',
          label: 'Release Notes',
          href: 'https://github.com/appsmithorg/appsmith/releases',
        },
        {
          type: 'link',
          label: 'Contribute',
          href: 'https://github.com/appsmithorg/appsmith/blob/release/CONTRIBUTING.md',
        },
      ],
    }, // Product End
  ],
};

module.exports = sidebars;