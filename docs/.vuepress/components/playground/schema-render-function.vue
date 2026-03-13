<template>
  <FormWizard title="Schema: Render Function" :schema="schema" :schema-components="schemaComponents"
    v-model="schemaData" color="#16a085" @on-complete="onComplete" />
</template>

<script setup>
import { ref, h } from "vue";
import { FormWizard } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";

// Step components as plain render functions (functional components)
const StepA = (props) =>
  h("div", [
    h("h2", "Step A"),
    h("p", "Built with render function (h)."),
    h("input", {
      type: "text",
      value: props.data.value,
      placeholder: "Enter something",
      onInput: (e) => props.updateData({ value: e.target.value }),
      style: "padding:8px;width:100%;max-width:240px;",
    }),
  ]);

const StepB = (props) =>
  h("div", [
    h("h2", "Step B"),
    h("p", ["You entered: ", h("strong", props.data.value || "(nothing)")]),
  ]);

const schema = {
  initialData: { value: "" },
  steps: [
    { id: "a", title: "Input", component: "StepA" },
    { id: "b", title: "Result", component: "StepB" },
  ],
};

const schemaComponents = { StepA, StepB };
const schemaData = ref({ value: "" });
const onComplete = () => alert("Done!");
</script>
