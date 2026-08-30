A dynamic form wizard to split your forms easier

vue3-form-wizard is a vue based component with **no external dependencies** which simplifies tab wizard management and allows you to focus on the functional part of your app rather than wasting time on details.

## Highlights <Badge text="v1.2" type="info" />

- **Schema mode**: Declarative steps with `schema`, `condition`, `validate`, and `v-model` — see [Schema](/schema/)
- **Classic mode**: Slot-based steps with `<tab-content>`
- **Dynamic steps**: Add or remove steps with `v-if` at runtime — see [below](#dynamic-steps)
- **Router**: Supports string paths and route objects; URL sync when vue-router is installed
- **Accessibility**: Full tablist semantics and keyboard support — see [Accessibility](/accessibility/)
- **Richer slot props**: `tabs`, `tabCount`, `wizardData`, `updateWizardData`

# Usage

## NPM
`npm install vue3-form-wizard`
## YARN
`yarn add vue3-form-wizard`

## Direct script include
Download the css and js files from `dist` folder or reference them directly from github (check jsfiddle links)
```html
<link rel="stylesheet" href="https://unpkg.com/vue3-form-wizard/dist/style.css">
<script src="https://unpkg.com/vue3-form-wizard"></script>
```
## Component registration
Globally, on the app instance:

```js
import { createApp } from 'vue'
import Vue3FormWizard from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Vue3FormWizard)
app.mount('#app')
```

Or locally, in a single component:

```vue
<script setup>
import { FormWizard, TabContent } from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
</script>
```
## Template usage

```html
<form-wizard>
  <tab-content title="Personal details">
    My first tab content
  </tab-content>
  <tab-content title="Additional Info">
      My second tab content
   </tab-content>
   <tab-content title="Last step">
     Yuhuuu! This seems pretty damn simple
   </tab-content>
</form-wizard>
```
## Dynamic steps

Steps can appear and disappear at runtime. A step revealed by `v-if` is inserted
at its position in your markup rather than appended to the end, and removing one
updates the navigation, the progress bar and the step count together.

```vue
<template>
  <form-wizard>
    <tab-content title="Account">…</tab-content>
    <tab-content v-if="needsBilling" title="Billing">…</tab-content>
    <tab-content title="Review">…</tab-content>
  </form-wizard>
</template>
```

Changing a step's props later is picked up too — a `title` that changes when the
user switches language, or a `before-change` that swaps with the form state.

In schema mode, use a step `condition` instead of `v-if`; see
[Schema](/schema/).

## Router Integration

Vue3 Form Wizard supports automatic route synchronization with Vue Router. For detailed setup and usage instructions, see the [Router Integration](/router/) documentation.

## Schema Mode

In v1, you can define steps declaratively with a `schema` prop. See the [Schema](/schema/) documentation for the full API.

## Compatibility

vue3-form-wizard works with Vue > 3.x
