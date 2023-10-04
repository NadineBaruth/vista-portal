<template>
  <swiper
      effect="coverflow"
      :grab-cursor="true"
      :centered-slides="true"
      slides-per-view="1.15"
      :breakpoints="{
        320: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1480: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      }"
      :space-between="30"
      :loop="true"
      :coverflow-effect="{
        rotate: 0,
        stretch: 0,
        depth: 20,
        modifier: 1,
        slideShadows: true
      }"
      :keyboard="{
        enabled: true
      }"
      :mousewheel="{
        thresholdDelta: 70
      }"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="h-[700px]"
  >
    <swiper-slide v-for="item in activityList" class="relative w-[24rem] h-[30rem] activity-card rounded-xl">
      <div class="w-full h-full rounded-xl flex items-end">
        <div class="absolute inset-0 w-full h-full">
          <img class="object-cover w-full h-full rounded-xl" :src="item.imageSrc" alt="">
          <div class="activity-gradient absolute inset-0 rounded-xl"></div>
        </div>
        <div class="w-full relative pb-6">
          <span class="uppercase text-white bg-[#087ac4] inline-block py-1.5 pl-7 pr-5 rounded-r-2xl text-[0.8rem] tracking-widest">domestic</span>
          <h2 class="mt-6 text-white px-6 text-paragraph-3 w-4/5 font-normal leading-6">
            {{ item.activity }}
          </h2>
          <p class="flex text-white font-light pl-5 mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span class="ml-2">
              {{ item.location }}
            </span>
          </p>
        </div>
      </div>
    </swiper-slide>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </swiper>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import {onMounted, ref} from "vue";



export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const activityList = ref([
      {
        activity: "Wandern mit unglaublichen Aussichten",
        imageSrc: "/images/activities/kevin-wolf-rr-3tpYdUb0-unsplash.jpg",
        link: "",
        location: "Madeira"
      },
      {
        activity: "Traditionen von Madeira entdecken",
        imageSrc: "/images/activities/hector-john-periquin-IVxPsNYFGZ4-unsplash.jpg",
        link: "",
        location: "Funchal - Monte, Madeira"
      },
      {
        activity: "Cocktail Abend",
        imageSrc: "/images/activities/helena-yankovska-7EbGkOm8pWM-unsplash.jpg",
        link: "",
        location: "Funchal, Madeira"
      },
      {
        activity: "Katamaran Touren",
        imageSrc: "/images/activities/steve-barker-oDpK25eqfKI-unsplash.jpg",
        link: "",
        location: "Madeira"
      },
      {
        activity: "Tagesausflug nach Porto Santo",
        imageSrc: "/images/activities/jose-duarte-Mjj9HnDc20s-unsplash.jpg",
        link: "",
        location: "Funchal, Madeira"
      },
      {
        activity: "Tag am Strand",
        imageSrc: "/images/activities/trung-cao-UBTK5D0bvgk-unsplash.jpg",
        link: "",
        location: "Madeira"
      },
      {
        activity: "Parasailing",
        imageSrc: "/images/activities/joe-desousa-kUvMjq3ETuQ-unsplash.png",
        link: "",
        location: "Calheta, Madeira"
      },
      {
        activity: "Paragliding",
        imageSrc: "/images/activities/lucas-mordzin-I4W8z_zMRlE-unsplash.jpg",
        link: "",
        location: "Calheta, Madeira"
      },
      {
        activity: "Die Seilbahnen in Funchal",
        imageSrc: "/images/activities/erik-karits-nvP_ZncANww-unsplash.jpg",
        link: "",
        location: "Funchal, Madeira"
      },
      {
        activity: "Frisches Obst, traditionelle Weine, sowie Souvenirs vom Markt ",
        imageSrc: "/images/activities/alex-meier-5S7i0ORPoYY-unsplash.jpg",
        link: "",
        location: "Funchal, Madeira"
      },
      {
        activity: "Tropical Garden",
        imageSrc: "/images/activities/piotr-musiol-U93WMXysiCg-unsplash.jpg",
        link: "",
        location: "Funchal, Madeira"
      },
      {
        activity: "Botanischer Garden",
        imageSrc: "/images/activities/carlita-benazito-vnd50_tpkqg-unsplash.jpg",
        link: "",
        location: "Funchal, Madeira"
      },
      {
        activity: "Altstadt erkunden",
        imageSrc: "/images/activities/illia-panasenko - VSOTKYILgQ-unsplash.jpg",
        link: "",
        location: "Funchal, Madeira"
      },
      {
        activity: "Baden in den natürlichen Quellen",
        imageSrc: "/images/activities/alex-perez-FS7UNiVGeWQ-unsplash.jpg",
        link: "",
        location: "Porto Moniz, Madeira"
      },
      {
        activity: "Ausflug in den Lava-Höhlen",
        imageSrc: "/images/activities/daniela-scaramelli-JN38P1VM_gc-unsplash.jpg",
        link: "",
        location: "São Vicente, Madeira"
      },
      {
        activity: "Kajak Tour",
        imageSrc: "/images/activities/taryn-manning-y3CAU_73jWk-unsplash.jpg",
        link: "",
        location: "Porto Santo, Madeira"
      },
      {
        activity: "Nebelwald(Feenwald) erkunden",
        imageSrc: "/images/activities/woody-van-der-straeten-ki_Tiv9i0fA-unsplash.jpg",
        link: "",
        location: "Fanal, Madeira"
      },
      {
        activity: "Bootstour auf einem Flagschiff",
        imageSrc: "/images/activities/austin-neill-emH2e5SBifE-unsplash.jpg",
        link: "",
        location: "Fanal, Madeira"
      },
      {
        activity: "Tag am Pool",
        imageSrc: "/images/activities/vicko-mozara-m82uh_vamhg-unsplash.jpg",
        link: "",
        location: "Home"
      },
    ])
    return {
      onSwiper,
      onSlideChange,
      activityList,
      modules: [Pagination, EffectCoverflow, Navigation],
    };
  },
};
</script>

<style>
.activity-card {
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  /*filter: blur(1px);*/
}
.activity-gradient {
  background: linear-gradient(to top,#0f2027,#203a4300,#2c536400);
}
</style>