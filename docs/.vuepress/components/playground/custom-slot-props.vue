<template>
  <FormWizard color="#9b59b6">
    <!-- Access WizardStep Component directly with all props  -->
    <template v-slot:step="props">
      <WizardStep
        :tab="props.tab"
        :transition="props.transition"
        :index="props.index"
        @click="props.navigateToTab(props.index)"
      >
        <small style="color: blue; font-size: 12px; margin: auto 2px">
          Tab{{ props.index + 1 }}
        </small>
      </WizardStep>
    </template>

    <!-- title slot  -->
    <template #title>
      <div><h3>Custom Slot Title</h3></div>
    </template>
    <TabContent title="First">
      <section class="form-wizard-sample-card">My first tab content</section>
    </TabContent>
    <TabContent title="Additional Info">
      <section class="form-wizard-sample-card">My second tab content</section>
    </TabContent>
    <TabContent title="Last step">
      <section class="form-wizard-sample-card">
        Yuhuuu! This seems pretty damn simple
      </section>
    </TabContent>

    <!-- Access footer  directly with all props options -->
    <!-- You can create custom design and event -->
    <template v-slot:footer="props">
      <div class="wizard-footer-left">
        <button
          v-if="props.activeTabIndex > 0 && !props.isLastStep"
          :style="props.fillButtonStyle"
          @click.native="props.prevTab()"
          class="wizard-button"
        >
          Previous test
        </button>
      </div>
      <div class="wizard-footer-right">
        <button
          v-if="!props.isLastStep"
          @click.native="props.nextTab()"
          class="wizard-button"
          :style="props.fillButtonStyle"
        >
          Next
        </button>

        <button
          v-else
          @click.native="confirmMethod"
          class="finish-button"
          :style="props.fillButtonStyle"
        >
          {{ props.isLastStep ? "Done" : "Next" }}
        </button>
      </div>
    </template>
  </FormWizard>
</template>
<script>
import { FormWizard, TabContent, WizardStep } from "vue3-form-wizard";
export default {
  name: "CustomSlotProps",
  components: {
    FormWizard,
    TabContent,
    WizardStep,
  },

  methods: {
    confirmMethod() {
      alert("Done");
    },
  },
};
</script>
<style>
.wizard-card-footer .wizard-footer-left .wizard-button {
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}
.wizard-card-footer .wizard-footer-right .wizard-button {
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}
.wizard-card-footer .wizard-footer-right .finish-button {
  padding: 15px 25px;
  border-radius: 6px;
  cursor: pointer;
  background-color: green !important;
  border: 0;
}
.form-wizard-sample-card {
  max-width: 300px;
  text-align: center;
  padding: 30px 10px;
  box-shadow: 0px 4px 8px #eee;
  margin: 10px auto;
  border-radius: 10px;
}
</style>
