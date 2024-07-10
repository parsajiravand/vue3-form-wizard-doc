## $refs

By using [refs](https://vuejs.org/v2/api/#ref) on the `form-wizard` component, you can access some internal wizard properties and methods.
Some of them are intended for internal usage while others can be used for general purpose operations.

- **activateAll** - will activate all steps as if the user went through all
- **activateTab(index)** - Activates a tab by index
- **activateTabAndCheckStep(index)** - Activates a tab by index and checks if the step can be activated
- **activeTabIndex** - Returns the index of the active tab
- **addTab(tab)** - Adds a tab to the wizard. The tab object should have the same structure as the tabs array
- **afterTabChange(oldIndex, newIndex)** - Hook that is called after the tab change
- **backButtonText** - Returns the back button text
- **beforeTabChange(oldIndex, newIndex)** - Hook that is called before the tab change
* **changeTab(oldIndex, newIndex)** - Navigates from one tab to another. Note that this method does not trigger validation methods. Use it with caution!
- **checkRouteChange()** - Checks if the route has changed and navigates to the correct tab
- **color** - Returns the color of the wizard
- **currentPercentage** - Returns the current percentage of the wizard
- **deactivateTabs()** - Deactivates all tabs
- **displayPrevButton** - Returns if the previous button should be displayed
- **emitTabChange(oldIndex, newIndex)** - Emits a tab change event
- **errorColor** - Returns the error color of the wizard
- **executeBeforeChange(oldIndex, newIndex)** - Executes the before change hook
- **fillButtonStyle** - Returns the fill button style
- **finishButtonText** - Returns the finish button text
- **focusNextTab()** - Focuses the next tab
- **focusPrevTab()** - Focuses the previous tab
- **focusNextTab** - Returns if the buttons should be hidden
- **id** - Returns the id of the wizard
- **initializeTabs()** - Initializes the tabs
- **isLastStep** - Returns if the current step is the last step
- **isVertical** - Returns if the wizard is vertical
- **layout** - Returns the layout of the wizard
- **loading** - Returns if the wizard is loading
- **maxStep** - Returns the maximum step
- **navigateToTab(index)** - Navigates to a tab by index
- **nextButtonText** - Returns the next button text
- **prevTab()** - Navigates to the previous tab
- **progress** - Returns the progress of the wizard
- **progressBarStyle** - Returns the progress bar style
- **removeTab(index)** - Removes a tab by index
- **reset()** - Resets the wizard to the initial state
- **setLoading(loading)** - Sets the loading state of the wizard
- **setValidationError(index, error)** - Sets a validation error for a tab
- **shape** - Returns the shape of the wizard
- **slotProps** - Returns the slot props
- **startIndex** - Returns the start index of the wizard
- **stepPercentage** - Returns the step percentage
- **stepSize** - Returns the step size
- **stepsClasses** - Returns the steps classes
- **subtitle** - Returns the subtitle of the wizard
- **tabCount** - Returns the tab count
- **tabs** - Returns the tabs
- **title** - Returns the title of the wizard
- **transition** - Returns the transition of the wizard
- **tryChangeRoute()** - Tries to change the route
- **validateBeforeChange(oldIndex, newIndex)** - Validates the tab change
- **validateOnBack** - Returns if the validation should be done on back

!> It's advised to use only the methods above, since the methods which are not listed here are internal and might change or get removed over time.

## Example

Here is an example of how to use the methods:(Option API)
```vue
<script>
export default {
  methods: {
    nextTab() {
      this.$refs.wizard.nextTab();
    },
    prevTab() {
      this.$refs.wizard.prevTab();
    },
    reset() {
      this.$refs.wizard.reset();
    }
  }
}
</script>
<template>
    <button @click="nextTab">Next</button>
    <button @click="prevTab">Prev</button>
    <button @click="reset">Reset</button>
  <form-wizard ref="wizard">
    <tab-content title="Personal Info" icon="ti-user">
      <!-- form content -->
       Form content 1
    </tab-content>
    <tab-content title="Address" icon="ti-map">
      <!-- form content -->
         Form content 2
    </tab-content>
    <tab-content title="Review" icon="ti-check">
      <!-- form content -->
            Form content 3
    </tab-content>
  </form-wizard>
</template>
```

Here is an example of how to use the methods:(Composition API)
```vue
<script>
import { ref } from 'vue'
export default {
  setup() {
    const wizard = ref(null)
    const nextTab = () => {
      wizard.value.nextTab()
    }
    const prevTab = () => {
      wizard.value.prevTab()
    }
    const reset = () => {
      wizard.value.reset()
    }
    return {
      wizard,
      nextTab,
      prevTab,
      reset
    }
  }
}
</script>
<template>
    <button @click="nextTab">Next</button>
    <button @click="prevTab">Prev</button>
    <button @click="reset">Reset</button>
  <form-wizard ref="wizard">
    <tab-content title="Personal Info" icon="ti-user">
      <!-- form content -->
       Form content 1
    </tab-content>
    <tab-content title="Address" icon="ti-map">
      <!-- form content -->
         Form content 2
    </tab-content>
    <tab-content title="Review" icon="ti-check">
      <!-- form content -->
            Form content 3
    </tab-content>
  </form-wizard>
</template>
```


 Here is an example of how to use the methods navigate to tab:(Composition API)
```vue
<script setup>
import { ref } from 'vue'
const formWizard = ref(null)
const navigateToTab = (index) => {
  formWizard.value.navigateToTab(index)
}
</script>
<template>
  <button @click="navigateToTab(1)">Navigate to tab 2</button>
  <form-wizard ref="formWizard">
    <tab-content title="Personal Info" icon="ti-user">
      <!-- form content -->
       Form content 1
    </tab-content>
    <tab-content title="Address" icon="ti-map">
      <!-- form content -->
         Form content 2
    </tab-content>
    <tab-content title="Review" icon="ti-check">
      <!-- form content -->
            Form content 3
    </tab-content>
  </form-wizard>
</template>
```

