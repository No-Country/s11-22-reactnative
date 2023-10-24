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

const ProductInfo = ({ product }) => {
  return (
    <>
      <View className="flex flex-row w-full items-center justify-between">
        <Text
          style={{ fontSize: normalize(20) }}
          className="text-black font-medium leading-[1.31vh] tracking-tight"
        >
          {product?.name}
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
        className="text-[#114949] font-medium leading-[1.31vh] tracking-tight"
        style={{
          fontSize: normalize(20),
          marginTop: normalize(11, 'height'),
        }}
      >
        ${product?.price}
      </Text>
      <View
        className="flex flex-row w-full items-center justify-start gap-2"
        style={{ marginTop: normalize(11, 'height') }}
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
          data={product?.color}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="rounded-2xl  mr-3"
              style={{
                width: normalize(44),
                height: normalize(44),
                backgroundColor: item,
              }}
            ></TouchableOpacity>
          )}
        />
      </View>
    </>
  )
}

export default ProductInfo
