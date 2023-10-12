import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const cartStore = create(
  persist(
    (set, get) => ({
      cart: {
        products: [],
      },
      addToCart: (product) => {
        /* Check if the product already exists in the shopping cart.
        If it exists, increase the quantity of the product by 1.
        If it does not exist, add the product to the cart with a quantity of 1. */
        const prevProducts = get().cart.products
        const findProduct = prevProducts.find((p) => p.id === product.id)

        if (findProduct) {
          findProduct.productQuantity += 1
          set({ cart: { products: [...prevProducts] } })
        } else {
          product.productQuantity = 1
          set({ cart: { products: [...prevProducts, product] } })
        }
      },
      removeProductFromCart: (productId) => {
        /* It decreases the quantity of a product in the cart and, if the quantity reaches 0, 
        completely removes it from the cart. */
        const prevProducts = get().cart.products
        const productExist = prevProducts.find((p) => p.id === productId)
        productExist.productQuantity -= 1
        if (productExist.productQuantity === 0)
          prevProducts.splice(prevProducts.indexOf(productExist), 1)
        set({ cart: { products: [...prevProducts] } })
      },
      emptyCart: () => {
        set({ cart: { products: [] } })
      },
      removeCart: () => {
        cartStore.persist.clearStorage()
      },
    }),
    {
      name: 'cartInfo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default cartStore
