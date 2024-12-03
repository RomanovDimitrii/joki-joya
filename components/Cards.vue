<script setup lang="ts">
import Button from './Button';
import { cardsData } from '@/data/content';

defineOptions({
  name: 'Cards'
});
</script>

<template>
  <section class="cards">
    <div
      v-for="cardData in cardsData"
      :key="cardData.index"
      class="card"
      :style="{ color: cardData.btnColor }"
      :class="`card-img-${cardData.index}`"
    >
      <div class="card__content">
        <span class="card__subtitle">{{ cardData.upperTitle }}</span>
        <h2 class="card__title">{{ cardData.title }}</h2>

        <h3 v-if="cardData.subTitle" class="card__subtitle">{{ cardData.subTitle }}</h3>
        <h3 v-if="cardData.subTitle1" class="card__subtitle">{{ cardData.subTitle1 }}</h3>
        <h3 v-if="cardData.subTitle2" class="card__subtitle">{{ cardData.subTitle2 }}</h3>
        <h3 v-if="cardData.subTitle3" class="card__subtitle">{{ cardData.subTitle3 }}</h3>
      </div>
      <Button :color="cardData.btnColor" :btnText="cardData.btnText" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  gap: 0;
  padding: 50px 0 0 6.875rem;
  /* margin-bottom: 50px; */
  box-sizing: border-box;

  .card {
    width: 100%;
    aspect-ratio: calc(340 / 240);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    padding: 9.5% 16.6%;
    box-sizing: border-box;

    &__content {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      row-gap: 3px;
    }

    &__subtitle {
      font-family: Drukwidecyr;
      font-size: 0.8125rem;
      font-weight: 400;
      line-height: 1;
      margin: 0;
    }

    &__title {
      font-family: DrukCyr;
      font-size: 3.375rem;
      font-weight: 400;
      line-height: 1;
      margin: 0;
    }

    &.card-img-1 {
      background-image: url('/images/Card1.png');
    }
    &.card-img-2 {
      background-image: url('/images/Card2.png');
    }
    &.card-img-3 {
      background-image: url('/images/Card3.png');
    }
    &.card-img-4 {
      background-image: url('/images/Card4.png');
    }
    &.card-img-5 {
      background-image: url('/images/Card5.png');
    }
    &.card-img-6 {
      background-image: url('/images/Card6.png');
    }
    &.card-img-7 {
      background-image: url('/images/Card7.png');
    }
  }
}
</style>
