<template>
  <div class="bg-secondary mx-auto pt-24 pb-10">
    <div
      class="flex-wrap flex container mx-auto xl:px-2 2xl:px-0 items-center justify-center"
    >
      <div
        v-for="item in items"
        :key="item.title"
        class="px-5 xl:px-9 w-full md:w-1/2 lg:w-1/4 mb-14"
        data-aos="fade-right"
        data-aos-offset="250"
        :data-aos-delay="item.aosDelay"
        :data-aos-duration="item.aosDuration"
        data-aos-easing="ease-in-out"
      >
        <div :class="[item.outlineClass, 'relative rounded-tr-3xl']">
          <span class="bg-redcake -top-6 left-7 absolute rounded-sm px-4 py-2">
            <i :class="[item.iconClass, 'text-ghost', item.iconSize]"></i>
          </span>
          <div
            class="py-20 rounded-tr-xl text-center font-pops"
            :class="{ 'py-[3.9rem]': item.title === 'Years' }"
          >
            <h1 class="text-ghost text-3xl xs:text-4xl xl:text-5xl font-bold">
              {{ item.number }}
            </h1>
            <p class="text-ghost text-xl xs:text-2xl xl:text-3xl">
              {{ item.title }}
            </p>
            <p
              class="text-ghost text-xl xs:text-2xl xl:text-3xl"
              v-if="item.title === 'Years'"
            >
              Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    title: "Projects",
    number: "10+",
    outlineClass: "outline-2 outline-redcake outline-dashed",
    iconClass: "fa-solid text-xl xl:text-3xl text-ghost fa-briefcase",
    iconSize: "xl:text-3xl",
    aosDelay: 400,
    aosDuration: 1000,
  },
  {
    title: "Years",
    number: "01",
    outlineClass: "border-2 border-redcake",
    iconClass: "fa-solid fa-calendar-days text-xl xl:text-3xl text-ghost",
    iconSize: "xl:text-3xl",
    aosDelay: 800,
    aosDuration: 1000,
  },
  {
    title: "Achievements",
    number: "04",
    outlineClass: "outline-2 outline-redcake outline-dashed",
    iconClass: "fa-solid fa-award text-ghost text-xl xl:text-3xl",
    iconSize: "xl:text-3xl",
    aosDelay: 1200,
    aosDuration: 1000,
  },
  {
    title: "Study Case",
    number: "10+",
    outlineClass: "outline-2 outline-redcake outline-dashed",
    iconClass: "fa-solid text-ghost text-lg fa-lightbulb xl:text-3xl",
    iconSize: "xl:text-3xl",
    aosDelay: 1600,
    aosDuration: 1000,
  },
];
</script>
