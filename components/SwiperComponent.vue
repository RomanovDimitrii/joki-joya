<template>
  <swiper class="swiper" :slides-per-view="1" pagination navigation>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/swiper-bundle.min.css'; // Импорт основных стилей
// import 'swiper/modules/navigation/navigation.min.css'; // Импорт стилей модуля навигации
// import 'swiper/modules/pagination/pagination.min.css'; // Импорт стилей модуля пагинации
</script>

<style lang="scss" scoped>
.swiper {
  margin-top: 300px;
}
</style>
