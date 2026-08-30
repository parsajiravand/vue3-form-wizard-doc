# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-08-30

### Fixed

- Removing a step now actually removes it. A `<tab-content>` hidden with `v-if` used to unmount its panel but keep its entry in the navigation, the progress bar and the step count
- A step revealed later by `v-if` appears at its position in your markup instead of being appended to the end
- Changing a step's props at runtime — `title`, `icon`, `route`, `before-change`, `after-change` — is picked up. Previously a step was registered once and never updated, which also affected translated titles
- Every wizard on a page rendered `id="fw_1"`; each instance now gets its own id, and arrow-key focus can no longer jump into a different wizard
- Removing the active first step no longer leaves the wizard with nothing selected
- `reset()` no longer throws on a wizard with no steps
- In schema mode the active step is kept when a conditional step appears or disappears
- The progress bar no longer computes an infinite width when there are no steps

### Accessibility

- <kbd>Space</kbd> activates steps and the Back / Next / Finish buttons, as well as <kbd>Enter</kbd>
- `aria-disabled` was inverted: the current step was announced as disabled while unreachable steps were announced as available
- Unreachable steps use `tabindex="-1"` instead of an invalid empty value
- `<li>` wrappers inside the tablist are marked `role="presentation"`
- Arrow keys are mirrored under `reverse-horizontal`
- Finish is disabled during an async `before-change`, matching Back and Next

### Compatibility

No prop, event, slot, method or generated DOM id changed. Upgrading from 1.1.x
requires no changes.

### Known issues

- `require("vue3-form-wizard")` resolves to ESM, so CommonJS consumers need a dynamic `import()`. A fix needs a separate `.cjs` build and is planned for a later release
- The emitted `.d.ts` files contain `.vue` imports that do not resolve for consumers

---

## [1.1.1] - 2026-03-20

### Added

- RTL support for wizard content via `rtl` prop
- Horizontal reversal for steps, progress bar, and footer buttons via `reverseHorizontal` prop

### Docs

- Documented `rtl` and `reverseHorizontal` props
- Added RTL usage examples and a dedicated RTL demo

---

## [1.0.0] - 2026-03-16

### Added

- **Schema mode**: Declarative API with `schema`, `schema-components`, and `v-model` for shared wizard data
- Schema step support for `condition` (hide steps dynamically) and `validate` (block navigation)
- Richer slot props: `tabs`, `tabCount`, `wizardData`, `updateWizardData`
- 15 local samples in dev app: basic, icons, layouts, shapes, validation, schema mode
- Test suite: Vitest + Vue Test Utils (navigation, validation, router, accessibility, TabContent, WizardStep)
- `jsdom` and `vue-router` as devDependencies for tests
- `npm run test` script
- Vue JSX plugin for `.tsx` test files
- Improved accessibility: unified IDs, ARIA linkage, keyboard navigation (left/right keys)
- Vue Router support for **string and location-object** `route` props (e.g. `route="{ name: 'step1', params: { id: 1 } }"`)
- SSR safeguards: guarded DOM access when `document` is unavailable
- Stable per-instance `wizardId` generation
- Type re-exports for `FormWizardSchema`, `WizardData`, etc.

### Changed

- Router integration: normalized route handling; no-op when vue-router not installed
- FormWizard as single source of truth for `active`, `checked`, `validationError`; TabContent uses callbacks
- Clarified packaging: `sideEffects` for styles, `types` entry in package.json

### Migration

- Classic slot mode and string `route` props remain supported
- Schema mode is optional; omit `schema` to use classic flow
- Ensure vue-router v4 is installed for URL ↔ tab sync

---

## [0.3.2] - 2025-09-06

### Added

- Vue Router integration for automatic route synchronization
- Route-based navigation support with `route` prop on tab-content components
- Automatic URL updates when switching tabs
- Browser history support (back/forward buttons)
- Deep linking support for shareable URLs
- Route watching and navigation handling

### Changed

- Enhanced FormWizard component with router integration
- Updated component lifecycle with proper router setup and cleanup

---

## [0.3.1] - 2025-09-01

### Changed

- Version bump for maintenance release

---

## [0.3.0] - 2025-08-29

### Added

- Function exposure in form-wizard component
- Composition API updates

### Fixed

- Tab content not showing issue

---

## [0.2.8] - 2025-08-29

### Changed

- Version bump for maintenance release

---

## [0.2.7] - 2025-08-29

### Changed

- Internal improvements and bug fixes

---

## [0.2.2]

### Fixed

- TypeScript import component issue

---

## [0.1.9]

### Added

- Additional features and improvements

### Changed

- Component structure updates

### Fixed

- Fixed decentered progress bar at step-sizes < 'md'

---

## [0.1.1]

### Added

- Custom icon props
- Text and background color checking functionality

### Changed

- Icon section structure improvements
- Add tab function structure (removed get index by slot)

### Removed

- Some transition effects
- Source folder in dist
