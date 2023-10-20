import { create } from 'zustand'

const productStore = create((set) => ({
  products: [],
  isLoading: false,
  searchedProducts: [],
  addProducts: (products) => {
    set({ products })
  },
  emptyProducts: () => {
    set({ products: [] })
  },
  setIsLoading: (isLoading) => {
    set({ isLoading })
  },
  setSearchedProducts: (searchedProducts) => {
    set({ searchedProducts })
  },
}))

export default productStore
