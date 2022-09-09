/* const { path } = require("@vuepress/utils"); */
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import { defaultTheme } from "vuepress";

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
    logo: "https://vuejs.org/images/logo.png",

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
            link: "https://github.com/parsajiravand/vue3-form-wizard/docs",
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
      components: {
        FormWizard: path.resolve(
          __dirname,
          "../../node_modules/vue3-form-wizard/dist/source/components/FormWizard.vue"
        ),
        TabContent: path.resolve(
          __dirname,
          "../../node_modules/vue3-form-wizard/dist/source/components/TabContent.vue"
        ),
      },
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
};
