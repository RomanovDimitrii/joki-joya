<script setup lang="ts">
import { defineProps, PropType } from 'vue';

defineProps({
  color: {
    type: String as PropType<string>,
    default: '#000'
  },

  btnText: {
    type: String as PropType<string>,
    default: 'click'
  }
});
</script>

<template>
  <button class="button">
    <slot>{{ btnText }}</slot>
    <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10H32" :stroke="color" stroke-width="2" />
      <path d="M23.322 1.32202L32 9.99999L23.322 18.678" :stroke="color" stroke-width="2" />
    </svg>
  </button>
</template>

<style scoped lang="scss">
.button {
  font-family: DrukCyr;
  font-weight: 400;

  font-size: 22px;
  text-transform: uppercase;
  background-color: transparent;
  display: flex;
  align-items: center;

  column-gap: 10px;
  color: v-bind(color);
  border: v-bind(color) 2px solid;
  border-radius: 48px;
  padding: 11px 17.5px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
