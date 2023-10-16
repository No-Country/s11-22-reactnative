import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
// import { useAuth } from '../hooks'

const SignInOptions = () => {
  const height = Dimensions.get('window').height
  // const { loginOAuth } = useAuth()

  return (
    <>
      <Text
        className={`font-light text-center w-full ${
          height <= 690 ? 'mb-2' : 'mb-6'
        } mt-10`}
        style={{ fontFamily: 'mrt-400' }}
      >
        Or continue with
      </Text>
      <View className="flex-row gap-8 items-center justify-center">
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="google" size={36} color="#809671" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="apple1" size={36} color="#555555" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <FontAwesome5 name="facebook" size={36} color="blue" />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default SignInOptions
