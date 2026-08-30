# Accessibility

The wizard ships an accessible stepper by default. This page describes what you
get for free and what you are responsible for in your own step content.

## Structure

The step list is a real tab pattern:

| Element | Role |
| ------- | ---- |
| `<ul class="wizard-nav">` | `tablist` |
| `<li>` wrappers | `presentation` |
| Each step circle | `tab`, with `aria-controls` pointing at its panel |
| Each `<tab-content>` | `tabpanel`, with `aria-labelledby` pointing back at its step |

The current step carries `aria-selected="true"`. Steps that have not been
reached carry `aria-disabled="true"` and `tabindex="-1"`, so they are announced
as unavailable and skipped by <kbd>Tab</kbd>.

## Keyboard

| Key | Action |
| --- | ------ |
| <kbd>Tab</kbd> | Move into the stepper, then on to the buttons |
| <kbd>←</kbd> / <kbd>→</kbd> | Move focus between steps you have reached |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | Activate the focused step |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | Activate Back, Next or Finish |

Arrow keys follow what you see. With `reverse-horizontal` the steps run right to
left, so <kbd>→</kbd> moves to the step on the right, which is the *previous*
one.

## Buttons during async validation

While an async `before-change` is in flight, Back, Next and Finish are all
disabled. Navigation is blocked for the same period, so a double click cannot
skip a step.

## Custom button slots

The `next`, `prev` and `finish` slots render inside a wrapper that already has
`role="button"` and the keyboard handlers. Render a plain element inside them:

```vue
<template #next>
  <span class="my-button">Continue</span>
</template>
```

Avoid nesting a focusable `<button>` there — it produces two tab stops for one
control. Typing inside slot content is unaffected: the wizard only treats
<kbd>Space</kbd> as an activation when the wrapper itself has focus.

## What is still yours

The wizard makes the *stepper* accessible; the content of each step is your
form. Label every input, associate error messages with `aria-describedby`, and
move focus to the first invalid field when `before-change` rejects.

If a step fails validation, announce it. The wizard marks the step visually and
sets `validationError`, but a screen reader user needs the message in a live
region:

```vue
<tab-content title="Details" :before-change="validate">
  <p role="alert" v-if="error">{{ error }}</p>
  <!-- fields -->
</tab-content>
```
