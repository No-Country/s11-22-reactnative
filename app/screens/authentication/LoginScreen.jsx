import {
  Text,
  Image,
  KeyboardAvoidingView,
  View,
  Dimensions,
} from 'react-native'
import { Link } from '@react-navigation/native'
import { LoginForm, SignInOptions } from './components'
import { userStore } from '../../store'
import { SpinnerScreen } from '../../components'

const LoginScreen = () => {
  const { height } = Dimensions.get('window')
  const isLoading = userStore((state) => state.isLoading)

  if (isLoading) return <SpinnerScreen />

  return (
    <View className="flex-1">
      <View className={height <= 812 ? 'h-60' : 'h-80'}>
        <Image
          source={require('../../../assets/Log_in.png')}
          className={`w-full ${height <= 812 ? 'h-70' : 'h-96'} object-cover`}
        />
      </View>

      <KeyboardAvoidingView className="w-full flex-1 bg-[#E5E0D8] rounded-t-3xl items-center px-4 py-6">
        <Text className="text-2xl mb-4" style={{ fontFamily: 'mrt-400' }}>
          Welcome back
        </Text>

        <LoginForm />

        <SignInOptions />

        <Text
          className={`${height <= 812 ? 'mt-4' : 'mt-8'}`}
          style={{ fontFamily: 'mrt-400' }}
        >
          Dont&#39;t have an account?
          <Link to="/SignUpScreen">
            <Text style={{ fontFamily: 'mrt-600' }}> Sign up</Text>
          </Link>
        </Text>
      </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen
