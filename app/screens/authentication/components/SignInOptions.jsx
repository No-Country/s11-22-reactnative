import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useAuth } from '../hooks'

const SignInOptions = () => {
  const height = Dimensions.get('window').height
  const { loginOAuth } = useAuth()

  return (
    <>
      <Text
        className={`font-light text-center w-full ${
          height <= 690 ? 'mb-2' : 'mb-6'
        } mt-10`}
      >
        Or continue with
      </Text>
      <View className="flex-row gap-5 items-center justify-center">
        <TouchableOpacity
          className="w-11 h-11 rounded-lg bg-gray-200 items-center justify-center"
          onPress={() => loginOAuth('google')}
        >
          <AntDesign name="google" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-11 h-11 rounded-lg bg-gray-200 items-center justify-center"
          onPress={() => loginOAuth('facebook')}
        >
          <AntDesign name="facebook-square" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-11 h-11 rounded-lg bg-gray-200 items-center justify-center"
          onPress={() => loginOAuth('apple')}
        >
          <AntDesign name="apple1" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default SignInOptions
