<script setup lang="ts">
import Button from './Button';
import { cardsData } from '@/data/content';

defineOptions({
  name: 'Cards'
});
</script>

<template>
  <section class="cards">
    <div v-for="cardData in cardsData" :key="cardData.index" class="card">
      <div
        class="card__block"
        :style="{ color: cardData.btnColor }"
        :class="`card-img-${cardData.index}`"
      >
        <span class="card__subtitle">{{ cardData.upperTitle }}</span>
        <h2 class="card__title">{{ cardData.title }}</h2>

        <h3 v-if="cardData.subTitle" class="card__subtitle">{{ cardData.subTitle }}</h3>
        <h3 v-if="cardData.subTitle1" class="card__subtitle">{{ cardData.subTitle1 }}</h3>
        <h3 v-if="cardData.subTitle2" class="card__subtitle">{{ cardData.subTitle2 }}</h3>
        <h3 v-if="cardData.subTitle3" class="card__subtitle">{{ cardData.subTitle3 }}</h3>

        <Button :color="cardData.btnColor" :btnText="cardData.btnText" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  .card__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    height: 100%;
    background-size: cover;
    background-position: center;

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
