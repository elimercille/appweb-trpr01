<script setup lang="ts">
import banner from "./../assets/images/banner.png";
</script>

<template>
  <header class="container-fluid py-3">
    <div class="text-center">
      <h1 class="mt-3 fw-bold text-custom">Mes peluches Sanrio</h1>
      <img
        :src="banner"
        alt="Image de mon site"
        class="img-fluid rounded shadow-sm"
        style="max-height: 250px"
      />
    </div>
  </header>
</template>

<style scoped>
.text-custom {
  color: #ffb2bb;
}
</style>
