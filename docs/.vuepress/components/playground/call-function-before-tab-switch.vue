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
     onComplete() {
      alert("Yay. Done!");
    },
    beforeTabSwitch () {
      alert("This is called before switchind tabs");
      return true;
    },
  },
};
</script>
