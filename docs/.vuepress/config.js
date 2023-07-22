/* const { path } = require("@vuepress/utils"); */
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import { defaultTheme } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import * as dotenv from 'dotenv'
import { blogPlugin } from "vuepress-plugin-blog2";

// call dotenv and it will return an Object with a parsed key
dotenv.config()

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
      {
        text:"Blog",
        children:[
          {
            text: "Article",
            link: "/article/",
          },
          {
            text: "Category",
            link: "/category/",
          },
          {
            text: "Tag",
            link: "/tag/",
          },
          {
            text: "Timeline",
            link: "/timeline/",
          },
        ]
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
    blogPlugin({
      // only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith("posts/") : false,

      // getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter["author"] || "",
        date: frontmatter.date || null,
        category: frontmatter["category"] || [],
        tag: frontmatter["tag"] || [],
        image: frontmatter["image"] || null,
        excerpt:
          // support manually set excerpt through frontmatter
          typeof frontmatter["excerpt"] === "string"
            ? frontmatter["excerpt"]
            : data?.["excerpt"] || "",
      }),

      // generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter["home"] &&
        frontmatter["excerpt"] !== false &&
        typeof frontmatter["excerpt"] !== "string",

      category: [
        {
          key: "category",
          getter: (page) => page.frontmatter["category"] || [],
          layout: "Category",
          itemLayout: "Category",
          frontmatter: () => ({ title: "Categories", sidebar: false }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: "tag",
          getter: (page) => page.frontmatter["tag"] || [],
          layout: "Tag",
          itemLayout: "Tag",
          frontmatter: () => ({ title: "Tags", sidebar: false }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: "article",
          // remove archive articles
          filter: (page) => !page.frontmatter["archive"],
          path: "/article/",
          layout: "Article",
          frontmatter: () => ({ title: "Articles", sidebar: false }),
          // sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter["sticky"] && pageB.frontmatter["sticky"])
              return pageB.frontmatter["sticky"] - pageA.frontmatter["sticky"];

            if (pageA.frontmatter["sticky"] && !pageB.frontmatter["sticky"])
              return -1;

            if (!pageA.frontmatter["sticky"] && pageB.frontmatter["sticky"])
              return 1;

            if (!pageB.frontmatter.date) return 1;
            if (!pageA.frontmatter.date) return -1;

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            );
          },
        },
        {
          key: "timeline",
          // only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          path: "/timeline/",
          layout: "Timeline",
          frontmatter: () => ({ title: "Timeline", sidebar: false }),
        },
      ],
      hotReload: true,
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
  ],
};
