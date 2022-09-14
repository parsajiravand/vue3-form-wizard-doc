<template>
  <FormWizard @on-complete="onComplete">
    <TabContent title="Personal details">
      My first tab content
    </TabContent>
    <TabContent title="Additional Info">
      My second tab content
    </TabContent>
    <TabContent title="Last step">
      Yuhuuu! This seems pretty damn simple
    </TabContent>
  </FormWizard>
</template>

<script>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";

export default {
  //component code
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
    onComplete: function () {
      alert("Yay. Done!");
    },
  },
};
</script>
<style>
  @import url('https://unpkg.com/vue3-form-wizard/dist/style.css');
</style>
