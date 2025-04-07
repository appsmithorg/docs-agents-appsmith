// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const { default: themeMermaid } = require('@docusaurus/theme-mermaid');
const { EnvironmentCredentials } = require('aws-sdk');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Appsmith',
  tagline: 'Open source, low code - Build, Ship and maintain Internal tools',
  url: 'https://docs.appsmithai.com',
  baseUrl: '/',
  favicon: 'img/Appsmith-Logo.png',
  "trailingSlash": false,
  markdown: {
    mermaid: true,
  },
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    process.env.VERCEL_ENV === "production" && [
      '@twilio-labs/docusaurus-plugin-segment',
      {
        writeKey: 'tjqTIkJzeqSTB1SUookBTdWhZEoR031c',
        allowedInDev: false,
      },
    ],
    [
      '@docusaurus/theme-mermaid',
      {
        themeMermaid: {
          theme: 'default',
        },
      }
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/appsmithorg/appsmith-docs/edit/main/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-145062826-1',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Appsmith-Logo.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: '6G9O1QP75U',
        apiKey: '9a9a704407540f884f3724fdfb298aa8',
        indexName: 'docs_appsmithai_com_6g9o1qp75u_pages',
        contextualSearch: false,

      
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Appsmith Logo',
          src: '/img/appsmith_logo_white.png',
        },
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://app.appsmith.com',
            label: 'Try Appsmith',
            position: 'right'
          },

        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  scripts: [
    ...(process.env.VERCEL_ENV === "production" ? [{
      src:
        '/scripts/intercomSettings.js',
      async: false,
    },
    {
      src:
        '/scripts/smartlook.js',
      async: false,
    },
    {
      src:
        '/scripts/analyticsEvents.js',
      defer: true,
    },
    {
      src:
        '/scripts/reotracking.js',
      async: true,
    }
    ] : [])
  ],
};

module.exports = config;
