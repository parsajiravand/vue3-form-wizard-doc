# Schema Mode <Badge text="new" type="tip" /> <Badge text="v1" type="info" />

Schema mode is a **declarative API** introduced in v1.0.0 that lets you define wizard steps via a `schema` prop instead of `<tab-content>` children. Use it when you prefer configuration over markup.

## Overview

When you provide a `schema` prop and no `<tab-content>` children, FormWizard runs in **schema mode**:

- Define steps in a single schema object
- Use `condition` to hide steps dynamically
- Use `validate` to block navigation with custom error messages
- Share wizard data with `v-model` and `schema-components`

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
| `initialData` | `WizardData` | Initial data for the wizard |
| `steps` | `FormWizardStep[]` | Array of step definitions |

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

Each step component receives:

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

Use `condition` to show steps only when criteria are met:

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

`validate` can be async. Return a string to show an error message:

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
