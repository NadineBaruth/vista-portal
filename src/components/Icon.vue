<script setup lang="ts">

// reactive props
defineProps<{
  variant: string
}>()


</script>

<template>
  <div>
    <span class="mr-2">ICON</span>
    <slot></slot>
  </div>
</template>

<style scoped>
</style>