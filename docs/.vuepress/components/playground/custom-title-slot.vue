<template>
  <form-wizard @on-complete="onComplete" shape="tab" color="#e67e22">
    <template #title>This will replace my whole title</template>

    <tab-content title="Personal details">
      My first tab content
    </tab-content>
    <tab-content title="Additional Info">
      My second tab content
    </tab-content>
    <tab-content title="Last step" >
      Yuhuuu! This seems pretty damn simple
    </tab-content>
  </form-wizard>
</template>

<script>
  //local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
export default {
  name: "CustomTitleSlost",
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

