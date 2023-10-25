import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import normalize from 'react-native-normalize'
import { GOOGLE_ICON } from '../../../utils'
// import { useAuth } from '../hooks'

const SignInOptions = () => {
  // const { loginOAuth } = useAuth()

  return (
    <>
      <Text
        className={`font-normal text-center`}
        style={{
          fontFamily: 'mrt-400',
          fontSize: normalize(14),
          marginTop: normalize(33, 'height'),
          marginBottom: normalize(10, 'height'),
        }}
      >
        Or continue with
      </Text>
      <View className="flex-row gap-8 items-center justify-center">
        <TouchableOpacity onPress={() => {}}>{GOOGLE_ICON}</TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="apple1" size={36} color="#555555" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <FontAwesome5 name="facebook" size={36} color="#1877F2" />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default SignInOptions
