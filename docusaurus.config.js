// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NiceNode",
  tagline: "Run a node — just press start",
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
        content: `<a target="_blank" rel="noopener noreferrer" href="https://mirror.xyz/johnsgresham.eth/BqQ92jtwu3hl6Ri2-giRLd0hequOt8Ya6ULAyCR-3ls">NiceNode is in alpha!</a> Early testers and contributors appreciated. Please reach out on Twitter, Discord, or Github!`,
        backgroundColor: "#7a2c9e",
        textColor: "white",
        isCloseable: false,
      },
      // Twitter card image, should be 2x1 (width x height) ratio
      //  with 40px edge buffer, and < 5MB file size
      image: "img/NN_Twitter_Large_card.png?4",
      metadata: [
        {
          name: "twitter:title",
          content: "NiceNode",
        },
        {
          name: "twitter:description",
          content:
            "Run a node — just press start. Easily run, control, and configure an Ethereum node with NiceNode.",
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
          { to: "/faq", label: "FAQ", position: "left" },
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
            href: "https://discord.gg/k3dpYU4Pn9",
            label: "Discord",
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
              {
                label: "FAQ",
                to: "/faq",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/nicenodeapp",
              },
              {
                href: "https://discord.gg/k3dpYU4Pn9",
                label: "Discord",
              },
              {
                label: "GitHub",
                href: "https://github.com/jgresham/nice-node#readme",
              },
            ],
          },
          {
            title: "Credits",
            items: [
              {
                label: "Logo and image art from ethereum.org's William Tempest",
                href: "https://ethereum.org/en/assets/#illustrations",
              },
              {
                label: "App & tooling built using Electron React Boilerplate",
                href: "https://electron-react-boilerplate.js.org/",
              },
              {
                label: "Website built with Docusaurus",
                href: "https://ethereum.org/en/assets/#illustrations",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NiceNode.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
