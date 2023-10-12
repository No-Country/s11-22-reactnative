import {
  Text,
  Image,
  KeyboardAvoidingView,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useAuth } from './hooks'

const CheckOTPScreen = () => {
  const height = Dimensions.get('window').height

  const {
    one,
    setOne,
    two,
    setTwo,
    three,
    setThree,
    four,
    setFour,
    five,
    setFive,
    six,
    setSix,
    checkOTP,
  } = useAuth()

  return (
    <View className="flex-1">
      <View className={height <= 690 ? 'h-40' : 'h-80'}>
        <Image
          source={require('../../../assets/Sign_up.png')}
          className={`w-full ${height <= 690 ? 'h-60' : 'h-96'} object-cover`}
        />
      </View>

      <KeyboardAvoidingView className="w-full flex-1 bg-gray-300 rounded-t-3xl items-center px-4 py-6">
        <Text className="text-2xl mb-4">OTP</Text>

        <View className="flex-row mb-5">
          <TextInput
            maxLength={1}
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10 items-center justify-center font-semibold"
            value={one}
            onChangeText={setOne}
            autoFocus
          />
          <TextInput
            maxLength={1}
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10 mx-5 items-center justify-center font-semibold"
            value={two}
            onChangeText={setTwo}
            autoFocus
          />
          <TextInput
            maxLength={1}
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10 items-center justify-center font-semibold"
            value={three}
            onChangeText={setThree}
            autoFocus
          />
          <TextInput
            maxLength={1}
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10 mx-5 items-center justify-center font-semibold"
            value={four}
            onChangeText={setFour}
            autoFocus
          />
          <TextInput
            maxLength={1}
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10 items-center justify-center font-semibold"
            value={five}
            onChangeText={setFive}
            autoFocus
          />
          <TextInput
            maxLength={1}
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10 ml-5 items-center justify-center font-semibold"
            value={six}
            onChangeText={setSix}
            autoFocus
          />
        </View>

        <TouchableOpacity
          className="w-full rounded-lg bg-gray-400 flex items-center justify-center py-2"
          onPress={checkOTP}
        >
          <Text className="text-2xl">Check OTP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

export default CheckOTPScreen
