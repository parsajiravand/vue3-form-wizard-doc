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
  @import url('https://unpkg.com/vue3-form-wizard@0.0.9/dist/style.css');
</style>
