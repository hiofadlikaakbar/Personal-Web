<template>
  <footer class="bg-secondary">
    <div class="container mx-auto -mt-14 pt-10 pb-10">
      <div class="px-5">
        <img
          :src="polygon"
          alt="polygon"
          loading="lazy"
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-offset="960"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          class="relative ml-auto rotate-45 xl:right-20"
        />
        <img
          :src="polygon"
          loading="lazy"
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-offset="960"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          alt="polygon"
          class="relative hidden md:block top-32 left-16 lg:left-24 xl:left-44 rotate-12"
        />
        <img
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-offset="960"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          :src="whitepolygon"
          alt="white polygon"
          loading="lazy"
          class="relative hidden md:block ml-auto right-32 top-16 xl:right-52"
        />
        <img
          :src="circle"
          loading="lazy"
          alt="circle"
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-offset="960"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          class="relative left-4"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-offset="960"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          class="rounded-full max-w-xs mx-auto md:max-w-sm xl:max-w-[26rem] outline-gray-500 outline-dashed outline-2"
        >
          <div class="py-10 xs:py-14 md:py-24 text-center">
            <div class="pt-7">
              <h1
                class="text-3xl xs:text-4xl xl:text-5xl text-ghost mb-4 tracking-wider font-nunitosans font-bold"
              >
                Lets Say Hi
              </h1>
              <p
                class="text-ghost text-base tracking-wider xl:text-lg mb-16 font-pops"
              >
                hioakbar1@gmail.com
              </p>
            </div>
            <ul>
              <li class="flex gap-7 justify-center items-center">
                <a
                  v-for="(platform, index) in socialMedia"
                  :key="index"
                  target="_blank"
                  :href="platform.link"
                  class="active:scale-[.90]"
                >
                  <i
                    :class="platformIcons[platform.name]"
                    class="hover:text-redcake/50 duration-200 ease-in-out"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <img
          :src="whitepolygon"
          loading="lazy"
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-offset="960"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          alt="white polygon"
          class="relative lg:bottom-5 rotate-45 xl:left-12"
        />
        <img
          :src="circle"
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-offset="960"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          loading="lazy"
          alt="circle"
          class="relative ml-auto xl:right-32 rotate-90"
        />
      </div>
    </div>
    <div class="border-t border-gray-600 py-8">
      <p
        class="text-sm xs:text-base lg:text-lg text-center text-ghost font-nunitosans tracking-wide font-semibold"
      >
        <i class="fa-regular fa-copyright text-ghost mr-1"></i>2023 Copyright -
        <span class="font-bold">Hio Fadlika Akbar</span>
      </p>
    </div>
  </footer>
</template>

<script setup>
import circle from "../assets/circle.svg";
import whitepolygon from "../assets/whitepolygon.svg";
import polygon from "../assets/polygon.svg";
const socialMedia = [
  { name: "linkedin", link: "#" },
  { name: "instagram", link: "https://www.instagram.com/hio._akbarzz/" },
  { name: "whatsapp", link: "https://wa.link/8uqd7z" },
];

const platformIcons = {
  linkedin: "fa-brands fa-linkedin text-redcake text-2xl xl:text-3xl",
  instagram: "fa-brands fa-instagram text-2xl text-redcake xl:text-3xl",
  whatsapp: "fa-brands fa-whatsapp text-2xl text-redcake xl:text-3xl",
};
</script>
