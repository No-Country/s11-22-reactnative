import { View, Text, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'

const TitleContent = ({ title }) => {
  return (
    <View className="flex flex-row items-center justify-between w-full">
      <Text
        style={{ fontSize: normalize(18), fontFamily: 'mrt-500' }}
        className="font-medium leading-[1.31vh] tracking-tight"
      >
        {title}
      </Text>
      <TouchableOpacity>
        <Text
          className="text-primary leading-[1.31vh] tracking-tight"
          style={{ fontSize: normalize(12), fontFamily: 'mrt-400' }}
        >
          See all
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TitleContent
