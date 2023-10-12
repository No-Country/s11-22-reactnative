import { Link } from '@react-navigation/native'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import { useAuth } from '../hooks'

const LoginForm = () => {
  const { email, setEmail, password, setPassword, login } = useAuth()

  return (
    <>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        className="w-full bg-gray-200 rounded-lg py-4 px-4 my-4"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        className="w-full bg-gray-200 rounded-lg py-4 px-4 mt-4 mb-2"
        value={password}
        onChangeText={setPassword}
      />

      <View className="w-full mb-8 items-end">
        <Link to="/ForgotPasswordScreen">
          <Text className="text-lg">Forgot password?</Text>
        </Link>
      </View>

      <TouchableOpacity
        className="w-full rounded-lg bg-gray-400 flex items-center justify-center py-2"
        onPress={login}
      >
        <Text className="text-2xl">Log In</Text>
      </TouchableOpacity>
    </>
  )
}

export default LoginForm
