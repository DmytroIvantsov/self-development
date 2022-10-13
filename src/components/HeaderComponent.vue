<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const store = useProductsStore()

const productsInCart = computed(() => store.productsInCart.length)
</script>

<template>
  <header class="flex justify-between p-4">
    <router-link to="/">
      <img alt="Vue logo" class="w-12" src="@/assets/logo.svg" />
    </router-link>
    <button class="relative inline-flex justify-center items-center w-10 h-10 border rounded" type="button">
      <img alt="Cart icon" class="w-6" src="@/assets/shopping-bag.png" />
      <span class="absolute top-0 right-0 p-1 bg-blue-400 rounded-full h-5 w-5 inline-flex items-center justify-center text-sm text-white shadow">{{ productsInCart }}</span>
    </button>
  </header>
</template>

<style lang="postcss"></style>