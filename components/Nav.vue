<script setup lang="ts">
import { ref } from 'vue';
defineOptions({
  name: 'Nav'
});

// Состояние, которое отслеживает поворот стрелок для каждой кнопки
const arrowRotationState = ref({
  parks: false,
  celebrations: false,
  restaurants: false
});

// Функция для обработки клика по кнопке
const toggleArrowRotation = (key: keyof typeof arrowRotationState.value) => {
  arrowRotationState.value[key] = !arrowRotationState.value[key];
};
</script>

<template>
  <nav class="nav">
    <button class="nav__btn" @click="toggleArrowRotation('parks')">
      <img
        :class="{ nav__arrow_rotated: arrowRotationState.parks }"
        class="nav__arrow"
        src="/images/arrow_right.svg"
        alt="click to open menu"
      />
      <span class="nav__text">Парки</span>
    </button>

    <button class="nav__btn" @click="toggleArrowRotation('celebrations')">
      <img
        :class="{ nav__arrow_rotated: arrowRotationState.celebrations }"
        class="nav__arrow"
        src="/images/arrow_right.svg"
        alt="click to open menu"
      />
      <span class="nav__text">Праздники</span>
    </button>

    <button class="nav__btn" @click="toggleArrowRotation('restaurants')">
      <img
        :class="{ nav__arrow_rotated: arrowRotationState.restaurants }"
        class="nav__arrow"
        src="/images/arrow_right.svg"
        alt="click to open menu"
      />
      <span class="nav__text">Рестораны</span>
    </button>

    <a class="nav__link" href="#">
      <span class="nav__text">Афиша</span>
    </a>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  margin: 0;
  padding: 6.5rem 23px 0;
  height: 100vh;
  width: 4rem;
  background-color: #a66eff;
  display: flex;
  flex-direction: column;
  z-index: 4;
  box-sizing: border-box;
  align-items: center;

  &__btn {
    color: #fff;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 113px;
    cursor: pointer;
  }

  &__link {
    text-decoration: none;
    margin: 0;
    color: #fff;
    text-align: center;
  }

  &__text {
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    text-align: center;
    font-family: DrukCyr;
    letter-spacing: 3%;
    font-size: 1.5rem;
    margin: 0 0 0 0;
    text-transform: uppercase;
  }

  &__arrow {
    width: 1rem;
    transition: transform 0.3s ease-in-out;
    margin-bottom: 0.5rem;

    &_rotated {
      transform: rotate(180deg);
    }
  }
}

@media (max-width: 640px) {
  .nav {
    width: 1rem;
    padding: 104px 2rem 0;
  }
}

@media (max-width: 540px) {
  .nav {
    display: none;
  }
}
</style>
