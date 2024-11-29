<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Пример данных для слайдов
const slides = [
  { image: '/images/slider_img1.png', alt: 'Slide 1' },
  { image: '/images/mainpage_photo_1x.png', alt: 'Slide 2' },
  { image: '/images/slider_img1.png', alt: 'Slide 3' }
];

// Создаём ссылку для хранения экземпляра Swiper
const swiperInstance = ref(null);

// Методы управления слайдером
const goNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  } else {
    console.error('Swiper instance is not initialized yet.');
  }
};

const goPrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  } else {
    console.error('Swiper instance is not initialized yet.');
  }
};

// Функция для получения экземпляра Swiper через событие
const setSwiperInstance = swiper => {
  if (swiper) {
    swiperInstance.value = swiper;
    console.log('Swiper initialized:', swiper);
  }
};
</script>

<template>
  <div class="slider-container">
    <div class="slider-label">
      <span class="slider-label__vertical">ИНТЕРЬЕРЫ</span>
      <span class="slider-label__horizontal">ПАРКОВ</span>
    </div>

    <!-- Слайдер -->
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :pagination="{ clickable: true }"
      :navigation="true"
      loop
      class="slider"
      @swiper="setSwiperInstance"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" class="slider-image" />
      </swiper-slide>
    </swiper>

    <!-- Кастомные кнопки навигации -->
    <div class="slider-navigation">
      <button class="slider-navigation__prev" @click="goPrev">←</button>
      <button class="slider-navigation__next" @click="goNext">→</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* Контейнер слайдера */
.slider-container {
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
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
  z-index: 20;
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
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  transition: transform 0.3s;
}

.slider-navigation__prev:hover,
.slider-navigation__next:hover {
  transform: scale(1.1);
}

/* Пагинация */
.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
}

.swiper-pagination-bullet {
  background: #fff;
  opacity: 1;
  width: 10px;
  height: 10px;
  transition: background-color 0.3s;
}

.swiper-pagination-bullet-active {
  background: #007bff;
}
</style>
