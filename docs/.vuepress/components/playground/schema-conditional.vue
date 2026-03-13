<template>
  <FormWizard
    title="Schema: Conditional Steps"
    :schema="schema"
    :schema-components="schemaComponents"
    v-model="schemaData"
    color="#9b59b6"
    @on-complete="onComplete"
  />
</template>

<script setup>
import { ref } from "vue";
import {FormWizard} from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import IntroStep from "./schema-steps/IntroStep.vue";
import PremiumStep from "./schema-steps/PremiumStep.vue";
import ReviewStep from "./schema-steps/ReviewStep.vue";

const schema = {
  initialData: { plan: "basic" },
  steps: [
    { id: "intro", title: "Intro", component: "IntroStep" },
    {
      id: "premium",
      title: "Premium",
      component: "PremiumStep",
      condition: ({ data }) => data.plan === "premium",
    },
    {
      id: "review",
      title: "Review",
      component: "ReviewStep",
      validate: ({ data }) => (data.plan ? true : "Select a plan"),
    },
  ],
};

const schemaComponents = { IntroStep, PremiumStep, ReviewStep };
const schemaData = ref({ plan: "basic" });
const onComplete = () => alert("Done!");
</script>
