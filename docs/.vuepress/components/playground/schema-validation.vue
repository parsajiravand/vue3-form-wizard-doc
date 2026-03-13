<template>
  <FormWizard
    title="Schema: Async Validation"
    :schema="schema"
    :schema-components="schemaComponents"
    v-model="schemaData"
    color="#2c3e50"
    error-color="#e74c3c"
    @on-complete="onComplete"
  />
</template>

<script setup>
import { ref } from "vue";
import {FormWizard} from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import EmailStep from "./schema-steps/EmailStep.vue";
import DoneStep from "./schema-steps/DoneStep.vue";

const schema = {
  initialData: { email: "" },
  steps: [
    {
      id: "email",
      title: "Email",
      component: "EmailStep",
      validate: ({ data }) => {
        const ok = /^[^@]+@[^@]+\.\w+$/.test(data.email || "");
        return ok ? true : "Enter a valid email";
      },
    },
    { id: "done", title: "Done", component: "DoneStep" },
  ],
};

const schemaComponents = { EmailStep, DoneStep };
const schemaData = ref({ email: "" });
const onComplete = () => alert("Done!");
</script>
