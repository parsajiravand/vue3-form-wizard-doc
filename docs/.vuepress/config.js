/* const { path } = require("@vuepress/utils"); */
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import { defaultTheme } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import * as dotenv from "dotenv";

// call dotenv and it will return an Object with a parsed key
dotenv.config();

export default {
  theme: defaultTheme({
    locales: {
      "/": {
        lang: "en-US",
        title: "Vue3 Form Wizard",
        description:
          "Vue3-form-wizard is a vue based component with no external depenendcies which simplifies tab wizard management.",
      },
    },
    logo: "https://i.postimg.cc/258CSGbV/vue3-form-wizard-icon.png",
    navbar: [
      // NavbarItem
      {
        text: "Docs",
        link: "/usage/",
      },

      // NavbarGroup
      {
        text: "Github",
        children: [
          {
            text: "Package",
            link: "https://github.com/parsajiravand/vue3-form-wizard",
          },
          {
            text: "Docs",
            link: "https://github.com/parsajiravand/vue3-form-wizard-doc",
          },
        ],
      },
      // NavbarItem
      {
        text: "Npm",
        link: "https://www.npmjs.com/package/vue3-form-wizard",
      },
    ],
    sidebar: [
      // NavbarItem
      {
        text: "Usage",
        link: "/usage/",
      },
      {
        text: "Props",
        link: "/props/",
      },
      {
        text: "Events",
        link: "/events/",
      },
      {
        text: "Slots",
        link: "/slots/",
      },
      {
        text: "Methods",
        link: "/methods/",
      },
      {
        text: "Scoped slots",
        link: "/scoped-slots/",
      },
      {
        text: "Demos",
        link: "/demos/",
      },
      {
        text: "Playground",
        link: "/playground/",
      },
    ],
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    googleAnalyticsPlugin({
      // options
      id: process.env.GOOGLE_API_TOKEN,
    }),
  ],
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "https://i.postimg.cc/258CSGbV/vue3-form-wizard-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "https://i.postimg.cc/258CSGbV/vue3-form-wizard-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "https://i.postimg.cc/258CSGbV/vue3-form-wizard-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "https://i.postimg.cc/258CSGbV/vue3-form-wizard-icon.png",
        color: "#3a0839",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://i.postimg.cc/258CSGbV/vue3-form-wizard-icon.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3a0839" }],
    [
      "meta",
      {
        name: "msapplication-config",
        content: "/assets/favicons/browserconfig.xml",
      },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "0y7LzJnAhOU_iqkHxRZDzwrZPFKDV5j6Uyf4VBUED6U",
      },
    ],
  ],
};
