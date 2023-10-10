import { useState } from 'react'
import { Link, useNavigation } from '@react-navigation/native'
import { TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import normalize from 'react-native-normalize'

import { supabase } from '../../../supabase/initSupabase'

const LoginForm = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) return Alert.alert(error.message)
    navigation.navigate('HomeScreen')
  }

  return (
    <>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        className="w-full h-11 rounded-lg bg-[#eee] px-3"
        style={{ marginTop: normalize(22) }}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        className="w-full h-11 rounded-lg bg-[#eee] px-3"
        style={{ marginTop: normalize(22) }}
        value={password}
        onChangeText={setPassword}
      />
      <Link
        to="/LoginScreen"
        className="text-black font-light leading-5 tracking-tight"
        style={{
          marginTop: normalize(11),
          fontSize: normalize(14),
          textAlign: 'right',
        }}
      >
        Forgot password?
      </Link>
      <TouchableOpacity
        style={{ marginTop: normalize(44) }}
        className="w-full h-11 rounded-lg bg-[#B4B4B4] flex items-center justify-center"
        onPress={login}
      >
        <Text
          className="text-black font-normal leading-5 tracking-tight"
          style={{ fontSize: normalize(20) }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default LoginForm
