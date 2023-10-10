import { View, Text, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'

const SigInOptions = () => {
  return (
    <>
      <Text
        style={{ marginTop: normalize(44), fontSize: normalize(14) }}
        className="text-black font-light text-center w-full leading-5 tracking-tight"
      >
        Or continue with
      </Text>
      <View
        className="flex-row gap-5 items-center justify-center"
        style={{ marginTop: normalize(22) }}
      >
        <TouchableOpacity className="w-11 h-11 rounded-lg bg-[#eee] flex items-center justify-center"></TouchableOpacity>
        <TouchableOpacity className="w-11 h-11 rounded-lg bg-[#eee] flex items-center justify-center"></TouchableOpacity>
        <TouchableOpacity className="w-11 h-11 rounded-lg bg-[#eee] flex items-center justify-center"></TouchableOpacity>
      </View>
    </>
  )
}

export default SigInOptions
