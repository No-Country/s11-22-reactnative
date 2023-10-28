import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import normalize from 'react-native-normalize'

const ProductInfo = ({ product }) => {
  return (
    <>
      <View className="flex-row w-full items-center justify-between">
        <Text
          style={{ fontSize: normalize(20), fontFamily: 'mrt-500' }}
          className="text-black font-medium leading-[1.31vh] tracking-tight"
        >
          {product?.name}
        </Text>
        <Text
          className="text-primary font-normal leading-[1.31vh] tracking-tight"
          style={{
            fontSize: normalize(20),
            fontFamily: 'mrt-400',
          }}
        >
          ${product?.price}
        </Text>
      </View>
      <Text
        className="text-black font-light leading-[1.31vh] tracking-tight text-left"
        style={{
          fontFamily: 'mrt-300',
          fontSize: normalize(12),
          marginTop: normalize(10, 'height'),
        }}
      >
        {product?.description}
      </Text>
      <View
        className="flex-row w-full items-center justify-start gap-2"
        style={{ marginTop: normalize(16, 'height') }}
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
              className="rounded-full  mr-3"
              style={{
                width: normalize(22),
                height: normalize(22),
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
