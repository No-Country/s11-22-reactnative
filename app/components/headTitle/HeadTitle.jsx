import { View, Text, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const HeadTitle = ({ title }) => {
  const navigation = useNavigation()

  return (
    <View
      className="flex flex-row items-center justify-center w-full relative"
      style={{
        marginTop: normalize(44, 'height'),
        marginBottom: normalize(21, 'height'),
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute left-0"
      >
        <Ionicons name="chevron-back" size={30} color="#114949" />
      </TouchableOpacity>
      <Text
        className="font-medium text-black leading-[1.31vh] tracking-tight"
        style={{
          fontSize: normalize(20),
          fontFamily: 'mrt-500',
        }}
      >
        {title}
      </Text>
    </View>
  )
}

export default HeadTitle
