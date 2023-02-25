<template>
  <FormWizard @on-complete="onComplete" step-size="xs">
    <TabContent title="Personal details">
      You Can select 4 size for tabs :
      <span style="font-weight: bold"> xs | sm | md | lg </span>
    </TabContent>
    <TabContent title="Additional Info">
      Defaults size is: <span style="font-weight: bold"> md </span>
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
    onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>
<style>
@import url("https://unpkg.com/vue3-form-wizard/dist/style.css");
</style>
