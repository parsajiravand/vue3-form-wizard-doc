<template>
  <form-wizard @on-complete="onComplete" shape="tab" color="#9b59b6">
    <tab-content
      title="Personal details"
     
      :before-change="beforeTabSwitch"
    >
      My first tab content
    </tab-content>
    <tab-content title="Additional Info" >
      My second tab content
    </tab-content>
    <tab-content title="Last step">
      Yuhuuu! This seems pretty damn simple
    </tab-content>
  </form-wizard>
</template>

<script>
  //local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
export default {
  name: "CallFunctionBeforeTabSwitch",
  //component code
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
    onComplete: function () {
      alert("Yay. Done!");
    },
    beforeTabSwitch: function () {
      alert("This is called before switchind tabs");
      return true;
    },
  },
};
</script>
<style>
  @import url('https://unpkg.com/vue3-form-wizard@0.0.9/dist/style.css');
</style>
