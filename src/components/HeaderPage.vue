<template>
  <header id="about" class="pb-40 md:pb-52">
    <nav
      :class="{
        'bg-secondary/75 shadow-lg': isScrolled,
        'bg-transparent': !isScrolled,
      }"
      class="px-6 xl:px-14 py-6 w-full fixed z-50"
      style="transition: background-color 0.3s ease-in-out"
    >
      <div class="flex justify-between container mx-auto items-center">
        <h1
          data-aos="fade-left"
          data-aos-delay="1100"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          class="text-redcake text-2xl md:text-3xl font-extrabold font-nunitosans"
        >
          HioAkbarzz.
        </h1>

        <div
          data-aos="fade-left"
          data-aos-delay="1100"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          class="relative z-50"
        >
          <ul class="md:flex hidden items-center space-x-7 lg:space-x-9">
            <li
              v-for="link in links"
              :key="link.text"
              class="text-ghost text-base font-medium active:scale-[.90] transition duration-300 ease-in-out hover:text-redcake"
            >
              <a
                :href="link.url"
                @click.prevent="scrollToComponent(link.component)"
                >{{ link.text }}</a
              >
            </li>
            <button
              class="bg-redcake hover:bg-secondary active:scale-[.90] duration-300 ease-in-out px-4 py-3 block text-ghost rounded"
            >
              Download CV
            </button>
          </ul>

          <button @click="toggleNav" class="block md:hidden focus:outline-none">
            <img :src="burgerMenu" alt="burger" ref="burger" />
          </button>
        </div>
        <ul
          :class="showMenu ? 'right-0 grid' : 'right-[-100%] grid opacity-0'"
          class="h-screen w-1/2 md:w-1/3 fixed duration-500 lg:hidden ease-in-out content-center font-pops space-y-8 md:space-y-12 top-0 right-0 pl-[1.19rem] xs:pl-6 md:pl-12 bg-secondary shadow-2xl"
        >
          <li
            v-for="link in links"
            :key="link.text"
            class="text-ghost text-base font-semibold transition active:scale-[.90] duration-300 ease-in-out hover:text-redcake"
          >
            <a
              :href="link.text"
              @click.prevent="scrollToComponent(link.component)"
              >{{ link.text }}</a
            >
          </li>

          <button
            class="bg-redcake duration-300 w-[130px] md:w-[150px] ease-in-out px-2 py-2 md:text-lg md:px-4 md:py-3 whitespace-nowrap block text-ghost rounded"
          >
            Download CV
          </button>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import burgerMenu from "../assets/burgers.svg";
import closeMenu from "../assets/closemenu.svg";
import { ref, onMounted, onUnmounted } from "vue";
import scrollIntoView from "scroll-into-view-if-needed";

const burger = ref(null);
const showMenu = ref(false);
const toggleNav = () => {
  showMenu.value = !showMenu.value;
  showMenu.value
    ? (burger.value.src = closeMenu)
    : (burger.value.src = burgerMenu);
};
const links = [
  { text: "About Me", url: "#about", component: "about" },
  {
    text: "Portfolio",
    url: "#portfolio",
    component: "portfolio",
  },
  { text: "Contact Me", url: "#contact", component: "contact" },
];

const scrollToComponent = (componentId) => {
  const componentElement = document.getElementById(componentId);
  if (componentElement) {
    scrollIntoView(componentElement, {
      behavior: "smooth",
      block: "start",
      inline: "start",
      scrollMode: "if-needed",
    });
  }
};
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
