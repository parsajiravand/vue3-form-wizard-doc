---
home: true
title: Vue3 Form Wizard | Home
heroImage: https://vuejs.org/images/logo.png
heroText: Vue3 Form Wizard
tagline: Vue3 Form Wizard is a vue based component with no external depenendcies which simplifies tab wizard management.
actions:
  - text: Get Started
    link: /usage/
    type: primary
features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
  - title: Themes
    details: Providing a default theme out of the box. You can also choose a community theme or create your own one.
  - title: Plugins
    details: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site. 
  - title: Bundlers
    details: Default bundler is Vite, while Webpack is also supported. Choose the one you like!
footer: MIT Licensed | Copyright © 2022-present Parsa Jiravand
---

### As Easy as 1, 2, 3

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash
# install in your project
npm install -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
npx vuepress dev

# build to static files
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>
