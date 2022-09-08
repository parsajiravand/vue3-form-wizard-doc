<template>
  <FormWizard @on-complete="onComplete">
    <TabContent title="Personal details" icon="ti-user">
      My first tab content
    </TabContent>
    <TabContent title="Additional Info" icon="ti-settings">
      My second tab content
    </TabContent>
    <TabContent title="Last step" icon="ti-check">
      Yuhuuu! This seems pretty damn simple
    </TabContent>
  </FormWizard>
</template>

<script>
  import {FormWizard,TabContent} from "vue3-form-wizard";

export default {
components:{
FormWizard,TabContent
},
  methods: {
    onComplete: function () {
      alert("Yay. Done!");
    },
  },
};
</script>
<style >
    
</style>
