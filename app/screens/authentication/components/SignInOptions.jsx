import { View, Text, TouchableOpacity } from 'react-native'

const SignInOptions = () => {
  return (
    <>
      <Text className="font-light text-center w-full mb-6 mt-10">
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
