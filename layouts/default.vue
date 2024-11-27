<script setup>
import Header from '~/components/Header.vue';
// import Nav from '~/components/Nav.vue';
</script>

<template>
  <div class="body">
    <Header />

    <NuxtPage />
    <footer>
      <p>© 2024 Joki-Joya</p>
    </footer>
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
