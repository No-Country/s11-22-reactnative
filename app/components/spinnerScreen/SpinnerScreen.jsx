import { View, SafeAreaView, ActivityIndicator } from 'react-native'

const SpinnerScreen = () => {
  return (
    <SafeAreaView className="flex-1 w-full">
      <View className="flex-1 w-full items-center justify-center bg-primary">
        <ActivityIndicator size="large" color="#809671" />
      </View>
    </SafeAreaView>
  )
}

export default SpinnerScreen
