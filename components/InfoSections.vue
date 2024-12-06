<script setup lang="ts">
import { contentData } from '@/data/content';
import Button from './Button';

const sections = contentData.sections;

defineOptions({
  name: 'InfoSections'
});
</script>

<template>
  <div class="info-sections">
    <div v-for="(section, index) in sections" :key="index" class="info-section">
      <div class="first-section">
        <h2 class="section-title" v-html="section.title"></h2>
        <div class="icon" :class="section.icon"></div>
      </div>

      <div class="section-paragraphs">
        <p v-for="(paragraph, idx) in section.paragraphs1" :key="idx" v-html="paragraph"></p>
      </div>
      <div class="section-paragraphs">
        <div class="column-paragraphs">
          <p v-for="(paragraph, idx) in section.paragraphs2" :key="idx" v-html="paragraph"></p>
        </div>

        <a v-if="section.button" :href="section.button.link">
          <Button color="#000" btnText="посмотреть адреса" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-sections {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 7.5rem;
  padding-left: 7.0625rem;
  box-sizing: border-box;
}

.info-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 7.0625rem;
  align-items: start;
}
.first-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.icon {
  width: 8rem;
  height: 8rem;
  background-repeat: no-repeat;
  background-size: cover;

  &.rhombus {
    background-image: url('/images/rhombus.png');
  }

  &.flower {
    background-image: url('/images/flower.svg');
  }
}
a {
  text-decoration: none;
}

.section-title {
  font-family: Drukwidecyr;
  font-size: 0.8125rem;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 3%;
  margin-top: 22px;
}

.section-paragraphs {
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  justify-content: space-between;
  height: 100%;

  .column-paragraphs {
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
  }

  p {
    line-height: 1.5;
    letter-spacing: -1%;
    margin: 0;
    text-wrap: balance;
  }
}

.section-button {
  align-self: flex-start;
  padding: 10px 11px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
}

@media (max-width: 1000px) {
  .icon {
    width: 14rem;
    height: 14rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1;
  }

  .section-title {
    font-size: 1.2rem;
    line-height: 1;
  }
}

@media (max-width: 920px) {
  .info-section {
    column-gap: 3.0625rem;
  }
}

@media (max-width: 676px) {
  .info-section {
    display: flex;
    flex-direction: column;

    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }

  .first-section {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    grid-template-areas: 'icon title'; /* Сетка для иконки и заголовка */
    column-gap: 0.5rem;

    justify-content: flex-start;
  }

  .icon {
    grid-area: icon;
    width: 5rem;
    height: 5rem;
  }

  .section-title {
    grid-area: title;
    justify-self: center;
    align-self: center;
    margin: 0 0 0 1rem;
  }

  .section-paragraphs:first-of-type {
    grid-area: paragraphs1;
  }

  .section-paragraphs:last-of-type {
    grid-area: paragraphs2;
  }
}

@media (max-width: 390px) {
  .info-section {
  }

  .first-section {
    grid-template-areas: 'icon title'; /* Сетка для иконки и заголовка */
    column-gap: 0.5rem;
    position: relative;
  }

  .icon {
    grid-area: icon;
    width: 5rem;
    height: 5rem;
  }

  .section-title {
    grid-area: title;

    margin: 0 0 0 1rem;
  }
}
</style>
