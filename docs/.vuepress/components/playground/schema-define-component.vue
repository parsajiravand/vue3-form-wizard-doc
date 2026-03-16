<template>
  <FormWizard
    title="Schema: defineComponent"
    :schema="schema"
    :schema-components="schemaComponents"
    v-model="schemaData"
    color="#8e44ad"
    @on-complete="onComplete"
  />
</template>

<script setup>
import { ref, defineComponent, h } from "vue";
import { FormWizard } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";

// Step components using defineComponent with setup returning render function
const NameStep = defineComponent({
  name: "NameStep",
  props: {
    data: { type: Object, required: true },
    updateData: { type: Function, required: true },
  },
  setup(props) {
    return () =>
      h("div", [
        h("h2", "Your name"),
        h("input", {
          type: "text",
          value: props.data.name,
          placeholder: "Name",
          onInput: (e) => props.updateData({ name: e.target.value }),
          style: "padding:8px;width:100%;max-width:240px;margin-bottom:8px;",
        }),
      ]);
  },
});

const SummaryStep = defineComponent({
  name: "SummaryStep",
  props: {
    data: { type: Object, required: true },
    updateData: { type: Function, required: true },
  },
  setup(props) {
    return () =>
      h("div", [
        h("h2", "Summary"),
        h("p", ["Hello, ", h("strong", props.data.name || "Guest"), "!"]),
      ]);
  },
});

const schema = {
  initialData: { name: "" },
  steps: [
    { id: "name", title: "Name", component: "NameStep" },
    { id: "summary", title: "Summary", component: "SummaryStep" },
  ],
};

const schemaComponents = { NameStep, SummaryStep };
const schemaData = ref({ name: "" });
const onComplete = () => alert("Done!");
</script>
