import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

import { userStore } from '../../../store'
import { supabase } from '../../../supabase/initSupabase'
import { clientAdapterData, loginAdapter } from '../../../adapters'

const useAuth = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const addUserInfo = userStore((state) => state.addUserInfo)
  const removeUser = userStore((state) => state.removeUserInfo)
  const accessToken = userStore((state) => state.accessToken)
  const setIsLoading = userStore((state) => state.setIsLoading)
  const addUserToken = userStore((state) => state.addUserToken)

  // If the user is logged in, redirect to the HomeScreen.
  useEffect(() => {
    if (accessToken !== '') navigation.navigate('HomeScreen')
  }, [accessToken])

  // Login function that calls the supabase auth signInWithPassword function.
  async function login() {
    setIsLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setIsLoading(false)
      return Alert.alert("Credentials don't match")
    }

    // Adapt data to store it in the store.
    const adaptedUserData = loginAdapter(data)

    const clientData = await getClientById(adaptedUserData?.id)
    addUserInfo(clientData)
    addUserToken(adaptedUserData?.accessToken)
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

  async function getClientById(userId) {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .eq('user_id', userId)

    if (error) return Alert.alert(error.message)

    const client = clientAdapterData(data[0])

    return client
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
