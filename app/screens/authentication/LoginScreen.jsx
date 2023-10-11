import { Text, Image, KeyboardAvoidingView, View } from 'react-native'
import { Link } from '@react-navigation/native'
import { LoginForm, SignInOptions } from './components'

const LoginScreen = () => {
  return (
    <View className="flex-1">
      <View className="h-80">
        <Image
          source={{
            uri: 'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
          }}
          className="w-full h-96 object-cover"
        />
      </View>

      <KeyboardAvoidingView className="w-full flex-1 bg-gray-300 rounded-t-3xl items-center px-4 py-6">
        <Text className="text-2xl mb-4">Log In</Text>

        <LoginForm />

        <SignInOptions />

        <Text className="font-light mt-8">
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
