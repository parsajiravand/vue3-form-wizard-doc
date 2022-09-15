<template>
  <FormWizard @on-complete="onComplete" color="#5e8dcc">
    <TabContent 
    title="Personal details" 
    customIcon="<img src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vue_icon_130078.png' width='40px' />"
    >
    <div >
      You can add your HTML tag (svg,img,i,...) 
      <br>
      also can add your custom component (b-img,b-icon,....)
    </div>

    </TabContent>
    <TabContent
    title="Additional Info"  
    :customIcon="`<img  src='${viteIcon}' width='35px' />`" > 
      add your dynamic source
    </TabContent>
    <TabContent title="Last step" :customIcon="nuxtIcon">
      create tag in computed
    </TabContent>
  </FormWizard>
</template>

<script>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
export default {
    data() {
        return {
            viteIcon:'https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667'
        }
    },
  //component code
  components: {
    FormWizard,
    TabContent,
  },
  computed:{
    nuxtIcon(){
        return `<img  src='https://nuxtjs.org/design-kit/colored-logo.svg' width='35px' />`
    }
  },
  methods: {
    onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>
