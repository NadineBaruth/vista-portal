<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const activeImageIndex = ref(0);
const lightboxIsVisible = ref(false);
const imageGallery = ref([
  {
    id: 0,
    src: "/images/house-example-image-1.webp"
  },
  {
    id: 1,
    src: "/images/house-example-image-2.webp"
  },
  {
    id: 2,
    src: "/images/house-example-image-3.webp"
  },
  {
    id: 3,
    src: "/images/house-example-image-4.webp"
  },
  {
    id: 4,
    src: "/images/house-example-image-5.webp"
  },
  {
    id: 5,
    src: "/images/house-example-image-6.webp"
  },
  {
    id: 6,
    src: "/images/house-example-image-7.webp"
  },
  {
    id: 7,
    src: "/images/house-example-image-8.webp"
  },
  {
    id: 8,
    src: "/images/house-example-image-9.webp"
  },
  {
    id: 9,
    src: "/images/house-example-image-10.webp"
  },
  {
    id: 10,
    src: "/images/house-example-image-12.webp"
  },
  {
    id: 11,
    src: "/images/house-example-image-13.webp"
  }
]);
const lightbox = ref(null)

watchEffect(() => {
  if (lightbox.value) {
    console.log(lightbox.value)
    lightbox.value.scrollIntoView()
  }
})

function showLightbox(index) {
  activeImageIndex.value = index
  lightboxIsVisible.value = !lightboxIsVisible.value
  if (lightboxIsVisible.value) {
    return window.document.body.style.overflow = "hidden"
  }
  window.document.body.style.overflow = "auto"
}

function prevImg() {
  activeImageIndex.value--
}

function nextImg() {
  activeImageIndex.value++
}

</script>

<template>
  <section class="w-full">
    <div class="container">
      <div class="text-center">
        <h3 class="text-heading-2 text-system-neutral-800 font-bold">Schau dich um!</h3>
        <p class="text-neutral-600 text-paragraph-2 mt-6 lg:w-3/5 w-full mx-auto">Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet sed fringilla.</p>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full gap-5 mt-20">
        <div v-for="(item, index) in imageGallery" :key="item" class="xl:h-72 lg:h-60 h-60 w-full">
          <div class="rounded-2xl bg-primary w-full h-full" @click="showLightbox(index)">
            <img :src="item.src" alt="" class="w-full h-full object-cover rounded-2xl cursor-pointer">
          </div>
        </div>
      </div>
    </div>
  </section>
  <div
      ref="lightbox"
      v-if="lightboxIsVisible"
      class="sticky z-50 inset-0 lightbox w-full h-screen pt-5 py-6 flex justify-center content-center align-middle select-none"
  >
    <div class="w-full flex flex-col sm:place-content-center sm:text-center">
      <div class="flex justify-end w-full">
        <div
            class="place-self-start flex justify-center items-center text-white hover:cursor-pointer group"
            @click="showLightbox"
        >
          <svg class="group-hover:rotate-90 transition duration-200 ease-in-out w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>

      <div class="flex h-2/3 w-full self-center mt-10 justify-evenly">
        <div
            class="self-center absolute left-2 lg:left-[4.375rem] hover:cursor-pointer lg:w-1/12 flex justify-center"
            @click="prevImg"
            :class="activeImageIndex <= 0 ? 'hidden' : 'block'"
        >
          <svg class="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>

        <div id="images" class="sm:px-2 sm:h-full lg:max-w-[60%] max-w-full flex items-center">
          <div v-for="(img, index) in imageGallery" :key="img.id">
            <img
                v-if="activeImageIndex === img.id"
                alt=""
                class="object-contain max-w-full max-h-full"
                :src="img.src"
            />
          </div>
        </div>

        <div
            class="self-center absolute right-2 lg:right-[4.375rem] flex justify-center hover:cursor-pointer lg:w-1/12"
            @click="nextImg"
            :class="activeImageIndex >= imageGallery.length -1 ? 'hidden' : 'block'"
        >
          <svg class="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div class="self-center mt-8 justify-center items-end space-x-4 lg:flex hidden px-12">
        <div v-for="(img, index) in imageGallery" :key="index">
          <img
              alt=""
              class="object-contain w-40 h-40"
              :src="img.src"
              :class="{'opacity-30' : index === activeImageIndex}"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lightbox {
  background: rgba(0, 0, 0, 0.9);
}
.test {
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}

.test2 {
  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  opacity: 1;
  transform-style: preserve-3d;
}
</style>