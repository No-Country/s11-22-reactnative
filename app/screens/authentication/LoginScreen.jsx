import {
  Text,
  Image,
  KeyboardAvoidingView,
  View,
  Dimensions,
} from 'react-native'
import { Link } from '@react-navigation/native'
import { LoginForm, SignInOptions } from './components'

const LoginScreen = () => {
  const height = Dimensions.get('window').height

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
        <Text className="text-2xl mb-4">Log In</Text>

        <LoginForm />

        <SignInOptions />

        <Text className={`font-light ${height <= 690 ? 'mt-4' : 'mt-8'}`}>
          Dont&#39;t have an account?
          <Link to="/SignUpScreen">
            <Text className="font-semibold"> Sign up</Text>
          </Link>
        </Text>
      </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen
