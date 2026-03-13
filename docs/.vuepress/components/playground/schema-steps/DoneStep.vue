<template>
  <div>
    <h2>All set</h2>
    <p>Email: {{ data.email || '(none)' }}</p>

     
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: Record<string, unknown>
  updateData: (partial: Record<string, unknown>) => void
}>()
</script>
