<script setup lang="ts">
import LEFT_COLUMN_TEXT from '../constants/constants';
import InfoSections from './InfoSections';
import Cards from './Cards';
import Slider from './Slider';
defineOptions({
  name: 'Content'
});
</script>

<template>
  <main class="main">
    <div class="wrapper-padding">
      <picture>
        <source srcset="/images/mainpage_photo_1x.png" media="(max-width: 1200px)" />
        <source srcset="/images/mainpage_photo_2x.png" media="(min-width: 1201px)" />
        <img id="titleImg" src="/images/mainpage_photo_2x.png" class="main__img" alt="Logo" />
      </picture>
      <div class="main__block">
        <div class="main__title-wrapper">
          <h1 class="main__title">О joki joya</h1>
          <span class="main__title-img"></span>
        </div>

        <div class="circle-container">
          <img src="/images/JJ_icon.png" alt="Joki-joya icon" class="center-image" />

          <img
            src="/images/Party_all_the_time.png"
            alt="Party all the time"
            class="rotating-image"
          />
        </div>
      </div>
      <section class="about">
        <div class="vertical-column">
          <div v-for="(item, index) in LEFT_COLUMN_TEXT" :key="index" class="text-with-image">
            <img src="/images/snowflake.svg" alt="icon" class="vertical-column__image" />
            <span class="rotated-text">{{ item }}</span>
            <img
              v-if="index !== 0"
              src="/images/snowflake.svg"
              alt="icon"
              class="vertical-column__second-image"
            />
          </div>
        </div>
        <div>
          <InfoSections />
          <Cards />
        </div>
      </section>
    </div>
    <Slider />
  </main>
</template>

<style lang="scss" scoped>
.main {
  width: 100vw;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &__img {
    width: 100%;
    object-fit: cover;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: flex-start;
    margin-bottom: 72px;
  }

  &__title-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__title {
    font-family: Drukwidecyr;
    font-size: 4.56rem;
    color: #0267ff;
    text-transform: uppercase;
    margin: 0;
    position: relative;
    z-index: 1;
    white-space: nowrap;

    &::first-letter {
      color: black;
    }

    // Дублирование текста
    &::after {
      content: 'joki joya';
      position: absolute;
      top: 0.626rem;
      left: 7.19rem;
      color: transparent;
      -webkit-text-stroke: 1px #abec20;
      z-index: -1;
    }
  }

  &__title-img {
    margin-left: 19px;
    width: 12.69rem;
    height: 3.5rem;
    background-image: url('../public/images/star_20px_left.svg');

    display: inline-block;
    background-position: left;
    position: relative;
    background-size: 4.5rem;
  }
}
.wrapper-padding {
  width: 100%;
  padding: 0 7.77vw 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: rgba(237, 237, 237, 0.5);
}

.circle-container {
  position: relative;
  width: 9rem;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;

  margin: 1.5rem 0 0 0;

  .center-image {
    position: absolute;
    width: 6.56rem;
    height: 6.56rem;
    top: 0.75rem;
    left: 0.94rem;
    z-index: 3;
  }

  .rotating-image {
    position: absolute;
    width: 9rem;
    height: 9rem;
    animation: rotate 10s linear infinite;
  }
}

.about {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
}

.vertical-column {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  &__image {
    width: 4rem;
    height: 4.5rem;
    margin: 0;
  }

  &__second-image {
    display: none;
  }
}

.text-with-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.rotated-text {
  font-family: DrukCyr;
  text-transform: uppercase;
  transform: rotate(-180deg);
  white-space: nowrap;
  font-size: 5.25rem;
  font-weight: 400;
  line-height: 1;
  text-align: end;
  margin: 2.5rem 0 0;
  writing-mode: vertical-rl;
  color: #fff;
  -webkit-text-stroke: 1.27px #000000; /*  для WebKit */
  text-shadow: 1.27px 1.27px 0 #000000, -1.27px 1.27px 0 #000000, 1.27px -1.27px 0 #000000,
    -1.27px -1.27px 0 #000000; /*  other */
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 640px) {
  .main {
    &__img {
      width: 100%;
      object-fit: none;
      min-height: 40rem;
    }

    &__block {
      margin-bottom: 72px;
      flex-direction: row;
    }

    &__title {
      font-size: 4.56rem;
      margin: 0;

      // Дублирование текста
      &::after {
        top: 0.626rem;
        left: 7.19rem;
      }
    }

    &__title-img {
      margin-left: 19px;
      width: 5rem;
      height: 3.5rem;
      background-size: 4.5rem;
    }
  }
  .wrapper-padding {
    padding: 0 7.77vw 0;
  }

  .circle-container {
    width: 9rem;
    height: 9rem;
    margin: 1.5rem 0 0 0;

    .center-image {
      width: 6.56rem;
      height: 6.56rem;
      top: 0.75rem;
      left: 0.94rem;
    }

    .rotating-image {
      width: 9rem;
      height: 9rem;
    }
  }

  .about {
    flex-direction: row;
    justify-content: space-between;
  }

  .vertical-column {
    flex-direction: column-reverse;
    justify-content: space-between;
    padding-top: 6rem;

    &__image {
      width: 4rem;
      height: 4.5rem;
      margin: 0;
    }

    &__second-image {
      width: 4rem;
      height: 4.5rem;
      display: flex;
      margin: 0;
    }
  }

  .rotated-text {
    font-size: 5.25rem;
    line-height: 1;
    text-align: end;
    margin: 0.5rem 0 0.5rem;
    writing-mode: vertical-rl;
  }
}

@media (max-width: 540px) {
  .main {
    &__block {
      margin-bottom: 32px;
      flex-direction: column;
    }
  }
}
</style>
