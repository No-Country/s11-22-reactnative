import { useState } from 'react'
import { Link } from '@react-navigation/native'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import normalize from 'react-native-normalize'
import { useAuth } from '../hooks'

const LoginForm = () => {
  const { email, setEmail, password, setPassword, login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Text
        className="text-left ml-2 font-normal"
        style={{ fontFamily: 'mrt-400', fontSize: normalize(16) }}
      >
        Email
      </Text>
      <TextInput
        placeholder="loomis.b@gmail.com"
        keyboardType="email-address"
        className="w-full bg-secondary rounded-lg px-2"
        style={{
          fontFamily: 'mrt-400',
          fontSize: normalize(16),
          height: normalize(44),
        }}
        value={email}
        onChangeText={setEmail}
      />
      <Text
        className="text-left ml-2 font-normal"
        style={{
          fontFamily: 'mrt-400',
          fontSize: normalize(16),
          marginTop: normalize(11, 'height'),
        }}
      >
        Password
      </Text>
      <View className="flex-row items-center justify-center">
        <TextInput
          placeholder="Minimum 8 characters"
          secureTextEntry={!showPassword}
          className="bg-[#CFD1C0] w-full rounded-lg px-2"
          style={{
            fontFamily: 'mrt-400',
            fontSize: normalize(16),
            height: normalize(44),
          }}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={handleShowPassword}
          className="absolute right-5"
        >
          {showPassword ? (
            <Entypo name="eye" size={24} color="#114949" />
          ) : (
            <Entypo name="eye-with-line" size={24} color="#114949" />
          )}
        </TouchableOpacity>
      </View>

      <View className="w-full items-end">
        <Link to="/ForgotPasswordScreen">
          <Text
            className="font-normal"
            style={{ fontFamily: 'mrt-400', fontSize: normalize(14) }}
          >
            Forgot password?
          </Text>
        </Link>
      </View>

      <TouchableOpacity
        className="w-full rounded-xl bg-[#809671] flex items-center justify-center"
        style={{ height: normalize(55), marginTop: normalize(22, 'height') }}
        onPress={login}
      >
        <Text
          className="text-white"
          style={{ fontFamily: 'mrt-400', fontSize: normalize(20) }}
        >
          Log In
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default LoginForm
