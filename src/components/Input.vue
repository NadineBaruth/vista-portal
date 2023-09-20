<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IntersectionObserver from "./IntersectionObserver.vue";

// reactive props
defineProps<{
  name: string,
  type: string,
  value?: string,
  error?: boolean,
  disabled?: boolean,
}>()

</script>

<template>
  <div>
    <label class="font-bold text-system-neutral-800 ml-1" for="test">{{ name }}</label>
    <div class="mt-2">
      <input
          :type="type"
          :name="name"
          :id="name"
          :disabled="disabled"
          v-model="value"
          class="text-system-neutral-400 w-full px-6 py-5 border-[1px] border-system-neutral-200 rounded-full input text-paragraph-1 outline-none"
      />
    </div>
    <div class="h-2">
      <span v-if="error"></span>
    </div>
  </div>
</template>

<style scoped>
  .input {
    box-shadow: 0 2px 12px 0 rgba(20, 20, 43, 0.08);
    transition: box-shadow 300ms ease, color 300ms ease, border-color 300ms ease;
  }
</style>