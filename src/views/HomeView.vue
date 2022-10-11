<script setup lang="ts">
const store = useProductsStore()

const products = computed(() => store.list.products)

console.log("products", products.value)
</script>

<template>
  <main class="max-w-7xl mx-auto px-4">
    <h1 class="mb-4 text-4xl font-bold">Products</h1>
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
      <div
          v-for="product in products"
          class="w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="pb-8 rounded-t-lg" :src="product.thumbnail" alt="product image" />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 v-if="product.title" class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
          </a>
          <p v-if="product.category" class="font-bold capitalize">{{ product.category }}</p>
          <div v-if="product.rating" class="flex items-center mt-2.5 mb-5">
            Rating
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{ product.rating }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span v-if="product.price" class="text-3xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
