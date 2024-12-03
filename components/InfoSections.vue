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
          <button color="#000" btnText="посмотреть адреса" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-sections {
  display: flex;
  flex-direction: column;
  row-gap: 120px;
  margin-left: 113px;

  .info-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 113px;
    align-items: start; /* Выравнивание по вертикали */

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
      background-size: contain;

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
      row-gap: 10px;
      justify-content: space-between;
      height: 100%;

      .column-paragraphs {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
      }

      p {
        line-height: 1.5;
        letter-spacing: -1%;
        margin: 0;
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
  }
}
</style>
