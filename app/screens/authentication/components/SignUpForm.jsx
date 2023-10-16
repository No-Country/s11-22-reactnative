import { useState } from 'react'
import {
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useAuth } from '../hooks'

const SignUpForm = () => {
  const height = Dimensions.get('window').height

  const { name, setName, email, setEmail, password, setPassword, signup } =
    useAuth()
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <TextInput
        placeholder="Name"
        keyboardType="default"
        className={`w-full bg-[#CFD1C0] rounded-lg py-4 px-4 ${
          height <= 690 ? 'mb-2' : 'my-4'
        }`}
        style={{ fontFamily: 'mrt-400' }}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        className={`w-full bg-[#CFD1C0] rounded-lg py-4 px-4 ${
          height <= 690 ? 'my-2' : 'my-4'
        }`}
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

      <TouchableOpacity
        className="w-full rounded-lg bg-[#809671] flex items-center justify-center py-3"
        onPress={signup}
      >
        <Text className="text-2xl text-white">Sign Up</Text>
      </TouchableOpacity>
    </>
  )
}

export default SignUpForm
