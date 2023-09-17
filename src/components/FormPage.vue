<template>
  <div id="contact">
    <div
      data-aos="fade-left"
      data-aos-delay="700"
      data-aos-offset="900"
      data-aos-duration="1000"
    >
      <img
        :src="dot2"
        alt="dot2"
        class="scale-50 relative 2xl:-top-24 xl:scale-[.65] ml-auto -top-24 xl:-top-16"
      />
    </div>
  </div>
  <div class="-mt-28 xl:-mt-12 2xl:-mt-28 pb-10">
    <div class="container mx-auto">
      <div class="flex-col xl:flex-row gap-5 xl:flex justify-center">
        <div class="px-7 2xl:w-1/2">
          <h1
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-offset="900"
            class="text-ghost text-3xl mb-7 md:text-4xl 2xl:text-5xl font-bold font-nunitosans"
          >
            Contact me
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-duration="1000"
            data-aos-offset="900"
            class="text-lg 2xl:text-xl md:max-w-lg text-ghost font-pops mb-8"
          >
            Feel free to contact me if you're interested in what I have to
            offer, or if you have any questions.
          </p>
          <div
            v-for="(contact, index) in contacts"
            :key="index"
            class="flex items-center gap-5 mb-10"
          >
            <div
              data-aos="fade-right"
              :data-aos-delay="contact.aosDelay"
              :data-aos-duration="contact.aosDuration"
              :data-aos-offset="contact.aosOffset"
              data-aos-easing="ease-in-out"
              class="px-3 py-2 bg-redcake rounded-full"
            >
              <i :class="contact.iconClasses"></i>
            </div>
            <div
              data-aos="fade-right"
              :data-aos-delay="contact.aosDelay"
              :data-aos-duration="contact.aosDuration"
              :data-aos-offset="contact.aosOffset"
              :data-aos-easing="contact.aosEasing"
            >
              <p
                class="text-sm text-redcake font-pops xl:text-base font-semibold"
              >
                {{ contact.label }}
              </p>
              <p class="text-base text-ghost font-pops xl:text-lg">
                {{ contact.value }}
              </p>
            </div>
          </div>
        </div>
        <div class="px-7 mt-16 xl:-mt-0 xl:w-1/2 2xl:w-[85%]">
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-offset="900"
            data-aos-easing="ease-in-out"
            class="text-ghost text-3xl mb-7 md:text-4xl 2xl:text-5xl font-bold font-nunitosans"
          >
            Drop a line
          </h1>
          <form @submit.prevent="submitForm">
            <div class="grid md:grid-cols-2 gap-8">
              <input
                required
                type="text"
                v-model="formData.name"
                name="name"
                class="p-5 placeholder:text-gray-500 focus:border-ghost border-[1px] w-full rounded-md border-gray-500 bg-transparent outline-none text-ghost"
                placeholder="Name"
                data-aos="fade-right"
                data-aos-delay="700"
                data-aos-duration="1000"
                data-aos-offset="900"
                data-aos-easing="ease-in-out"
              />
              <input
                required
                type="email"
                v-model="formData.email"
                name="email"
                class="p-5 placeholder:text-gray-500 focus:border-ghost border-[1px] w-full rounded-md border-gray-500 bg-transparent outline-none text-ghost"
                placeholder="Email"
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-offset="900"
                data-aos-easing="ease-in-out"
              />
              <input
                required
                type="text"
                v-model="formData.phone"
                name="phone"
                class="p-5 placeholder:text-gray-500 focus:border-ghost border-[1px] w-full rounded-md border-gray-500 bg-transparent outline-none text-ghost"
                placeholder="Phone"
                data-aos="fade-right"
                data-aos-delay="900"
                data-aos-duration="1000"
                data-aos-offset="900"
                data-aos-easing="ease-in-out"
              />
              <input
                required
                type="text"
                v-model="formData.company"
                name="company"
                class="p-5 placeholder:text-gray-500 focus:border-ghost border-[1px] w-full rounded-md border-gray-500 bg-transparent outline-none text-ghost"
                placeholder="Company"
                data-aos="fade-right"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-offset="900"
                data-aos-easing="ease-in-out"
              />
              <textarea
                required
                name="message"
                v-model="formData.message"
                cols="30"
                rows="8"
                placeholder="Message"
                data-aos="fade-right"
                data-aos-delay="1100"
                data-aos-duration="1000"
                data-aos-offset="900"
                data-aos-easing="ease-in-out"
                class="bg-transparent md:col-span-2 mb-8 border-gray-500 border-[1px] p-6 text-ghost placeholder:text-gray-500 rounded-lg"
              ></textarea>
              <div
                data-aos="fade-right"
                data-aos-delay="1200"
                data-aos-duration="1000"
                data-aos-offset="900"
                data-aos-easing="ease-in-out"
              >
                <button
                  type="submit"
                  class="px-10 active:scale-[.90] bg-redcake font-pops rounded mr-auto hover:bg-secondary duration-300 ease-in-out py-4 block text-ghost"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <img
      :src="dot"
      alt="dot"
      class="xl:scale-[.65] relative scale-50 -ml-6 xl:-mt-24 xl:-ml-4"
    />
  </div>
</template>

<script setup>
import dot from "../assets/dot.png";
import dot2 from "../assets/dot2.png";
import axios from "axios";
import { ref } from "vue";
import gif from "../assets/nari rat.gif";
const contacts = [
  {
    iconClasses: "fa-brands fa-whatsapp text-ghost text-xl",
    label: "WhatsApp",
    value: "+62 821-2406-3463",
    aosDelay: 1300,
    aosDuration: 1000,
    aosOffset: 900,
    aosEasing: "ease-in-out",
  },
  {
    iconClasses: "fa-regular fa-envelope text-ghost text-xl",
    label: "Email",
    value: "hioakbar1@gmail.com",
    aosDelay: 1500,
    aosDuration: 1000,
    aosOffset: 900,
    aosEasing: "ease-in-out",
  },
  {
    iconClasses: "fa-solid fa-location-dot px-[2px] text-ghost text-xl",
    label: "Address",
    value: "Tangerang, Jl. Merdeka, Indonesia.",
    aosDelay: 1700,
    aosDuration: 1000,
    aosOffset: 900,
    aosEasing: "ease-in-out",
  },
];

const formData = ref({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
});

const submitForm = () => {
  axios
    .post("https://formspree.io/f/xdovvjoq", formData.value)
    .then(() => {
      Swal.fire({
        title: "So Awesome!",
        text: "Thank you for contacting",
        imageUrl: gif,
        confirmButtonText: "Got it",
        width: 430,
        confirmButtonColor: "#2A2344",
        imageWidth: 230,
        imageHeight: 230,
        imageAlt: "Cool Image",
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
</script>
