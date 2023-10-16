import {
  Text,
  Image,
  KeyboardAvoidingView,
  View,
  Dimensions,
} from 'react-native'
import { Link } from '@react-navigation/native'
import { SignInOptions, SignUpForm } from './components'

const SignUpScreen = () => {
  const height = Dimensions.get('window').height

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
          Create account
        </Text>

        <SignUpForm />

        <SignInOptions />

        <Text className="font-light mt-8" style={{ fontFamily: 'mrt-400' }}>
          Already a member?
          <Link to="/LoginScreen">
            <Text style={{ fontFamily: 'mrt-600' }}> Log In</Text>
          </Link>
        </Text>
      </KeyboardAvoidingView>
    </View>
  )
}

export default SignUpScreen
