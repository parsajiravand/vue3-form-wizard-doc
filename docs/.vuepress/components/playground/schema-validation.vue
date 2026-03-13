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
import { ref, defineComponent, h } from "vue";
import FormWizard from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";

const EmailStep = defineComponent({
  name: "EmailStep",
  props: { data: { type: Object, required: true }, updateData: { type: Function, required: true } },
  setup(props) {
    return () =>
      h("div", [
        h("h2", "Enter email"),
        h("input", {
          type: "email",
          value: props.data.email,
          onInput: (e) => props.updateData({ email: e.target.value }),
          placeholder: "email@example.com",
          style: "padding:8px;width:100%;max-width:280px;",
        }),
      ]);
  },
});

const DoneStep = defineComponent({
  name: "DoneStep",
  props: { data: { type: Object, required: true }, updateData: { type: Function, required: true } },
  setup(props) {
    return () => h("div", [h("h2", "All set"), h("p", "Email: " + (props.data.email || "(none)"))]);
  },
});

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
