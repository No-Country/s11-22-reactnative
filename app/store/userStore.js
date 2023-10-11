import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const userStore = create(
  persist(
    (set, get) => ({
      userInfo: {},
      addUserInfo: (user) => {
        set({ userInfo: user })
      },
      getUserInfo: () => {
        return get().userInfo
      },
      removeUserInfo: () => {
        userStore.persist.clearStorage()
      },
    }),
    {
      name: 'userInfo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default userStore
