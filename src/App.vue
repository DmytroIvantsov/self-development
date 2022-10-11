<script setup lang="ts">
import { RouterView } from 'vue-router'

testComposable("test")
const store = useCounterStore()
</script>

<template>
  <header-component />
  <RouterView />
</template>
