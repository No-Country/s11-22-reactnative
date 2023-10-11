import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

import { userStore } from '../../../store'
import { supabase } from '../../../supabase/initSupabase'
import { loginAdapter } from '../adapters'

const useAuth = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const addUserInfo = userStore((state) => state.addUserInfo)
  const user = userStore((state) => state.userInfo)

  // If the user is logged in, redirect to the HomeScreen.
  useEffect(() => {
    if (user.token !== '') navigation.navigate('HomeScreen')
  }, [user])

  // Login function that calls the supabase auth signInWithPassword function.
  async function login() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) return Alert.alert(error.message)

    // Adapt data to store it in the store.
    const adaptedUserData = loginAdapter(data)
    addUserInfo(adaptedUserData)
    navigation.navigate('HomeScreen')
  }

  async function signup() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) return Alert.alert(error.message)

    const { error: saveError } = await supabase
      .from('clients')
      .insert([
        { name: name, email: email.toLowerCase(), user_id: data.user.id },
      ])
      .select()

    if (saveError) return Alert.alert(saveError.message)

    navigation.navigate('LoginScreen')
  }

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    login,
    signup,
  }
}

export default useAuth