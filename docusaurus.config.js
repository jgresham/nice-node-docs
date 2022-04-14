// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NiceNode",
  tagline: "An app to run an Ethereum node",
  url: "https://nicenode.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "jgresham", // Usually your GitHub org/user name.
  projectName: "nice-node-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-1P4BTYZ69J",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "support_us",
        content:
          "NiceNode is in alpha! We are looking for early testers and contributors. Please reach out on Twitter or Github!",
        backgroundColor: "#7a2c9e",
        textColor: "white",
        isCloseable: false,
      },
      // Twitter card image
      image: "img/NN_Twitter_Large_card.png",
      metadata: [
        {
          name: "twitter:title",
          content: "NiceNode",
        },
        {
          name: "twitter:description",
          content:
            "An app to run an Ethereum node. No command line required. Easily run, control, and configure your node with NiceNode.",
        },
      ],
      navbar: {
        title: "NiceNode",
        logo: {
          alt: "NiceNode Logo",
          src: "img/icon.png",
        },
        items: [
          { to: "/downloads", label: "Downloads", position: "left" },
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://twitter.com/nicenodeapp",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://github.com/jgresham/nice-node#readme",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Get NiceNode",
            items: [
              {
                label: "Downloads",
                to: "/downloads",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              {
                label: "Twitter",
                href: "https://twitter.com/nicenodeapp",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/jgresham/nice-node#readme",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NiceNode. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
