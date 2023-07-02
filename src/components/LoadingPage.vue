<template>
  <div class="bg-primary">
    <div class="flex justify-center items-center h-screen">
      <div>
        <h1
          class="font-nunitosans font-semibold text-center text-lg text-ghost mb-1"
        >
          Please Wait...
        </h1>
        <img :src="gif" alt="load" />
      </div>
    </div>
  </div>
</template>

<script setup>
import gif from "../assets/8bit.gif";
</script>
