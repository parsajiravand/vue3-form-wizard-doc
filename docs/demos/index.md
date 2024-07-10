# Playground

## Simple
&nbsp;
<playground-simple />
&nbsp;

::: details View Source 💻
  
```html
<template>
  <form-wizard @on-complete="onComplete">
    <tab-content title="Personal details">
      My first tab content
    </tab-content>
    <tab-content title="Additional Info" >
      My second tab content
    </tab-content>
    <tab-content title="Last step" >
      Yuhuuu! This seems pretty damn simple
    </tab-content>
  </form-wizard>
</template>

<script>
import {FormWizard,TabContent} from "vue3-form-wizard";
import 'vue3-form-wizard/dist/style.css'
export default {
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
     onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>
```
:::

&nbsp;&nbsp;
## Small Tab size :new:
&nbsp;
<playground-small-tab />
&nbsp;

::: details View Source 💻
  
```html
<template>
  <form-wizard @on-complete="onComplete" step-size="xs">
    <tab-content title="Personal details">
      You Can select 4 size for tabs : xs | sm | md | lg
    </tab-content>
    <tab-content title="Additional Info" >
      My second tab content
    </tab-content>
    <tab-content title="Last step" >
      Yuhuuu! This seems pretty damn simple
    </tab-content>
  </form-wizard>
</template>

<script>
import {FormWizard,TabContent} from "vue3-form-wizard";
import 'vue3-form-wizard/dist/style.css'
export default {
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
     onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>
```
:::

&nbsp;&nbsp;
## Square steps

&nbsp;
<playground-squared-step />
&nbsp;
::: details View Source 💻

```html
<template>
  <form-wizard @on-complete="onComplete" shape="square" color="#3498db">
    <tab-content title="Personal details">
      My first tab content
    </tab-content>
    <tab-content title="Additional Info" >
      My second tab content
    </tab-content>
    <tab-content title="Last step" >
      Yuhuuu! This seems pretty damn simple
    </tab-content>
  </form-wizard>
</template>

<script>
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
export default {
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
     onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>
```
:::
## With font awsome icon :new:
&nbsp;
<playground-with-font-awsome-icon />
&nbsp;
::: details View Source 💻

```html
<template>
  <FormWizard @on-complete="onComplete" color="#094899">
    <TabContent title="Personal details" icon="fa fa-user">
      My first tab content
    </TabContent>
    <TabContent title="Additional Info" icon="fa fa-gear">
      My second tab content
    </TabContent>
    <TabContent title="Last step" icon="fa fa-city">
      Yuhuuu! This seems pretty damn simple
    </TabContent>
  </FormWizard>
</template>

<script>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
export default {
  //component code
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
     onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
</style>

```
:::
## With Themify icon :new:
&nbsp;
<playground-with-themify-icon />
&nbsp;
::: details View Source 💻

```html
<template>
  <FormWizard @on-complete="onComplete" color="#c11c67">
    <TabContent title="Personal details" icon="ti-user">
      My first tab content
    </TabContent>
    <TabContent title="Additional Info" icon="ti-info-alt">
      My second tab content
    </TabContent>
    <TabContent title="Last step" icon="ti-credit-card">
      Yuhuuu! This seems pretty damn simple
    </TabContent>
  </FormWizard>
</template>

<script>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
export default {
  //component code
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
    onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>
<style>
@import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
</style>

```
:::
## Custom icon :new:
&nbsp;
<playground-custom-icon />
&nbsp;
::: details View Source 💻

```html
<template>
  <FormWizard @on-complete="onComplete" color="#dd9c1d">
    <TabContent 
    title="Personal details" 
    customIcon="<img src='./vue.png' width='40px' />"
    >
    <div >
      You can add your HTML tag (svg,img,i,...) 
      <br>
      also can add your custom component (b-img,b-icon,....)
    </div>

    </TabContent>
    <TabContent
    title="Additional Info"  
    :customIcon="`<img  src='${viteIcon}' width='35px' />`" > 
      add your dynamic source
    </TabContent>
    <TabContent title="Last step" :customIcon="nuxtIcon">
      create tag in computed
    </TabContent>
  </FormWizard>
</template>

<script>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
export default {
    data() {
        return {
            viteIcon:'https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667'
        }
    },
  //component code
  components: {
    FormWizard,
    TabContent,
  },
  computed:{
    nuxtIcon(){
        return `<img  src='https://nuxtjs.org/design-kit/colored-logo.svg' width='35px' />`
    }
  },
  methods: {
    onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>


```
:::
## compositon API :new:
&nbsp;
<playground-composition-api />
&nbsp;
::: details View Source 💻

```html
<script setup>
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";

function onComplete() {
  alert("Yay. Done!");
}
</script>
<template>
  <FormWizard @on-complete="onComplete" color="#094899">
    <TabContent title="Personal details" icon="fa fa-user">
      My first tab content
    </TabContent>
    <TabContent title="Additional Info" icon="fa fa-gear">
      My second tab content
    </TabContent>
    <TabContent title="Last step" icon="fa fa-city">
      Yuhuuu! This seems pretty damn simple
    </TabContent>
  </FormWizard>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
</style>


```
:::
## Step index
&nbsp;
<playground-step-index />
&nbsp;
::: details View Source 💻

```html
<template>
 <form-wizard @on-complete="onComplete"
                      :start-index="1"
                      color="#e67e22">
            <tab-content title="Personal details"
                        >
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         >
              My second tab content
            </tab-content>
            <tab-content title="Last step"
                         >
              Yuhuuu! This seems pretty damn simple
            </tab-content>
        </form-wizard>
</template>

<script>
import {FormWizard,TabContent} from "vue3-form-wizard";
import 'vue3-form-wizard/dist/style.css'
export default {
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
     onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>
```
:::
## Custom button and title text
&nbsp;
<playground-custom-button-and-title-text />
&nbsp;
::: details View Source 💻

```html
<template>
  <form-wizard
    @on-complete="onComplete"
    title="This is a new title"
    subtitle="And a new subtitle"
    shape="tab"
    back-button-text="Go back!"
    next-button-text="Go next!"
    finish-button-text="We're there"
    color="#9b59b6"
  >
    <tab-content title="Personal details">
      My first tab content
    </tab-content>
    <tab-content title="Additional Info" >
      My second tab content
    </tab-content>
    <tab-content title="Last step" >
      Yuhuuu! This seems pretty damn simple
    </tab-content>
  </form-wizard>
</template>

<script>
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
export default {
  name: "CustomButtonAndTitleText",
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
     onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>

```
:::
## Custom title slot

&nbsp;
<playground-custom-title-slot />
&nbsp;
::: details View Source 💻

```html
<template>
  <form-wizard @on-complete="onComplete" shape="tab" color="#e67e22">
    <template #title>This will replace my whole title</template>

    <tab-content title="Personal details">
      My first tab content
    </tab-content>
    <tab-content title="Additional Info" >
      My second tab content
    </tab-content>
    <tab-content title="Last step" >
      Yuhuuu! This seems pretty damn simple
    </tab-content>
  </form-wizard>
</template>

<script>
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
export default {
  name: "CustomTitleSlost",
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
     onComplete() {
      alert("Yay. Done!");
    },
  },
};
</script>


```
:::

## Call a function before tab switch
&nbsp;
<playground-call-function-before-tab-switch />
&nbsp;
::: details View Source 💻

