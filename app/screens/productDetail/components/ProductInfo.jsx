import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import normalize from 'react-native-normalize'

const COLORS = [
  {
    id: 1,
    color: '#FFC107',
  },
  {
    id: 2,
    color: '#2196F3',
  },
  {
    id: 3,
    color: '#9C27B0',
  },
  {
    id: 4,
    color: '#009688',
  },
]

const ProductInfo = ({ itemId }) => {
  return (
    <>
      <View className="flex flex-row w-full items-center justify-between">
        <Text
          style={{ fontSize: normalize(20) }}
          className="text-black font-medium leading-[1.31vh] tracking-tight"
        >
          Product name {itemId}
        </Text>
        <View className="flex flex-row items-center justify-center gap-2">
          <TouchableOpacity>
            <Ionicons name="md-heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="md-share-social-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        className="text-black font-light leading-[1.31vh] tracking-tight"
        style={{ fontSize: normalize(16) }}
      >
        Size
      </Text>
      <Text
        className="text-black font-medium leading-[1.31vh] tracking-tight"
        style={{
          fontSize: normalize(20),
          marginTop: normalize(11, 'height'),
        }}
      >
        Price
      </Text>
      <View
        className="flex flex-row w-full items-center justify-start gap-6"
        style={{ marginTop: normalize(22, 'height') }}
      >
        <Text
          className="text-black font-light leading-[1.31vh] tracking-tight"
          style={{ fontSize: normalize(16) }}
        >
          Colors
        </Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={COLORS}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="rounded-lg  mr-3"
              style={{
                width: normalize(44),
                height: normalize(44),
                backgroundColor: item.color,
              }}
            ></TouchableOpacity>
          )}
        />
      </View>
    </>
  )
}

export default ProductInfo
