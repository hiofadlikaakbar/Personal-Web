<!-- <template>
  <div id="app">
    <div v-if="isLoad">
      <LoadingPage />
    </div>
    <div v-else>
      <HeaderPage />
      <HeroPage />
      <StatsPage />
      <PortoPage />
      <TimelinePage />
      <FormPage />
      <FooterPage />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeaderPage from "./components/HeaderPage.vue";
import HeroPage from "./components/HeroPage.vue";
import StatsPage from "./components/StatsPage.vue";
import PortoPage from "./components/PortoPage.vue";
import TimelinePage from "./components/TimelinePage.vue";
import FormPage from "./components/FormPage.vue";
import LoadingPage from "./components/LoadingPage.vue";
import FooterPage from "./components/FooterPage.vue";

const isLoad = ref(true);

onMounted(() => {
  window.onload = () => {
    isLoad.value = false;
  };
});
</script> -->
<template>
  <div id="app">
    <div v-if="isLoad">
      <LoadingPage />
    </div>
    <div v-else>
      <HeaderPage />
      <HeroPage />
      <StatsPage />
      <PortoPage />
      <TimelinePage />
      <FormPage />
      <FooterPage />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeaderPage from "./components/HeaderPage.vue";
import HeroPage from "./components/HeroPage.vue";
import StatsPage from "./components/StatsPage.vue";
import PortoPage from "./components/PortoPage.vue";
import TimelinePage from "./components/TimelinePage.vue";
import FormPage from "./components/FormPage.vue";
import LoadingPage from "./components/LoadingPage.vue";
import FooterPage from "./components/FooterPage.vue";
const isLoad = ref(true);
onMounted(async () => {
  // Simulate asynchronous tasks
  await simulateAsyncTask(); // Replace this with your actual asynchronous tasks

  isLoad.value = false; // Set isLoading to false after the tasks are completed
});

async function simulateAsyncTask() {
  // Simulate an asynchronous task
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Replace this with your actual asynchronous task
}
</script>
