import { Text, Image, KeyboardAvoidingView, View } from 'react-native'
import { Link } from '@react-navigation/native'
import { SignInOptions, SignUpForm } from './components'

const SignUpScreen = () => {
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
        <Text className="text-2xl mb-4">Sign Up</Text>

        <SignUpForm />

        <SignInOptions />

        <Text className="font-light mt-8">
          Are you have an account?
          <Link to="/LoginScreen">
            <Text className="font-semibold"> Log In</Text>
          </Link>
        </Text>
      </KeyboardAvoidingView>
    </View>
  )
}

export default SignUpScreen
