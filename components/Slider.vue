<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';

import 'swiper/scss/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const slides = [
  { image: '/images/slider_img1.png', alt: 'Slide 1' },
  { image: '/images/mainpage_photo_1x.png', alt: 'Slide 2' },
  { image: '/images/slider_img1.png', alt: 'Slide 3' },
  { image: '/images/slider_img1.png', alt: 'Slide 4' },
  { image: '/images/mainpage_photo_1x.png', alt: 'Slide 5' },
  { image: '/images/slider_img1.png', alt: 'Slide 6' }
];

const swiperInstance = ref(null);

const pagination = {
  clickable: true,
  renderBullet: (_, className) => {
    return `<span class="${className} "></span>`;
  }
};

const modules = [Navigation, Pagination];

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
</script>

<template>
  <div class="slider">
    <div class="slider__title-block">
      <div class="slider__title-wrapper">
        <h3 class="slider__title">ИНТЕРЬЕРЫ</h3>
        <span class="slider__title-img"></span>
      </div>
      <h3 class="slider__title slider__title--wide">ПАРКОВ</h3>
      <div class="slider__img-block">
        <span class="slider__img-fragment"></span>
        <span class="slider__img-fragment slider__img-fragment--second"></span>
        <span class="slider__img-fragment slider__img-fragment--third"></span>
      </div>
    </div>
    <div class="swiper__castom-wrapper">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        loop
        :modules="modules"
        :pagination="pagination"
        :navigation="{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }"
        class="swiper"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" :alt="slide.alt" class="slider-image" />
        </swiper-slide>
      </swiper>
      <div class="slider-navigation">
        <button class="custom-prev" @click="goPrev">
          <img
            class="slider-navigation__img"
            src="/images/nav_arrow_prev.svg"
            alt="предыдущая картинка"
          />
        </button>
        <button class="custom-next" @click="goNext">
          <img
            class="slider-navigation__img"
            src="/images/nav_arrow_next.svg"
            alt="следующая картинка"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  display: flex;

  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0 0 0 7.77vw;

  justify-content: flex-end;
  align-items: flex-end;

  &__title-block {
    width: 100%;
    display: flex;
    flex-direction: row;
    text-align: start;
    color: #000;
    margin: 0 0 2.5rem 0;
    position: relative;
  }

  &__title-wrapper {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    row-gap: 0.625rem;
  }

  &__title {
    font-family: DrukCyr;
    text-transform: uppercase;
    transform: rotate(-180deg);
    white-space: nowrap;
    font-size: 4.6875rem;
    font-weight: 400;
    line-height: 1;
    text-align: start;
    margin: 0;
    writing-mode: vertical-rl;
    color: #000;
  }

  &__title--wide {
    font-family: Drukwidecyr;
  }

  &__title-img {
    margin-left: 0px;
    width: 3.375rem;
    height: 7.25rem;
    background-image: url('../public/images/star_20px_left.svg');
    background-size: 4.375rem;
    display: inline-block;
    background-position: start;
    position: relative;
  }

  &__img-block {
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 25.25rem;
    width: 2rem;
    left: 3.7625rem;
  }

  &__img-fragment {
    width: 2rem;
    height: 2rem;
    background-size: 2rem;
    background-image: url('../public/images/cross.svg');

    &--second {
      background-image: url('../public/images/snow.svg');
    }

    &--third {
      background-image: url('../public/images/flower_icon.svg');
    }
  }
}

.swiper__castom-wrapper {
  position: relative;
}

.swiper {
  width: 100%;
  height: auto;
  max-width: 71vw;
  margin: 0 0 0 9.375rem;
  box-sizing: border-box;
}

.swiper-slide {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  background: transparent;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-navigation {
  position: absolute;
  bottom: 2.5rem;
  left: 0;
  transform: translateX(calc(9.375rem - 50%));
  display: flex;
  z-index: 3;

  &__img {
    width: 3.17rem;
    object-fit: contain;
  }
}

.custom-next {
  background-color: rgba(2, 103, 255, 1);
  width: 5.5rem;
  height: 5rem;
  border: none;
}

.custom-prev {
  background-color: rgba(171, 236, 32, 1);
  width: 5.5rem;
  height: 5rem;
  border: none;
}

::v-deep(.swiper-pagination) {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2.5rem;
  left: 20%;
  transform: translateX(-37%);
  z-index: 2;
  gap: 2rem;
}

::v-deep(.swiper-pagination-bullet) {
  width: 1rem;
  height: 1rem;
  background: rgba(171, 236, 32, 1);
  border-radius: 1rem;
  opacity: 100;
}

::v-deep(.swiper-pagination-bullet-active) {
  width: 4rem;
  height: 1rem;
  background: rgba(171, 236, 32, 1);
  border-radius: 1rem;
  opacity: 100;
}

@media (max-width: 690px) {
  .swiper {
    margin: 0 0 0 7.375rem;
  }

  .slider-navigation {
    transform: translateX(calc(7.375rem - 50%));
  }
}
</style>
