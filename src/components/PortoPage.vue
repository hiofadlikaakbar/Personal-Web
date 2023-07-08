<template>
  <div>
    <div
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-offset="400"
    >
      <img
        :src="dot1"
        alt="dot"
        class="xl:scale-[.65] 2xl:-top-24 relative -top-24 xl:-top-16 scale-50 -ml-5 xl:-ml-2"
      />
    </div>
    <div
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-offset="400"
    >
      <img
        :src="circle"
        alt="circle"
        class="ml-auto scale-110 md:scale-150 relative -top-52 pr-5 md:pr-10 lg:pr-8 2xl:pr-14"
      />
    </div>
    <img
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="500"
      :src="dashcircle"
      alt="dashcircle"
      class="absolute -right-20 hidden md:block -bottom-[60rem] lg:-bottom-[80rem] 2xl:-bottom-[50rem] 2xl:scale-150"
    />
  </div>
  <div
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-offset="580"
    data-aos-duration="800"
    id="portfolio"
    class="pb-10 -mt-28 xl:-mt-5 2xl:-mt-36"
  >
    <div class="container mx-auto">
      <div
        class="flex-col md:flex-row lg:flex items-center xl:px-10 2xl:px-5 justify-between mb-14 lg:mb-0"
      >
        <div class="text-center lg:text-left px-5 xl:px-0 mb-12">
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-offset="650"
            class="text-3xl font-bold mb-4 md:text-4xl 2xl:text-5xl text-ghost font-nunitosans"
          >
            Projects
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-offset="650"
            class="text-ghost text-lg 2xl:text-xl text-center leading-relaxed lg:text-left lg:max-w-lg font-pops"
          >
            This is some work that I have created to share and showcase what I
            have accomplished so far.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-offset="580"
          class="flex gap-6 px-5 xl:px-0 justify-center"
        >
          <span
            class="px-6 py-2 cursor-pointer active:scale-[.9] duration-200 ease-in-out bg-redcake text-ghost text-xl rounded-md"
            @click="goToPreviousPage"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </span>
          <span
            class="px-6 py-2 cursor-pointer active:scale-[.9] duration-200 ease-in-out bg-redcake text-ghost text-xl rounded-md"
            @click="goToNextPage"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </div>
      <!-- projects -->
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-offset="680"
        data-aos-easing="ease-in-out"
        class="flex flex-wrap px-5 2xl:px-0 items-center justify-center mb-8"
      >
        <div
          v-for="(item, index) in displayedItems"
          :key="index"
          class="w-full md:w-1/2 lg:w-1/3 relative mb-7 lg:mb-2"
        >
          <img
            :src="item.img"
            alt="img"
            loading="lazy"
            class="rounded-md md:scale-[.92]"
          />
          <div
            class="absolute flex-col md:scale-[.92] items-start w-full rounded-md top-0 h-full bg-redcake opacity-0 transition ease-in-out duration-300 hover:opacity-100"
          >
            <div class="px-5 pt-3 xs:pt-5 md:pt-10 lg:pt-5 xl:pt-14 2xl:pt-20">
              <h1
                class="text-ghost text-xl md:text-2xl xl:text-3xl 2xl:text-4xl mb-1 font-extrabold font-nunitosans"
              >
                {{ item.title }}
              </h1>
              <div class="font-pops flex gap-2 mb-5">
                <p
                  class="text-ghost text-base md:text-lg xl:text-xl 2xl:text-2xl"
                >
                  {{ item.technologies }}
                </p>
              </div>
              <div class="flex gap-4 mb-3">
                <div class="h-[2px] w-[30px] rounded-md bg-ghost"></div>
                <div class="h-[2px] w-[15px] rounded-md bg-ghost"></div>
              </div>
              <p
                class="text-ghost leading-6 xs:leading-relaxed xl:leading-loose 2xl:leading-10 text-base md:text-lg 2xl:text-xl mb-3 xs:mb-4 md:mb-5 xl:mb-7"
              >
                {{ item.description }}
              </p>
              <div class="flex items-center gap-4">
                <a
                  :href="item.live"
                  target="_blank"
                  class="block items-center tracking-wide hover:bg-ghost/75 duration-300 px-4 py-1 xl:px-7 xl:py-3 ease-in-out font-semibold bg-ghost text-black rounded font-pops"
                >
                  Know more
                  <i
                    class="fa-solid fa-arrow-right-long text-black text-lg ml-1"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dot1 from "../assets/dot.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import circle from "../assets/circle.svg";
