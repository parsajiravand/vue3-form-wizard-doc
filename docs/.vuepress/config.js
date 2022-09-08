/* const { path } = require("@vuepress/utils"); */
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import {  path } from '@vuepress/utils'
import { defaultTheme } from 'vuepress'

import "../../node_modules/vue3-form-wizard/dist/style.css";
export default  {
   theme: defaultTheme({
  locales: {
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
  },
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // string - page file path
      '/bar/README.md',
    ],
    sidebar:[
       // NavbarItem
      {
        text: 'Usage',
        link: '/usage/',
      },
      {
        text: 'Props',
        link: '/props/',
      },{
        text: 'Slots',
        link: '/slots/',
      },{
        text: 'Methods',
        link: '/methods/',
      },{
        text: 'Scoped slots',
        link: '/scoped-slots/',
      },{
        text: 'Demos',
        link: '/demos/',
      },{
        text: 'Playground',
        link: '/playground/',
      },
    ],

}),
 plugins: [
    registerComponentsPlugin({
      components: {
        FormWizard:path.resolve(__dirname,'../../node_modules/vue3-form-wizard/dist/source/components/FormWizard.vue'),
        TabContent:path.resolve(__dirname,'../../node_modules/vue3-form-wizard/dist/source/components/TabContent.vue')
      },
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],

};
