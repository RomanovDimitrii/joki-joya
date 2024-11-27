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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  gap: 0;

  .card {
    width: 100%;
    display: flex;
  }

  .card__block {
    padding: 10px;
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

    .card__content {
      display: flex;
      flex-direction: column; /* Содержимое располагается вертикально */
      justify-content: space-between; /* Равномерное распределение заголовков и кнопки */
      align-items: center; /* Центровка по горизонтали */
      text-align: center; /* Выравнивание текста */
      color: white; /* Цвет текста */
      padding: 10px; /* Отступы внутри карточки */
      height: 100%; /* Растянуть содержимое на всю высоту */
      width: 100%; /* На всю ширину */
      background: rgba(0, 0, 0, 0.4); /* Прозрачный фон для читабельности текста */
    }

    h2,
    h3 {
      margin: 0;
    }

    button {
      margin-top: 10px;
      padding: 10px 15px;
      border: none;
      background-color: white;
      color: black;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.3s;
    }

    button:hover {
      transform: scale(1.1);
    }
  }
}
</style>
