<script setup lang="ts">
import { ref } from 'vue'

const activeFaqIndex = ref(null);
const faqContent = ref([
  {id: 1, question: 'Lorem ipsum dolor sit amet consectetur adipiscing', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla.'},
  {id: 2, question: 'Lorem ipsum dolor sit amet consectetur adipiscing', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla.'},
  {id: 3, question: 'Lorem ipsum dolor sit amet consectetur adipiscing', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla.'},
  {id: 4, question: 'Lorem ipsum dolor sit amet consectetur adipiscing', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla.'},
  {id: 5, question: 'Lorem ipsum dolor sit amet consectetur adipiscing', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla.'},
  {id: 6, question: 'Lorem ipsum dolor sit amet consectetur adipiscing', answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla.'}
]);

function showAnswerByIndex(index) {
  console.log(index)
  if(index === activeFaqIndex.value) return activeFaqIndex.value = null
  activeFaqIndex.value = index
}

</script>

<template>
  <section class="w-full">
    <div class="text-center">
      <h3 class="text-heading-2 text-system-neutral-800 font-bold">Du hast noch Fragen?</h3>
      <p class="text-neutral-600 text-paragraph-2 mt-6 lg:w-3/5 w-full mx-auto">Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla.</p>
    </div>


    <div class="md:flex block mt-16 md:space-x-5">
      <div class="md:w-1/2 w-full">
        <div
            class="rounded-2xl faq-box w-full px-8 py-10 hover:scale-[97.5%] transition-all cursor-pointer mt-5"
            v-for="(item, index) in faqContent"
            :class="index % 2 === 0 ? 'block' : 'hidden'"
            @click="showAnswerByIndex(index)"
        >
          <div class="flex justify-between items-center">
            <h4 class="text-heading-4 font-semibold text-system-neutral-800 w-2/3">
              {{ item.question }}
            </h4>
            <span class="bg-system-neutral-200 w-12 h-12 rounded-full block"></span>
          </div>
          <div class="mt-7 transition-opacity duration-1000 ease-in-out" :class="activeFaqIndex == item.id -1 ? 'block opacity-100' : 'hidden opacity-50'">
            <p class="text-system-neutral-700 text-paragraph-2">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 w-full">
        <div
            class="rounded-2xl faq-box w-full px-8 py-10 hover:scale-[97.5%] transition-all cursor-pointer mt-5"
            v-for="(item, index) in faqContent"
            :class="index % 2 === 0 ? 'hidden' : 'block'"
            @click="showAnswerByIndex(index)"
        >
          <div class="flex justify-between items-center">
            <h4 class="text-heading-4 font-semibold text-system-neutral-800 w-2/3">
              {{ item.question }}
            </h4>
            <span class="bg-system-neutral-200 w-12 h-12 rounded-full block"></span>
          </div>
          <div class="mt-7 transition-opacity duration-1000 ease-in-out" :class="activeFaqIndex == item.id -1 ? 'block opacity-100' : 'hidden opacity-50'">
            <p class="text-system-neutral-700 text-paragraph-2">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>


<!--    <div class="grid lg:grid-cols-2 grid-cols-1 w-full gap-5 mt-20">
      <div
          class="rounded-2xl faq-box w-full px-8 py-10 hover:scale-[97.5%] transition-all cursor-pointer"
          v-for="(item, index) in faqContent"
          :class="index % 2 === 0 ? 'order-1' : 'order-2'"
          @click="showAnswerByIndex(index)"
      >
        <div class="flex justify-between items-center">
          <h4 class="text-heading-4 font-semibold text-system-neutral-800 w-2/3 leading-8">
            {{ item.question }}
          </h4>
          <span class="bg-system-neutral-200 w-12 h-12 rounded-full block"></span>
        </div>
        <div class="mt-7 transition-opacity duration-1000 ease-in-out" :class="activeFaqIndex == item.id -1 ? 'block opacity-100' : 'hidden opacity-50'">
          <p class="text-system-neutral-700 text-paragraph-2">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>-->

  </section>
</template>

<style scoped>
.faq-box {
  box-shadow: 0 2px 12px 0 rgba(20, 20, 43, 0.08);
}
</style>