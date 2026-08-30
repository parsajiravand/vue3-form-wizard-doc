import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import { defaultTheme } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import * as dotenv from "dotenv";

import { navbar, sidebar, head } from "./configs/index.js";

// call dotenv and it will return an Object with a parsed key
dotenv.config();

const plugins = [
  registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, "./components"),
  }),
];

// Only register analytics when an id is actually configured; the plugin warns
// on every build otherwise.
if (process.env.GOOGLE_API_TOKEN) {
  plugins.push(googleAnalyticsPlugin({ id: process.env.GOOGLE_API_TOKEN }));
}

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
    logo: "/logo.svg",
    repo: "parsajiravand/vue3-form-wizard",
    docsRepo: "parsajiravand/vue3-form-wizard-doc",
    docsDir: "docs",
    navbar,
    sidebar,
  }),
  plugins,
  head,
};
