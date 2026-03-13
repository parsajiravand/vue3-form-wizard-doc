<template>
  <div>
    <h2>Review</h2>
    <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: Record<string, unknown>
  updateData: (partial: Record<string, unknown>) => void
}>()
</script>