import dashcircle from "../assets/dashcircle.svg";
import { ref, computed } from "vue";
const itemsPerPage = 3;
const currentPage = ref(0);

const displayedItems = computed(() => {
  const startIndex = currentPage.value * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.value.slice(startIndex, endIndex);
});

const totalPageCount = computed(() =>
  Math.ceil(items.value.length / itemsPerPage)
);

function goToNextPage() {
  if (currentPage.value < totalPageCount.value - 1) {
    currentPage.value++;
  }
}

function goToPreviousPage() {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
}
const items = ref([
  {
    img: img1,
    alt: "img1",
    title: "Crowdfunding Page",
    technologies: "Vue, Tailwind",
    description:
      "Crowdfunding landing page where users can enter the desired funding amount from the available funding tiers listed.",

    live: "https://fund-product-page.netlify.app/",
  },

  {
    img: img3,
    alt: "img3",
    title: "Fylo Landing Page",
    technologies: "Tailwind, JS",
    description:
      "The Fylo dark landing page,features a dark mode theme designed to provide users with comfortable viewing experience.",
    live: "https://my-dark-fylo-landing-page.netlify.app/",
  },
  {
    img: img10,
    alt: "img10",
    title: "Sneakers App",
    technologies: "Vue, Tailwind",
    description:
      "Study case Implementing UI design from into a real interface using Vue 3 and Tailwind",
    live: "https://my-sneakers-app.netlify.app/",
  },
  {
    img: img4,
    alt: "img4",
    title: "Blogr Landing Page",
    technologies: "Tailwind, JS",
    description:
      "Blogr landing page, a theme suitable for online advertising media, with a unique and eye-catching design.",
    live: "https://my-blogr-landing-page.netlify.app/",
  },

  {
    img: img6,
    alt: "img6",
    title: "Tracking Intro Hero",
    technologies: "Tailwind, JS",
    description:
      "Tracking Intro Hero that showcases responsive design across various screen sizes, slicing design from a frontend mentor.",
    live: "https://tracking-intro-hero.netlify.app/",
  },
  {
    img: img11,
    alt: "img11",
    title: "Clipboard landing page",
    technologies: "Tailwind",
    description:
      "Clipboard Landing Page with minimalist design aimed for clipboard copy advertising.",
    live: "https://my-clipboard-landing-page.netlify.app/",
  },
  {
    img: img7,
    alt: "img7",
    title: "WassUp UI",
    technologies: "Figma",
    description:
      "WassUp Chat Design, inspired by WhatsApp, created by me using Figma.",
    live: "https://dribbble.com/shots/20033654-WassUp-Chat-Design",
  },
  {
    img: img8,
    alt: "img8",
    title: "Cube Games",
    technologies: "Figma",
    description:
      "Cube Games Store Design, inspired by Steam, created by me using Figma.",
    live: "https://dribbble.com/shots/20223215-Cube-Game-Store-Design",
  },
  {
    img: img12,
    alt: "img12",
    title: "Intro Section Page",
    technologies: "Vue, Tailwind",
    description:
      "Intro Section Hero that showcases responsive design across various screen sizes, slicing design from a frontend mentor.",
    live: "https://intro-section-hero.netlify.app/",
  },
  {
    img: img2,
    alt: "img2",
    title: "Sunnyside Landing Page",
    technologies: "Tailwind, JS",
    description:
      "The Sunnyside landing page, features a unique layout and color combination inspired by a summer theme.",
    live: "https://my-own-sunnyside.netlify.app/",
  },
  {
    img: img5,
    alt: "img5",
    title: "Easybank Landing Page",
    technologies: "Tailwind, JS",
    description:
      "The Easybank landing page, showcasing an online digital bank with a minimalist and simple design.",
    live: "https://my-easybank-landingpage.netlify.app/",
  },
  {
    img: img9,
    alt: "img9",
    title: "Time Dashboard",
    technologies: "Tailwind, JS",
    description:
      "The time tracking dashboard created using tailwind, aims to track daily user routines in days, weeks, and months.",
    live: "https://tracking-time-dashboard.netlify.app/",
  },
]);
</script>
