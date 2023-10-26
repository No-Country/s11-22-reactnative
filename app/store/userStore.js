import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const userStore = create(
  persist(
    (set, get) => ({
      userInfo: {},
      accessToken: '',
      isLoading: false,
      addUserInfo: (user) => {
        set({ userInfo: user })
      },
      addUserToken: (token) => {
        set({ accessToken: token })
      },
      removeUserInfo: () => {
        set({ userInfo: {} })
      },
      setIsLoading: (isLoading) => {
        set({ isLoading })
      },
    }),
    {
      name: 'userInfo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default userStore
