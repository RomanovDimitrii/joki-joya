<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>

<template>
  <div class="body">
    <Header />

    <NuxtPage />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
}
</style>
