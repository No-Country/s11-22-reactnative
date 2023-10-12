import { View, Text, TouchableOpacity, Dimensions } from 'react-native'

const SignInOptions = () => {
  const height = Dimensions.get('window').height

  return (
    <>
      <Text
        className={`font-light text-center w-full ${
          height <= 690 ? 'mb-2' : 'mb-6'
        } mt-10`}
      >
        Or continue with
      </Text>
      <View className="flex-row gap-5 items-center justify-center">
        <TouchableOpacity className="w-11 h-11 rounded-lg bg-gray-200"></TouchableOpacity>
        <TouchableOpacity className="w-11 h-11 rounded-lg bg-gray-200"></TouchableOpacity>
        <TouchableOpacity className="w-11 h-11 rounded-lg bg-gray-200"></TouchableOpacity>
      </View>
    </>
  )
}

export default SignInOptions
