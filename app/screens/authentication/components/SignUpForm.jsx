import { TextInput, Text, TouchableOpacity, Dimensions } from 'react-native'
import { useAuth } from '../hooks'

const SignUpForm = () => {
  const height = Dimensions.get('window').height

  const { name, setName, email, setEmail, password, setPassword, signup } =
    useAuth()

  return (
    <>
      <TextInput
        placeholder="Name"
        keyboardType="default"
        className={`w-full bg-gray-200 rounded-lg py-4 px-4 ${
          height <= 690 ? 'mb-2' : 'my-4'
        }`}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        className={`w-full bg-gray-200 rounded-lg py-4 px-4 ${
          height <= 690 ? 'my-2' : 'my-4'
        }`}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        className={`w-full bg-gray-200 rounded-lg py-4 px-4 ${
          height <= 690 ? 'mt-2 mb-4' : 'mt-4 mb-6'
        }`}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="w-full rounded-lg bg-gray-400 flex items-center justify-center py-2"
        onPress={signup}
      >
        <Text className="text-2xl">Sign Up</Text>
      </TouchableOpacity>
    </>
  )
}

export default SignUpForm
