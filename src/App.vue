<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LogoImage from "@/components/LogoImage.vue";

testComposable("test")
</script>

<template>
  <header>
    <logo-image />
    <div class="wrapper">
      {{ testComposable("test") }}
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
