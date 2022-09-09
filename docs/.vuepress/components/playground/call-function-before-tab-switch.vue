<template>
  <form-wizard @on-complete="onComplete" shape="tab" color="#9b59b6">
    <tab-content
      title="Personal details"
      icon="ti-user"
      :before-change="beforeTabSwitch"
    >
      My first tab content
    </tab-content>
    <tab-content title="Additional Info" icon="ti-settings">
      My second tab content
    </tab-content>
    <tab-content title="Last step" icon="ti-check">
      Yuhuuu! This seems pretty damn simple
    </tab-content>
  </form-wizard>
</template>

<script>
export default {
  name: "CallFunctionBeforeTabSwitch",

  methods: {
    onComplete: function () {
      alert("Yay. Done!");
    },
    beforeTabSwitch: function () {
      alert("This is called before switchind tabs");
      return true;
    },
  },
};
</script>
