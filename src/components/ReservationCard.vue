<script setup lang="ts">
import { ref } from 'vue'
import Input from "./Input.vue"
import Button from "./Button.vue";

const nights = ref(7);
const persons = ref(2);

// output value key by key
const onNightInput = (e: { target: { value: string } }) => {
  nights.value = e.target.value;
};
const onPersonInput = (e: { target: { value: string } }) => {
  nights.value = e.target.value;
};


</script>

<template>
  <div class="lg:sticky relative lg:top-10 lg:inset-x-0 w-full bg-white rounded-3xl test py-10 px-8">
    <h4 class="text-neutral-800 text-heading-3 font-bold">Reserviere jetzt!</h4>
    <p class="text-neutral-600 text-paragraph-2">Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit.</p>
    <div class="mt-10">
      <span class="text-neutral-600 text-paragraph-2 mt-6 mb-2 block">Jetzt ab</span>
      <div>
        <span class="text-display-4 text-neutral-800 font-bold">120,00€</span>
        <span class="text-neutral-500 text-paragraph-2 mt-6 ml-1 font-medium">/pro Nacht</span>
      </div>
    </div>
    <div class="flex space-x-4 mt-10">
      <div class="w-2/3">
        <Input v-model="nights" @input="onNightInput" name="Nights" type="number" :model-value="nights"></Input>
      </div>
      <div class="w-1/3">
        <Input v-model="nights" @input="onPersonInput" name="Personen" type="number" :model-value="persons"></Input>
      </div>
    </div>
    <div class="mt-2">
      <Button variant="secondary" value="Jetzt buchen"></Button>
    </div>
    <div class="flex justify-center items-center my-10">
      <div class="h-[1px] bg-system-neutral-300 w-full"></div>
      <span class="px-8">OR</span>
      <div class="h-[1px] bg-system-neutral-300 w-full"></div>
    </div>
    <div>
      <Button variant="primary" value="Über Airbnb buchen"></Button>
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