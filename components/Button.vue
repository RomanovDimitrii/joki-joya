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
  },

  btnImg: {
    type: String as PropType<string> | null,
    default: null
  }
});
</script>

<template>
  <button class="button">
    <slot>{{ btnText }}</slot>
    <template v-if="btnImg">
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.62427 14.8694L15.3634 1.13037" stroke="white" stroke-width="2" />
        <path d="M2.12817 1.37646H15.3757V14.624" stroke="white" stroke-width="2" />
      </svg>
    </template>
    <template v-else>
      <svg
        width="34"
        height="20"
        viewBox="0 0 34 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 10H32" :stroke="color" stroke-width="2" />
        <path d="M23.322 1.32202L32 9.99999L23.322 18.678" :stroke="color" stroke-width="2" />
      </svg>
    </template>
  </button>
</template>

<style scoped lang="scss">
.button {
  font-family: DrukCyr;
  font-weight: 400;

  font-size: 1.375rem;
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
