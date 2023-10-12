import { useEffect, useState } from 'react'
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
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [three, setThree] = useState('')
  const [four, setFour] = useState('')
  const [five, setFive] = useState('')
  const [six, setSix] = useState('')
  const [token, setToken] = useState('')

  const { checkOTP } = useAuth()

  useEffect(() => {
    setToken(one + two + three + four + five + six)
  }, [])

  return (
    <View className="flex-1">
      <View className={height <= 690 ? 'h-40' : 'h-80'}>
        <Image
          source={{
            uri: 'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
          }}
          className={`w-full ${height <= 690 ? 'h-60' : 'h-96'} object-cover`}
        />
      </View>

      <KeyboardAvoidingView className="w-full flex-1 bg-gray-300 rounded-t-3xl items-center px-4 py-6">
        <Text className="text-2xl mb-4">OTP</Text>

        <View className="flex-row mb-5">
          <TextInput
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10"
            value={one}
            onChangeText={setOne}
          />
          <TextInput
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10 mx-5"
            value={two}
            onChangeText={setTwo}
          />
          <TextInput
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10"
            value={three}
            onChangeText={setThree}
          />
          <TextInput
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10 mx-5"
            value={four}
            onChangeText={setFour}
          />
          <TextInput
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10"
            value={five}
            onChangeText={setFive}
          />
          <TextInput
            className="w-12 h-12 bg-gray-200 rounded-lg p-4 my-10 ml-5"
            value={six}
            onChangeText={setSix}
          />
        </View>

        <TouchableOpacity
          className="w-full rounded-lg bg-gray-400 flex items-center justify-center py-2"
          onPress={() => checkOTP(token)}
        >
          <Text className="text-2xl">Check OTP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

export default CheckOTPScreen
