# Playground

## Simple
&nbsp;
<playground-simple />
&nbsp;

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
&nbsp;&nbsp;
## Square steps

&nbsp;
<playground-squared-step />
&nbsp;

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
## With font awsome icon :new:
&nbsp;
<playground-with-font-awsome-icon />
&nbsp;

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

## With Themify icon :new:
&nbsp;
<playground-with-themify-icon />
&nbsp;

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
## Custom icon :new:
&nbsp;
<playground-custom-icon />
&nbsp;

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
## compositon API :new:
&nbsp;
<playground-composition-api />
&nbsp;

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
## Step index
&nbsp;
<playground-step-index />
&nbsp;

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

## Custom button and title text
&nbsp;
<playground-custom-button-and-title-text />
&nbsp;

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

## Custom title slot

&nbsp;
<playground-custom-title-slot />
&nbsp;

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

## Call a function before tab switch
&nbsp;
<playground-call-function-before-tab-switch />
&nbsp;

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
## Complete form example integrated with vue-form-generator
## Element UI form integration
## Vuelidate integration
## Dynamic components for tabs
## Vue router integration 
## Async validation with error 
## Customized buttons with scoped slot