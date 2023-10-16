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
          source={require('../../../assets/Sign_up.png')}
          className={`w-full ${height <= 690 ? 'h-60' : 'h-96'} object-cover`}
        />
      </View>

      <KeyboardAvoidingView className="w-full flex-1 bg-[#E5E0D8] rounded-t-3xl items-center px-4 py-6">
        <Text className="text-2xl mb-4" style={{ fontFamily: 'mrt-400' }}>
          Forgot Password
        </Text>

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="w-full bg-[#CFD1C0] rounded-lg py-4 px-4 mb-6"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          className="w-full rounded-lg bg-[#809671] flex items-center justify-center py-2"
          onPress={forgotPassword}
        >
          <Text
            className="text-2xl text-white"
            style={{ fontFamily: 'mrt-400' }}
          >
            Send Email
          </Text>
        </TouchableOpacity>

        <Text className="font-light mt-8" style={{ fontFamily: 'mrt-400' }}>
          Do you want to return to
          <Link to="/LoginScreen">
            <Text style={{ fontFamily: 'mrt-600' }}> Log In </Text>
          </Link>
          screen?
        </Text>
      </KeyboardAvoidingView>
    </View>
  )
}

export default ForgotPasswordScreen
