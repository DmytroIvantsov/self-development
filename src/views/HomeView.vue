<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";

const store = useProductsStore()

const products = computed(() => store.list.products)
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 pb-8">
    <h1 class="mb-4 text-4xl font-bold">Products</h1>
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
      <product-card
        v-for="product in products"
        :product="product"
        @addToCart="store.addToCart"
        @onRemove="store.removeFromCart"
      />
    </div>
  </main>
</template>