```html
<template>
  <form-wizard @on-complete="onComplete" shape="tab" color="#9b59b6">
    <tab-content
      title="Personal details"
     
      :before-change="beforeTabSwitch"
    >
      My first tab content
    </tab-content>
    <tab-content title="Additional Info" >
      My second tab content
    </tab-content>
    <tab-content title="Last step" >
      Yuhuuu! This seems pretty damn simple
    </tab-content>
  </form-wizard>
</template>

<script>
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
export default {
  name: "CallFunctionBeforeTabSwitch",

  methods: {
     onComplete() {
      alert("Yay. Done!");
    },
    beforeTabSwitch() {
      alert("This is called before switchind tabs");
      return true;
    },
  },
};
</script>


```
:::

## Custom Slot Props (Footer,Step) :new:
&nbsp;
<playground-custom-slot-props />
&nbsp;
::: details View Source 💻

```html
<template>
<FormWizard color="#9b59b6">
    <!-- Access WizardStep Component directly with all props  -->
    <template v-slot:step="props">
      <WizardStep
        :tab="props.tab"
        :transition="props.transition"
        :index="props.index"
        @click="props.navigateToTab(props.index)"
      >
        <small style="color: blue; font-size: 12px; margin: auto 2px">
          Tab{{ props.index + 1 }}
        </small>
      </WizardStep>
    </template>

    <!-- title slot  -->
    <template #title>
      <div><h3>Custom Slot Title</h3></div>
    </template>
    <TabContent title="First">
      <section class="form-wizard-sample-card">My first tab content</section>
    </TabContent>
    <TabContent title="Additional Info">
      <section class="form-wizard-sample-card">My second tab content</section>
    </TabContent>
    <TabContent title="Last step">
      <section class="form-wizard-sample-card">
        Yuhuuu! This seems pretty damn simple
      </section>
    </TabContent>

     <!-- Access footer  directly with all props options -->
     <!-- You can create custom design and event -->
    <template v-slot:footer="props">
      <div class="wizard-footer-left">
        <button
          v-if="props.activeTabIndex > 0 && !props.isLastStep"
          :style="props.fillButtonStyle"
          @click.native="props.prevTab()"
          class="wizard-button"
        >
          Previous test
        </button>
      </div>
      <div class="wizard-footer-right">
        <button
          v-if="!props.isLastStep"
          @click.native="props.nextTab()"
          class="wizard-button"
          :style="props.fillButtonStyle"
        >
          Next
        </button>

        <button
          v-else
          @click.native="confirmMethod"
          class="finish-button"
          :style="props.fillButtonStyle"
        >
          {{ props.isLastStep ? "Done" : "Next" }}
        </button>
      </div>
    </template>
  </FormWizard>
</template>
<script>
import { FormWizard, TabContent, WizardStep } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
export default {
  name: "CustomSlotProps",
  components: {
    FormWizard,
    TabContent,
    WizardStep,
  },

  methods: {
    confirmMethod() {
      alert("Done");
    },
  },
};
</script>
<style>
.wizard-card-footer .wizard-footer-left .wizard-button {
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}
.wizard-card-footer .wizard-footer-right .wizard-button {
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}
.wizard-card-footer .wizard-footer-right .finish-button {
  padding: 15px 25px;
  border-radius: 6px;
  cursor: pointer;
  background-color: green !important;
  border: 0;
}
.form-wizard-sample-card {
  max-width: 300px;
  text-align: center;
  padding: 30px 10px;
  box-shadow: 0px 4px 8px #eee;
  margin: 10px auto;
  border-radius: 10px;
}
</style>


```
:::

## Async validation with error message

#### `before-change` `beforeChange (): boolean | Promise<boolean>` can accept a promise that resolves with a boolean. Resolving with a truthy value, will trigger the navigation to next step. Rejecting with a message, will set an internal message that can be handled and displayed if needed.

&nbsp;
<playground-async-validation />
&nbsp;
::: details View Source 💻

```html
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
:::

## Complete form example integrated with vue-form-generator
## Element UI form integration
## Vuelidate integration
## Dynamic components for tabs
## Vue router integration 
## Async validation with error 
## Customized buttons with scoped slot