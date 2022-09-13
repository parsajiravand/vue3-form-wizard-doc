<template>
  <form-wizard @on-complete="onComplete" :start-index="1" color="#e67e22">
    <tab-content title="Personal details" icon="ti-user">
      My first tab content
    </tab-content>
    <tab-content title="Additional Info" icon="ti-settings">
      My second tab content
    </tab-content>
    <tab-content title="Last step" icon="ti-check">
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
    onComplete: function () {
      alert("Yay. Done!");
    },
  },
};
</script>
<style>
  @import url('https://unpkg.com/vue3-form-wizard@0.0.9/dist/style.css');
</style>
