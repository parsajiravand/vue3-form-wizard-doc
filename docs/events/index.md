### Events

Vue-form-wizard emits various events when specific actions occur within the component. These events can be observed in the demos, particularly in the [async validation demo](https://jsfiddle.net/bt5dhqtf/272/).

#### on-complete

Called when the finish button is clicked and the `before-change` function for the last step (if present) is executed. No parameters are sent with this event.

```javascript
this.$emit("on-complete");
```

#### on-loading

Triggered whenever an asynchronous `before-change` function is executed. This event is emitted before executing `before-change` and after the completion of the `before-change` method. The `on-loading` event is accompanied by a boolean value.

```javascript
this.$emit("on-loading", value);
```

#### on-validate

Fired when the execution of a `before-change` method is completed. The event carries a boolean value representing the validation result and an integer indicating the tab index.

```javascript
this.$emit("on-validate", validationResult, this.activeTabIndex);
```

#### on-error

Called when `before-change` is a promise that gets rejected with an error message. The error message is passed along with the event. See async validation fiddle for an example.

```javascript
this.$emit("on-error", error);
```

#### on-change

Triggered when there is a change in steps. It includes the `prevIndex` and `nextIndex` as parameters.

```javascript
this.$emit("on-change", prevIndex, nextIndex);
```

## Samples

### on-complete

```vue
<template>
  <div>
    <vue-form-wizard @on-complete="onComplete">
      <tab-content title="Personal Info" icon="ti-user">
        <h1>Personal Info</h1>
      </tab-content>
      <tab-content title="Address" icon="ti-map">
        <h1>Address</h1>
      </tab-content>
    </vue-form-wizard>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const onComplete = () => {
      console.log("Form completed");
    };

    return {
      onComplete,
    };
  },
};
</script>
```

### Full Example

```vue
<template>
  <form-wizard
    @on-complete="onComplete"
    @on-loading="setLoading"
    @on-validate="handleValidation"
    @on-error="handleErrorMessage"
    shape="circle"
    color="gray"
    error-color="#e74c3c"
  >
    <tab-content
      title="Personal details"
      :before-change="validateAsync"
      icon="ti-user"
    >
      First tab
    </tab-content>
    <tab-content title="Additional Info" icon="ti-settings">
      Second tab
    </tab-content>
    <tab-content title="Last step" icon="ti-check"> Third tab </tab-content>

    <div class="loader" v-if="loadingWizard"></div>
    <div v-if="errorMsg">
      <span class="error">{{ errorMsg }}</span>
    </div>
  </form-wizard>
</template>

<script setup>
import { ref } from "vue";
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";

const loadingWizard = ref(false);
const errorMsg = ref("");
const count = ref(0);
const onComplete = () => {
  alert("Yay. Done!");
};
const setLoading = (value) => {
  loadingWizard.value = value;
};
const handleValidation = (isValid, tabIndex) => {
  console.log("Tab: " + tabIndex + " valid: " + isValid);
};
const handleErrorMessage = (err) => {
  errorMsg.value = err;
};
const validateAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (count.value < 1) {
        count.value++;
        reject(
          "This is a custom validation error message. Click next again to get rid of the validation"
        );
      } else {
        count.value = 0;
        resolve(true);
      }
    }, 1000);
  });
};
</script>
<style>
@import url("https://unpkg.com/vue3-form-wizard/dist/style.css");
span.error {
  color: #e74c3c;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
/* This is a css loader. It's not related to vue-form-wizard */
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #e74c3c;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
```


