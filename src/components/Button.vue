<script setup lang="ts">

// reactive props
defineProps<{
  variant: string, // primary | secondary
  type: string,
  value: string,
  error?: boolean,
  disabled?: boolean,
}>()


</script>

<template>
  <button class="w-full px-6 py-5 border-[1px] rounded-full outline-none btn"
          :class="{ 'bg-system-neutral-800 text-system-neutral-100 hover:border-primary hover:bg-primary hover:text-white' : variant === 'primary',
          'border-system-neutral-200 text-system-neutral-700 hover:border-primary hover:bg-primary hover:text-white' : variant === 'secondary'
  }">
    <span>
      <slot></slot>
    </span>
    <span class="text-paragraph-1">{{ value }}</span>
  </button>
</template>

<style scoped>
  .btn {
    box-shadow: 0 4px 10px 0 rgba(20, 20, 43, 0.04);
    transition: border-color 300ms ease, transform 300ms ease, background-color 300ms ease, color 300ms ease;
    transform-style: preserve-3d;
  }
  .btn:hover {
    transform: translate3d(0px, -3px, 0.01px);
  }
</style>