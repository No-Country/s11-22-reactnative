import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

import { userStore } from '../../../store'
import { supabase } from '../../../supabase/initSupabase'
import { loginAdapter } from '../adapters'

const useLogin = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const addUserInfo = userStore((state) => state.addUserInfo)
  const user = userStore((state) => state.userInfo)

  useEffect(() => {
    if (user.token !== '') navigation.navigate('HomeScreen')
  }, [user])

  // Login function that calls the supabase auth signInWithPassword function.
  async function login() {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) return Alert.alert(error.message)

    // Adapt data to store it in the store.
    const adaptedUserData = loginAdapter(data)
    addUserInfo(adaptedUserData)
    navigation.navigate('HomeScreen')
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    login,
  }
}

export default useLogin
