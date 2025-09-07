# Router Integration

Vue3 Form Wizard now supports automatic route synchronization with Vue Router!

## Setup

First, install Vue Router:

```bash
npm install vue-router
```

Configure your Vue app with Vue Router:

```js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Your routes
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
```

## Usage

Add `route` prop to your `tab-content` components:

```html
<template>
  <form-wizard @on-complete="onComplete" color="#9b59b6">
    <tab-content title="Step 1" route="/step1">
      Content for step 1
    </tab-content>
    <tab-content title="Step 2" route="/step2">
      Content for step 2
    </tab-content>
    <tab-content title="Step 3" route="/step3">
      Content for step 3
    </tab-content>
     <!-- Router View -->
      <router-view></router-view>
      <!-- Router View -->
  </form-wizard>
</template>
```

## Features

✅ **Automatic Navigation**: Tab changes update the URL
✅ **URL Sync**: Direct URL access navigates to the correct tab
✅ **Browser History**: Back/forward buttons work correctly
✅ **Deep Linking**: Shareable URLs for specific wizard steps

## Route Types

The `route` prop accepts:

- **String**: `route="/step1"` - Direct path
- **Object**: `route="{ name: 'step1', params: { id: 1 } }"` - Named routes with params


- RouterTest component showing current route
- Navigation buttons for testing
- Route history tracking
- Automatic URL updates when switching tabs

## CodeSandbox Example

Try the live router integration example:

[View Router Integration Demo](https://codesandbox.io/p/sandbox/7ly4dx)
