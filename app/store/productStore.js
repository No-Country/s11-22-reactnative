import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const productStore = create(
  persist(
    (set, get) => ({
      products: [],
      isLoading: false,
      addProducts: (products) => {
        set({ products })
      },
      emptyProducts: () => {
        set({ products: [] })
      },
      setIsLoading: (isLoading) => {
        set({ isLoading })
      },
    }),
    {
      name: 'products-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default productStore
