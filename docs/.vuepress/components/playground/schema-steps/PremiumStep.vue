<template>
  <div>
    <h2>Premium features</h2>
    <p><strong>Premium</strong> plan – extra configuration.</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: Record<string, unknown>
  updateData: (partial: Record<string, unknown>) => void
}>()
</script>
