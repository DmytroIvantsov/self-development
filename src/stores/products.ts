import { defineStore } from "pinia";
import productsMock from "@/mocks/products.json"

export const useProductsStore = defineStore('products', () => {
    const list = ref(productsMock)

    return { list }
})