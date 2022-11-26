<script setup>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";

function onComplete() {
  alert("Yay. Done!");
}
</script>
<template>
  <FormWizard @on-complete="onComplete" color="#094899">
    <TabContent title="Personal details" icon="fa fa-user">
      My first tab content
    </TabContent>
    <TabContent title="Additional Info" icon="fa fa-gear">
      My second tab content
    </TabContent>
    <TabContent title="Last step" icon="fa fa-city">
      Yuhuuu! This seems pretty damn simple
    </TabContent>
  </FormWizard>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
</style>
