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
  const removeUser = userStore((state) => state.removeUserInfo)
  const user = userStore((state) => state.userInfo)
  const setIsLoading = userStore((state) => state.setIsLoading)

  // If the user is logged in, redirect to the HomeScreen.
  useEffect(() => {
    if (user?.accessToken) navigation.navigate('HomeScreen')
  }, [user])

  // Login function that calls the supabase auth signInWithPassword function.
  async function login() {
    setIsLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setIsLoading(false)
      Alert.alert("Credentials don't match")
    }

    // Adapt data to store it in the store.
    const adaptedUserData = loginAdapter(data)
    addUserInfo(adaptedUserData)
    navigation.navigate('HomeScreen')
    setIsLoading(false)

    setEmail('')
    setPassword('')
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

    setName('')
    setEmail('')
    setPassword('')
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()

    if (error) return Alert.alert(error.message)

    removeUser()

    navigation.navigate('LoginScreen')
  }

  async function forgotPassword() {
    const { error } = await supabase.auth.resetPasswordForEmail(email)

    if (error) return Alert.alert(error.message)

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
    signOut,
    forgotPassword,
  }
}

export default useAuth
