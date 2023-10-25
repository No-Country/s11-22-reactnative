import {
  Text,
  Image,
  KeyboardAvoidingView,
  View,
  Dimensions,
  Platform,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Link } from '@react-navigation/native'
import { LoginForm, SignInOptions } from './components'
import { userStore } from '../../store'
import { SpinnerScreen } from '../../components'

const LoginScreen = () => {
  const { height } = Dimensions.get('window')
  const isLoading = userStore((state) => state.isLoading)

  if (isLoading) return <SpinnerScreen />

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Image
        source={require('../../../assets/Log_in.png')}
        className={`w-full object-cover`}
        style={{ height: (height / 2.7) * 0.9 }}
      />
      <View
        className="w-full flex-1 bg-primary rounded-t-3xl -mt-6"
        style={{
          paddingHorizontal: normalize(22, 'width'),
        }}
      >
        <Text
          className="font-normal text-center"
          style={{
            fontFamily: 'mrt-400',
            fontSize: normalize(20),
            marginVertical: normalize(22, 'height'),
          }}
        >
          Welcome back
        </Text>

        <LoginForm />

        <SignInOptions />

        <Text
          className="text-center"
          style={{
            fontFamily: 'mrt-400',
            fontSize: normalize(16),
            marginTop: normalize(33, 'height'),
          }}
        >
          Don&#39;t have an account?
          <Link to="/SignUpScreen">
            <Text style={{ fontFamily: 'mrt-600' }}> Sign up</Text>
          </Link>
        </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
