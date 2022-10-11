<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex justify-between p-4">
    <router-link to="/">
      <img alt="Vue logo" class="w-12" src="@/assets/logo.svg" />
    </router-link>
    <button class="inline-flex justify-center items-center w-10 h-10 border rounded" type="button">
      <img alt="Cart icon" class="w-6" src="@/assets/shopping-bag.png" />
    </button>
  </header>
</template>

<style lang="postcss" module></style>