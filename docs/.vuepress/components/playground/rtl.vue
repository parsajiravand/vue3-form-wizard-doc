<template>
  <FormWizard
    title="تست راست چین"
    rtl
    reverse-horizontal
    back-button-text="قبلی"
    next-button-text="بعدی"
    finish-button-text="تکمیل"
    color="#3498db"
    @on-complete="onComplete"
  >
    <TabContent title="مرحله ۱">
      <div>
        <h2>تست راست چین مرحله ۱</h2>
        <p> محتوای مرحله ۱ </p>
      </div>
    </TabContent>
    <TabContent title="مرحله ۲">
      <div>
        <h2>تست راست چین مرحله ۲</h2>
        <p> محتوای مرحله ۲ </p>
      </div>
    </TabContent>
    <TabContent title="مرحله ۳">
      <div>
        <h2>تست راست چین مرحله ۳</h2>
        <p> محتوای مرحله ۳ </p>
      </div>
    </TabContent>
  </FormWizard>
</template>

<script>
import { FormWizard, TabContent } from "vue3-form-wizard";

export default {
  name: "RtlDemo",
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
@import url("https://unpkg.com/vue3-form-wizard/dist/style.css");
</style>

