# Schema Mode <Badge text="new" type="tip" /> <Badge text="v1" type="info" />

Schema mode is a **declarative API** introduced in v1.0.0 that lets you define wizard steps via a `schema` prop instead of `<tab-content>` children. Use it when you prefer configuration over markup.

## Overview

When you provide a `schema` prop and no `<tab-content>` children, FormWizard runs in **schema mode**:

- Define steps in a single schema object
- Use `condition` to hide steps dynamically
- Use `validate` to block navigation with custom error messages
- Share wizard data with `v-model` and `schema-components`

## Demos

Try the schema mode demos on the [Demos](/demos/) page:

- [Schema: Basic](/demos/#schema-basic) — Simple two-step wizard with SFC components
- [Schema: Conditional Steps](/demos/#schema-conditional-steps) — Steps shown/hidden via `condition`
- [Schema: Async Validation](/demos/#schema-async-validation) — Block navigation with `validate` and error messages
- [Schema: Render Function](/demos/#schema-render-function) — Step components as plain render functions
- [Schema: defineComponent](/demos/#schema-define-component) — Step components using `defineComponent`

## Basic Usage

```vue
<template>
  <form-wizard
    :schema="schema"
    :schema-components="schemaComponents"
    v-model="wizardData"
    @on-complete="handleComplete"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FormWizard } from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
import IntroStep from './IntroStep.vue'
import ReviewStep from './ReviewStep.vue'

const schema = {
  initialData: { plan: 'basic' },
  steps: [
    { id: 'intro', title: 'Intro', component: 'IntroStep' },
    { id: 'review', title: 'Review', component: 'ReviewStep' },
  ],
}

const schemaComponents = { IntroStep, ReviewStep }
const wizardData = ref({ plan: 'basic' })
const handleComplete = () => alert('Done!')
</script>
```

## Schema Structure

### FormWizardSchema

| Property | Type | Description |
| -------- | ---- | ----------- |
| `initialData` | `WizardData` | Initial data for the wizard (see below) |
| `steps` | `FormWizardStep[]` | Array of step definitions |

### initialData

`initialData` is the **seed state** for the wizard. It defines the shape and starting values of the shared data that all step components read and update.

| Aspect | Details |
| ------ | ------- |
| **Purpose** | Provides the initial values for `data` and `v-model`. All steps share this object. |
| **Type** | Plain object with string keys. `WizardData` is `Record<string, any>`. |
| **Usage** | Step components receive `data` (current state) and `updateData` (to mutate it). Changes are merged into the wizard data and emitted via `update:modelValue`. |
| **Sync with v-model** | If you pass `v-model="wizardData"`, FormWizard keeps `initialData` and `wizardData` in sync. Use `initialData` in the schema and `ref(schema.initialData)` or equivalent for the bound value. |
| **Reactivity** | When `initialData` values change (e.g. via `updateData`), `condition` is re-run and step components get updated `data` props. |

**Example**

```js
const initial = { plan: 'basic', email: '', agreedToTerms: false }

const schema = {
  initialData: initial,
  steps: [
    { id: 'plan', title: 'Plan', component: 'PlanStep' },     // reads/writes data.plan
    { id: 'contact', title: 'Contact', component: 'ContactStep' },  // reads/writes data.email
    { id: 'review', title: 'Review', component: 'ReviewStep' },     // reads all
  ],
}

const wizardData = ref({ ...initial })
```

Bind with `v-model="wizardData"` to read or reset the data from the parent (e.g. after submit or when reopening the wizard).

### FormWizardStep

| Property | Type | Description |
| -------- | ---- | ----------- |
| `id` | `string` | Unique step identifier |
| `title` | `string` | Step title shown in the step indicator |
| `component` | `string` | Key in `schema-components` map (e.g. `'IntroStep'`) |
| `icon` | `string` | (Optional) Icon name (e.g. themify, font-awesome) |
| `customIcon` | `string` | (Optional) Custom icon HTML |
| `route` | `string \| RouteLocationRaw` | (Optional) Route for Vue Router sync |
| `condition` | `(ctx) => boolean \| Promise<boolean>` | (Optional) Hide step when returns `false` |
| `validate` | `(ctx) => boolean \| string \| Promise<boolean \| string>` | (Optional) Block navigation; return `true` to allow, or error string |

### Validation Context

Both `condition` and `validate` receive a context object:

```ts
{
  data: WizardData      // Current wizard data (reactive)
}
```

- **condition**: Re-evaluated when `wizardData` changes. Steps are hidden when it returns `false`.
- **validate**: Runs before leaving the step. Return `true` to allow navigation, or a `string` for an error message.

## Step Component Props

Each step component receives (see [Schema: Basic](/demos/#schema-basic) and [Schema: Render Function](/demos/#schema-render-function) for examples):

| Prop | Type | Description |
| ---- | ---- | ----------- |
| `data` | `WizardData` | Current wizard data |
| `updateData` | `(partial: Partial<WizardData>) => void` | Update wizard data (use with `v-model` or direct calls) |

Bind inputs with `updateData` for two-way sync:

```vue
<template>
  <div>
    <label>Plan:</label>
    <select :value="data.plan" @change="onPlanChange">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>
  </div>
</template>

<script setup>
defineProps(['data', 'updateData'])

const onPlanChange = (e) => {
  props.updateData({ plan: e.target.value })
}
</script>
```

## Conditional Steps

Use `condition` to show steps only when criteria are met. See [Schema: Conditional Steps](/demos/#schema-conditional-steps) demo.

```js
const schema = {
  initialData: { plan: 'basic' },
  steps: [
    { id: 'intro', title: 'Intro', component: 'IntroStep' },
    {
      id: 'premium',
      title: 'Premium',
      component: 'PremiumStep',
      condition: ({ data }) => data.plan === 'premium',  // Only for premium plan
    },
    { id: 'review', title: 'Review', component: 'ReviewStep' },
  ],
}
```

## Async Validation

`validate` can be async. Return a string to show an error message. See [Schema: Async Validation](/demos/#schema-async-validation) demo.

```js
{
  id: 'email',
  title: 'Email',
  component: 'EmailStep',
  validate: ({ data }) => {
    const ok = /^[^@]+@[^@]+\.\w+$/.test(data.email || '')
    return ok ? true : 'Enter a valid email'
  },
}
```

## Backward Compatibility

Schema mode is **optional**. Omit `schema` to keep using the classic slot-based flow with `<tab-content>`. Both modes can coexist in different parts of your app.
