import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import normalize from 'react-native-normalize'

const StylesListScreen = ({ items, spacing }) => {
  return (
    <View className="w-full">
      <FlatList
        data={items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ index }) => (
          <TouchableOpacity
            className="bg-[#D9D9D9] rounded-full"
            style={{
              marginRight: normalize(27, 'width'),
              marginLeft: index === 0 ? spacing : 0,
              width: normalize(55),
              height: normalize(55),
            }}
          ></TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text
        className="text-black font-light leading-[1.31vh] tracking-tight text-center"
        style={{
          marginTop: normalize(22, 'height'),
          fontSize: normalize(16),
        }}
      >
        Styles names
      </Text>
    </View>
  )
}

export default StylesListScreen
