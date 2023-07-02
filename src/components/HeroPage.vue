<template>
  <div class="container px-8 md:px-6 lg:px-9 mx-auto pb-8 md:pb-14 lg:pb-28">
    <div
      class="flex-col md:flex md:flex-row md:gap-14 items-center justify-between"
    >
      <div class="font-nunitosans mb-4 md:mb-0 md:w-1/2">
        <h1
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          class="text-redcake text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2"
        >
          Hi, i'am
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="900"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          class="uppercase text-ghost sm:text-3xl tracking-wide mb-5 xl:text-5xl text-2xl font-bold"
        >
          hio fadlika akbar
        </h1>
        <div
          data-aos="fade-right"
          data-aos-delay="1200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          class="h-[2px] w-[110px] bg-ghost mb-5"
        ></div>

        <p
          data-aos="fade-right"
          data-aos-delay="1800"
          data-aos-duration="1400"
          data-aos-easing="ease-in-out"
          class="text-base font-pops text-ghost lg:text-md xl:text-lg xl:leading-loose leading-8 mb-10 max-w-xl"
        >
          I'm from Indonesia, as a software engineer and frontend developer. I
          specialize in creating user-friendly interfaces that not only look
          fantastic but also provide an exceptional user experience.
        </p>
        <div
          data-aos="fade-right"
          data-aos-delay="2200"
          data-aos-duration="1400"
          data-aos-easing="ease-in-out"
        >
          <a
            class="bg-redcake capitalize hover:bg-secondary duration-300 ease-in-out px-7 py-4 text-ghost rounded-md font-pops"
            :href="'mailto:' + emailAddress"
          >
            <i class="fa-solid fa-envelope mr-1 text-ghost text-lg"></i> email
            me
          </a>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="1000"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="md:w-1/2 xl:w-1/3 relative"
      >
        <img
          :src="hero"
          loading="lazy"
          alt="hero"
          class="scale-90 md:scale-100 xl:scale-[1.35] 2xl:scale-[1.2] mx-auto xl:translate-x-24 2xl:translate-x-16"
        />
      </div>
      <div
        class="hidden xl:block translate-x-20 xl:translate-x-16 2xl:translate-x-28"
      >
        <div
          data-aos="fade-down"
          data-aos-delay="1700"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          class="flex-col flex items-center gap-2"
        >
          <h1
            class="text-2xl font-pops whitespace-nowrap text-redcake uppercase rotate-90"
          >
            follow me on :
          </h1>
          <div
            class="h-px translate-y-32 -translate-x-[0.10rem] bg-redcake rotate-90 w-[70px]"
          ></div>
          <ul class="translate-y-44 flex-col flex gap-4 -translate-x-[0.10rem]">
            <li
              v-for="social in socialMedia"
              :key="social.name"
              class="active:scale-[.90]"
            >
              <a :href="social.link" target="_blank">
                <i
                  :class="[
                    'fa-brands',
                    social.icon,
                    'text-2xl',
                    'hover:text-redcake/50',
                    'duration-200',
                    'ease-in-out',
                    'text-redcake',
                  ]"
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import hero from "../assets/hero.png";
const emailAddress = "hioakbar1@gmail.com";
const socialMedia = [
  {
    name: "whatsapp",
    icon: "fa-whatsapp",
    link: "https://wa.link/8uqd7z",
  },
  {
    name: "instagram",
    icon: "fa-instagram",
    link: "https://www.instagram.com/hio._akbarzz/",
  },
  {
    name: "github",
    icon: "fa-github",
    link: "https://github.com/hiofadlikaakbar",
  },
];
</script>
