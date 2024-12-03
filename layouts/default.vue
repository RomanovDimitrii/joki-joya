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

  margin: 0 auto;
  padding: 0;
  margin: 0;
  font-family: 'NunitoSans', sans-serif;
  color: #000;
  font-weight: 400;
}
</style>
