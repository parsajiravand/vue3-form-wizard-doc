<template>
  <form-wizard @on-complete="onComplete" :start-index="1" color="#e67e22">
    <tab-content title="Personal details">
      My first tab content
    </tab-content>
    <tab-content title="Additional Info">
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
