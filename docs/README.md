---
home: true
title: Vue3 Form Wizard | Home
heroImage: /logo.svg
heroAlt: Vue3 Form Wizard
heroText: Vue3 Form Wizard
tagline: A Vue 3 stepper with no runtime dependencies, for splitting a long form into steps people can actually finish.
actions:
  - text: Get Started
    link: /usage/
    type: primary
  - text: Live Playground
    link: /playground/
    type: secondary
features:
  - title: Two ways to build
    details: Declare steps as markup with <tab-content>, or as data with schema mode and v-model. Mix validation, conditions and shared state either way.
  - title: Dynamic steps
    details: Add or remove steps with v-if at runtime. A step appears at its position in your markup, and removing one updates the nav, the progress bar and the count.
  - title: Validation that blocks
    details: before-change runs when leaving a step and can return a boolean or a promise. Navigation waits, and the buttons disable themselves while it resolves.
  - title: Accessible by default
    details: A real tablist/tab/tabpanel structure, arrow-key navigation between steps, and Enter or Space to activate. Steps you have not reached stay out of the tab order.
  - title: Router aware
    details: Give a step a route and the URL follows the wizard. Deep links, the back button and shareable step URLs all work.
  - title: RTL ready
    details: Flip the content with rtl, and the steps, progress bar and buttons too with reverse-horizontal. Arrow keys follow what you see.
footer: MIT Licensed | Copyright © 2022-present Parsa Jiravand
---

### As Easy as 1, 2, 3

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash
npm install vue3-form-wizard
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
yarn add vue3-form-wizard
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash
pnpm add vue3-form-wizard
```

  </CodeGroupItem>
</CodeGroup>

Then register the component and include the stylesheet:

```vue
<script setup>
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
</script>

<template>
  <form-wizard @on-complete="onComplete">
    <tab-content title="Details">…</tab-content>
    <tab-content title="Review">…</tab-content>
  </form-wizard>
</template>
```

Head to [Usage](/usage/) for the full walkthrough, or [Playground](/playground/)
to try it in the page.
