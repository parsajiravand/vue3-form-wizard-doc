<template>
  <FormWizard title="Schema: Basic" :schema="schema" :schema-components="schemaComponents" v-model="schemaData"
    @on-complete="onComplete" />
</template>

<script setup>
import { ref } from "vue";
import { FormWizard } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import SimpleStep from "./schema-steps/SimpleStep.vue";
import DoneStep from "./schema-steps/DoneStep.vue";

const schema = {
  initialData: { plan: "basic" },
  steps: [
    { id: "intro", title: "Intro", component: "SimpleStep" },
    { id: "review", title: "Review", component: "DoneStep" },
  ],
};

const schemaComponents = { SimpleStep, DoneStep };
const schemaData = ref();
const onComplete = () => alert("Done!");
</script>
