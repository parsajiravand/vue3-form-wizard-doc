# Playground

Live, editable examples. Everything on this page runs the real component in your
browser — no sandbox to load, nothing to install.

For the full catalogue of variations see [Demos](/demos/).

&nbsp;

## Basic wizard

Three steps, default styling. Use the **Next** and **Back** buttons, or focus a
step circle and move with <kbd>←</kbd> / <kbd>→</kbd>, then activate it with
<kbd>Enter</kbd> or <kbd>Space</kbd>.

<playground-simple />

&nbsp;

## Validation before each step

`before-change` runs when leaving a step. Return `false` to block navigation, or
a promise for async checks — the buttons disable themselves while it resolves.

<playground-async-validation />

&nbsp;

## Schema mode

Steps declared as data rather than markup, with shared state through `v-model`.

<playground-schema-basic />

&nbsp;

## Conditional steps

A step whose `condition` returns `false` disappears from the wizard, and the
step numbering and progress bar adjust to match.

<playground-schema-conditional />

&nbsp;

## Right to left

`rtl` flips the content; add `reverse-horizontal` to run the steps, progress bar
and buttons right to left too.

<playground-rtl />

&nbsp;

## Full application example

A complete project with routing, built on CodeSandbox.

<iframe src="https://codesandbox.io/embed/7ly4dx"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="sample-vue3-form-wizard-router-option"
     loading="lazy"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
