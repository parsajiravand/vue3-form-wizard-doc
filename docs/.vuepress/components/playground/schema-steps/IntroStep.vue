<template>
  <div>
    <h2>Choose plan</h2>
    <p>Select a plan to continue.</p>
    <label>
      Plan:
      <select :value="data.plan" @change="updateData({ plan: ($event.target as HTMLSelectElement).value })">
        <option value="basic">Basic</option>
        <option value="premium">Premium</option>
      </select>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: Record<string, unknown>;
  updateData: (partial: Record<string, unknown>) => void;
}>();
</script>
