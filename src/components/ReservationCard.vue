<script setup lang="ts">
import { ref } from 'vue'
import Input from "./Input.vue"
import Button from "./Button.vue";

// reactive state
const link = ref("")



</script>

<template>
  <div class="lg:sticky relative lg:top-10 lg:inset-x-0 w-full bg-white rounded-3xl test py-12 px-10">
    <h4 class="text-neutral-800 text-heading-3 font-bold">Reserviere jetzt!</h4>
    <p class="text-neutral-600 text-paragraph-2 leading-7">Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit.</p>
    <div class="mt-10">
      <span class="text-neutral-600 text-paragraph-2 mt-6 leading-7 mb-2 block">Jetzt ab</span>
      <div>
        <span class="text-display-4 text-neutral-800 font-bold">120,00€</span>
        <span class="text-neutral-500 text-paragraph-2 mt-6 leading-7 ml-1 font-medium">/pro Nacht</span>
      </div>
    </div>
    <div class="flex space-x-4 mt-10">
      <div class="w-2/3">
        <Input name="Nights" type="number" value="7"></Input>
      </div>
      <div class="w-1/3">
        <Input name="Personen" type="number" value="7"></Input>
      </div>
    </div>
    <div class="mt-2">
      <Button variant="secondary"></Button>
    </div>
    <div class="flex justify-center items-center my-10">
      <div class="h-[1px] bg-system-neutral-300 w-full"></div>
      <span class="px-8">OR</span>
      <div class="h-[1px] bg-system-neutral-300 w-full"></div>
    </div>
    <div>
      <Button variant="primary"></Button>
    </div>
  </div>
</template>

<style scoped>
  .test {
    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    opacity: 1;
    transform-style: preserve-3d;
    border-color: #eee;
    box-shadow: 0 2px 12px 0 rgba(20, 20, 43, 0.08);
    transition-property: none;
  }
</style>