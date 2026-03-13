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
import { ref, defineComponent, h } from "vue";
import FormWizard from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";

const IntroStep = defineComponent({
  name: "IntroStep",
  props: { data: { type: Object, required: true }, updateData: { type: Function, required: true } },
  setup(props) {
    return () =>
      h("div", [
        h("h2", "Choose plan"),
        h("p", "Select a plan to continue. Premium plan shows an extra step."),
        h("label", [
          "Plan: ",
          h("select", {
            value: props.data.plan,
            onChange: (e) => props.updateData({ plan: e.target.value }),
          }, [
            h("option", { value: "basic" }, "Basic"),
            h("option", { value: "premium" }, "Premium"),
          ]),
        ]),
      ]);
  },
});

const PremiumStep = defineComponent({
  name: "PremiumStep",
  props: { data: { type: Object, required: true }, updateData: { type: Function, required: true } },
  setup() {
    return () => h("div", [h("h2", "Premium features"), h("p", [h("strong", "Premium"), " plan – extra configuration."])]);
  },
});

const ReviewStep = defineComponent({
  name: "ReviewStep",
  props: { data: { type: Object, required: true }, updateData: { type: Function, required: true } },
  setup(props) {
    return () => h("div", [h("h2", "Review"), h("pre", JSON.stringify(props.data, null, 2))]);
  },
});

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
