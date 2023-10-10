import { StatusBar } from 'expo-status-bar'
import {
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Link } from '@react-navigation/native'
import { LoginForm, SigInOptions } from './components'

const LoginScreen = () => {
  const SCREEN_HEIGHT = Dimensions.get('window').height

  return (
    <SafeAreaView className="flex-1 bg-white items-start justify-center">
      <Image
        source={{
          uri: 'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
        }}
        className={`w-full object-cover`}
        style={{ height: normalize((SCREEN_HEIGHT / 2) * 0.5) }}
      />
      <KeyboardAvoidingView
        className="w-full flex flex-1 bg-gray-300 rounded-t-3xl items-center justify-start"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          paddingHorizontal: normalize(22),
        }}
      >
        <Text
          className={`font-light text-black leading-5 text-center`}
          style={{ fontSize: normalize(20), marginTop: normalize(19) }}
        >
          Sign In
        </Text>
        <LoginForm />
        <SigInOptions />
        <Text
          className="text-black font-light text-center leading-5 tracking-tight"
          style={{ fontSize: normalize(14), marginTop: normalize(44) }}
        >
          Dont&#39;t have an account?
          <Link to="/LoginScreen" style={{ fontWeight: '600' }}>
            {' '}
            Sign up
          </Link>
        </Text>
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

export default LoginScreen
