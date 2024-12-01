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
</template>

<style scoped lang="scss">
.slider {
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
  margin: 50px 0 0;
  padding-left: 00px;
  justify-content: flex-end;
  align-items: flex-end;

  &__title-block {
    /* position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%); */
    width: 20vw;
    display: flex;
    flex-direction: row;
    text-align: start;
    color: #000;
    font-weight: bold;
    z-index: 10;
    margin: 0 0 40px 0;
  }

  &__title-wrapper {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    row-gap: 10px;
  }

  &__title {
    font-family: DrukCyr;
    text-transform: uppercase;
    transform: rotate(-180deg);
    white-space: nowrap;
    font-size: 75px;
    font-weight: 400;
    line-height: 72px;
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
    width: 54px;
    height: 116px;
    background-image: url('../public/images/star_20px_left.svg');

    display: inline-block;
    background-position: start;
    position: relative;
  }

  &__img-block {
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 404px;
    width: 32px;
    left: 57px;
  }

  &__img-fragment {
    width: 32px;
    height: 32px;
    background-image: url('../public/images/cross.svg');

    &--second {
      background-image: url('../public/images/snow.svg');
    }

    &--third {
      background-image: url('../public/images/flower_icon.svg');
    }
  }
}

/* .swiper-wrapper {
  position: relative;
  display: flex;
  width: 100%;
} */

.swiper {
  width: 100%;
  height: auto;
  max-width: 80vw;
  margin: 0 0 0 150px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
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
  bottom: 48px;
  left: calc(20vw - 28px);
  /* transform: translateX(0%); */
  display: flex;
  z-index: 3;
}

.custom-next {
  background-color: rgba(2, 103, 255, 1);
  width: 88px;
  height: 80px;
  border: none;
}

.custom-prev {
  background-color: rgba(171, 236, 32, 1);
  width: 88px;
  height: 80px;
  border: none;
}

::v-deep(.swiper-pagination) {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 48px;
  left: 20%;
  transform: translateX(-40%);
  z-index: 2;
  gap: 32px;
}

::v-deep(.swiper-pagination-bullet) {
  width: 16px;
  height: 16px;
  background: rgba(171, 236, 32, 1);
  border-radius: 16px;
  opacity: 100;
}

::v-deep(.swiper-pagination-bullet-active) {
  width: 64px;
  height: 16px;
  background: rgba(171, 236, 32, 1);
  border-radius: 16px;
  opacity: 100;
}
</style>
