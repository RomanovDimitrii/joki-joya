<script setup lang="ts">
defineOptions({
  name: 'Header'
});
</script>

<template>
  <header class="header">
    <div class="header__block">
      <div class="header__left-wrapper">
        <img class="header__logo" src="../public/images/logo_header.svg" alt="Логотип" />
        <button class="header__btn">
          <img
            class="header__btn-icon"
            src="../public/images/navigaion_point.png"
            alt="icon"
          />Москва
        </button>
        <button class="header__btn header__btn_call">
          <img
            class="header__btn-icon header__btn-icon--small"
            src="../public/images/phone_icon.png"
            alt="icon"
          />+7 (812) 635 22 77
        </button>
      </div>
      <div class="header__right-wrapper">
        <button class="header__btn header__btn_pink">Купить билеты</button>
        <button class="header__btn header__btn_green">Заказать праздник</button>

        <div class="header__burger-wrapper">
          <img class="header__burger" src="../public/images/burger.svg" alt="menu" />
          <span class="header__burger-text">Меню</span>
        </div>
      </div>
    </div>
    <div class="header__underline"></div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  z-index: 5;

  &__block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    padding: 0.1rem 2vw 0.1rem 16px;
    box-sizing: border-box;
    height: 4rem;
  }

  &__underline {
    width: 100%;
    height: 3px;
    background: linear-gradient(
      227.56deg,
      #fdf398 -0.59%,
      #f7be87 22.84%,
      #e5637d 45.63%,
      #e84bba 65.89%,
      #9310d8 99.13%
    );
  }

  &__left-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 1.25rem;
    align-items: center;
  }

  &__logo {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
    margin: 12px 56px 12px 16px;
  }

  &__btn {
    border: 2px #5834a4 solid;
    border-radius: 1.875rem;
    padding: 0 1rem;
    height: 2.5rem;
    color: #5834a4;
    font-family: DrukCyr;
    font-size: 1.375rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    align-items: center;
    justify-content: center;
    display: flex;
    letter-spacing: 3%;

    &_call {
      font-size: 0.8125rem;

      font-family: Drukwidecyr;
    }

    &:hover {
      transform: scale(1.1);
    }

    &_pink {
      background-color: #f269af;
      font-size: 1.375rem;
      color: #ffffff;
      border: none;
    }

    &_green {
      background-color: #abec20;
      font-size: 1.375rem;
      color: #262626;
      border: none;
    }
  }

  &__btn-icon {
    width: 1.0625rem;
    object-fit: contain;
    margin-right: 10px;
    padding: 4px 0;

    &--small {
      padding: 8.5px 0;
    }
  }

  &__right-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    align-items: center;
  }

  &__burger-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__burger {
    width: 1.8rem;
    object-fit: contain;
  }

  &__burger-text {
    font-family: Montserrat;
    line-height: 1;
    font-size: 0.75rem;
    letter-spacing: 1%;
    text-transform: uppercase;
    text-align: right;
    color: #0267ff;
  }
}

@media (max-width: 640px) {
  .header {
    &__block {
      height: 4rem;
    }

    &__underline {
      height: 3px;
    }

    &__left-wrapper {
      column-gap: 1.25rem;
    }

    &__logo {
      width: 2.5rem;
      height: 2.5rem;

      margin: 12px 56px 12px 16px;
    }

    &__btn {
      display: none;

      &:hover {
        transform: scale(1.1);
      }

      &_pink {
        display: flex;
        font-size: 1.375rem;
      }
    }

    &__btn-icon {
      width: 1.0625rem;
      object-fit: contain;
      margin-right: 10px;
      padding: 4px 0;
    }

    &__right-wrapper {
      column-gap: 1rem;
      align-items: center;
    }

    &__burger-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    &__burger {
      width: 1.8rem;
      object-fit: contain;
    }

    &__burger-text {
      line-height: 1;
      font-size: 0.75rem;
    }
  }
}
</style>
