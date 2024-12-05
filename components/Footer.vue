<script setup lang="ts">
import Button from './Button';

const handleBtnClick = (): void => {
  const targetElement = document.getElementById('titleImg') as HTMLElement | null;
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.error('Элемент с указанным ID не найден.');
  }
};
</script>

<template>
  <footer class="footer">
    <img class="footer__logo" src="/images/Logo_footer.png" alt="логотип" />
    <ul class="footer__contacts">
      <li class="footer__contacts-text">+7 (495) 181 22 77</li>
      <li class="footer__contacts-text">(МОСКВА, ТВЕРЬ)</li>
      <li class="footer__contacts-text">+7 (812) 635 22 77</li>
      <li class="footer__contacts-text">(САНКТ-ПЕТЕРБУРГ)</li>
    </ul>
    <ul class="footer__links">
      <li>
        <a class="footer__link" href="">
          <img class="footer__link-img" src="/images/vk_logo.svg" alt="vk логотип" />
        </a>
      </li>
      <li>
        <a class="footer__link" href="">
          <img class="footer__link-img" src="/images/telegram_logo.svg" alt="telegram логотип" />
        </a>
      </li>
      <li>
        <a class="footer__link" href="">
          <img class="footer__link-img" src="/images/jj_social_icon_footer.svg" alt="jj логотип" />
        </a>
      </li>
    </ul>
    <ul class="footer__trademark">
      <li class="footer__trademark-text">Joki Joya ©</li>
      <li class="footer__trademark-text">2023</li>
      <li class="footer__trademark-text">joki-joya.ru</li>
    </ul>
    <div>
      <Button color="#fff" btnText="Наверх" btnImg="Наверх" @click="handleBtnClick" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  box-sizing: border-box;
  z-index: 2;
  background-color: rgba(242, 105, 175, 1);
  padding: 48px 7.77vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    width: 6.375rem;
    object-fit: contain;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    row-gap: 0px;
    list-style: none;
  }

  &__contacts-text {
    color: rgba(171, 236, 32, 1);
    font-family: Drukwidecyr;
    font-size: 0.8125rem;
    letter-spacing: 3%;
    line-height: 1;

    &:nth-of-type(even) {
      color: #fff;
    }
  }

  &__links {
    display: flex;

    align-items: center;
    list-style: none;
    gap: 5rem;
  }

  &__link {
    text-decoration: none;
    background-color: #fff;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__link-img {
    width: 1.53rem;
    object-fit: contain;
  }

  &__trademark {
    display: flex;
    flex-direction: column;
    row-gap: 0px;
    list-style: none;
    justify-content: flex-end;
  }

  &__trademark-text {
    color: #fff;
    font-family: Drukwidecyr;
    font-size: 0.8125rem;
    letter-spacing: 3%;
    line-height: 1;
    text-align: end;
  }
}

@media (max-width: 800px) {
}
</style>
