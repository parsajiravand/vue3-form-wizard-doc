<template>
  <div>
    <h2>Enter email</h2>
    <input
      type="email"
      :value="data.email"
      @input="updateData({ email: ($event.target as HTMLInputElement).value })"
      placeholder="email@example.com"
      style="padding:8px;width:100%;max-width:280px;"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: Record<string, unknown>
  updateData: (partial: Record<string, unknown>) => void
}>()
</script>
