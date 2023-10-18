import { TextInput, View } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'

const SearchBox = () => {
  return (
    <View
      className="flex relative h-11 items-center"
      style={{ width: normalize(308) }}
    >
      <View className="absolute h-full left-1 z-10 flex items-center justify-center">
        <Ionicons name="search" size={21} color="#114949" />
      </View>
      <TextInput
        className="w-full px-8 h-full bg-secondary text-black font-light leading-5 tracking-tight"
        placeholder="Search"
        placeholderTextColor="#000"
        keyboardType="web-search"
        style={{
          fontSize: normalize(17),
          fontFamily: 'mrt-400',
          borderRadius: normalize(10),
        }}
      />
    </View>
  )
}

export default SearchBox
