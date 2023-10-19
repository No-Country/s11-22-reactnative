import { create } from 'zustand'

const productStore = create((set) => ({
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
}))

export default productStore
