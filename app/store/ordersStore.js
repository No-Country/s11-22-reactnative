import { create } from 'zustand'

const ordersStore = create((set) => ({
  orders: [],
  successfullyFetchOrder: false,
  setSuccessfullyFetchOrder: (successfullyFetchOrder) => {
    set({ successfullyFetchOrder })
  },
  addNewOrder: (order) => {
    set((state) => ({ orders: [order, ...state.orders] }))
  },
}))

export default ordersStore
