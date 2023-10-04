<script setup lang="ts">


defineProps<{
  name: string
  type: string
  error?: boolean
  disabled?: boolean
  modelValue: string | number;
}>()

defineEmits(["update:modelValue"]);


</script>

<template>
  <div>
    <label class="font-bold text-system-neutral-800 ml-1" :for="name">{{ name }}</label>
    <div class="mt-2">
      <input
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          :type="type"
          :name="name"
          :id="name"
          :value="modelValue"
          :disabled="disabled"
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