import { defineStore } from 'pinia'
import productsMock from '@/mocks/products.json'

export interface Product {
    id: number,
    title: string,
    description: string
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string ,
    thumbnail:  string,
    images: string[],
}

export const useProductsStore = defineStore('products', () => {
    const list = ref(productsMock)
    
    const productsInCart = ref([])
    
    const addToCart = (id: number) => {
        const product = list.value.products.find((item: Product) => item.id === id)

        if (!product) {
            return
        }

        productsInCart.value.push(product)
    }
    
    const removeFromCart = (id: number) => {
        productsInCart.value.filter((item: Product) => item.id !== id)
    }

    return { list, productsInCart, addToCart, removeFromCart }
})