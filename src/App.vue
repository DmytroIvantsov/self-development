<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LogoImage from "@/components/LogoImage.vue";

testComposable("test")
const store = useCounterStore()
</script>

<template>
  <header>
    <logo-image @click="store.increment()" />
    <div class="wrapper">
      {{ testComposable("test") }}
      <br />
      {{ store.count }}
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
