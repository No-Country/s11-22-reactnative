import {
  Text,
  Image,
  KeyboardAvoidingView,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Link } from '@react-navigation/native'
import { useAuth } from './hooks'

const ForgotPasswordScreen = () => {
  const height = Dimensions.get('window').height

  const { email, setEmail, forgotPassword } = useAuth()

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
        <Text className="text-2xl mb-4">Forgot Password</Text>

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="w-full bg-gray-200 rounded-lg py-4 px-4 mb-6"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          className="w-full rounded-lg bg-gray-400 flex items-center justify-center py-2"
          onPress={forgotPassword}
        >
          <Text className="text-2xl">Send Email</Text>
        </TouchableOpacity>

        <Text className="font-light mt-8">
          Do you want to return to
          <Link to="/LoginScreen">
            <Text className="font-semibold"> Log In </Text>
          </Link>
          screen?
        </Text>
      </KeyboardAvoidingView>
    </View>
  )
}

export default ForgotPasswordScreen
