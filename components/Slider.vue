<template>
  <div class="slider-container">
    <div class="slider-label">
      <span class="slider-label__vertical">ИНТЕРЬЕРЫ</span>
      <span class="slider-label__horizontal">ПАРКОВ</span>
    </div>

    <swiper
      :slides-per-view="1"
      :space-between="0"
      :navigation="true"
      :pagination="{ clickable: true }"
      loop
      class="slider"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" class="slider-image" />
      </swiper-slide>
    </swiper>

    <div class="slider-navigation">
      <button class="slider-navigation__prev">←</button>
      <button class="slider-navigation__next">→</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { image: '/images/slider_img1.png', alt: 'Slide 1' },
  { image: '/images/mainpage_photo_1x.png', alt: 'Slide 2' },
  { image: '/images/slider_img1.png', alt: 'Slide 3' }
];
</script>

<style scoped>
.slider-container {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider-label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #000;
  font-weight: bold;
  z-index: 10;
}

.slider-label__vertical {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 24px;
  margin-bottom: 10px;
}

.slider-label__horizontal {
  font-size: 18px;
}

.slider {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  background: transparent;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-navigation {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.slider-navigation__prev,
.slider-navigation__next {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  transition: transform 0.3s;
}

.slider-navigation__prev {
  background-color: #007bff;
  color: #fff;
}

.slider-navigation__prev:hover {
  transform: scale(1.1);
}

.slider-navigation__next {
  background-color: #28a745;
  color: #fff;
}

.slider-navigation__next:hover {
  transform: scale(1.1);
}

.swiper-pagination-bullet {
  background: #28a745;
  opacity: 1;
  transition: background-color 0.3s;
}

.swiper-pagination-bullet-active {
  background: #007bff;
}
</style>
