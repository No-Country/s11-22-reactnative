import { useState } from 'react'
import { Link } from '@react-navigation/native'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useAuth } from '../hooks'

const LoginForm = () => {
  const { email, setEmail, password, setPassword, login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        className="w-full bg-[#CFD1C0] rounded-lg py-4 px-4 my-4"
        style={{ fontFamily: 'mrt-400' }}
        value={email}
        onChangeText={setEmail}
      />

      <View className="flex-row items-center justify-center my-6">
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          className="bg-[#CFD1C0] w-full rounded-lg py-4 pl-4 pr-16"
          style={{ fontFamily: 'mrt-400' }}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={handleShowPassword}
          className="absolute right-5"
        >
          {showPassword ? (
            <Entypo name="eye" size={24} color="black" />
          ) : (
            <Entypo name="eye-with-line" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>

      <View className="w-full mb-8 items-end">
        <Link to="/ForgotPasswordScreen">
          <Text className="text-lg" style={{ fontFamily: 'mrt-400' }}>
            Forgot password?
          </Text>
        </Link>
      </View>

      <TouchableOpacity
        className="w-full rounded-lg bg-[#809671] flex items-center justify-center py-3"
        onPress={login}
      >
        <Text className="text-2xl text-white" style={{ fontFamily: 'mrt-400' }}>
          Log In
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default LoginForm
