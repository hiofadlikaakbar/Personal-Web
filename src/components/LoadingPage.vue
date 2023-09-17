<template>
  <div class="bg-primary">
    <div class="flex justify-center items-center h-screen">
      <div>
        <h1
          class="font-nunitosans font-semibold text-center text-xl text-ghost mb-2"
        >
          Please Wait...
        </h1>
        <img :src="gif" alt="load" />
      </div>
    </div>
  </div>
</template>

<script setup>
import gif from "../assets/nari rat.gif";
</script>
