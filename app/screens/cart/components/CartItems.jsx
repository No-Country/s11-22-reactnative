import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { cartStore } from '../../../store'

const CartItems = () => {
  const products = cartStore((state) => state.cart.products)
  const addToCart = cartStore((state) => state.addToCart)
  const removeProduct = cartStore((state) => state.removeProductFromCart)

  return (
    <View className="w-full" style={{ marginTop: normalize(31, 'height') }}>
      {products?.map((item) => (
        <View
          className="flex flex-row w-full items-start justify-start gap-5"
          style={{
            marginBottom: normalize(32, 'height'),
            height: normalize(121),
          }}
          key={item?.id}
        >
          <Image
            source={{ uri: item?.productImage }}
            className="rounded-lg object-cover h-full"
            style={{ width: normalize(126) }}
          />
          <View
            className="flex flex-col justify-between h-full"
            style={{ width: normalize(195) }}
          >
            <View>
              <Text>{item?.productName}</Text>
              <Text>{item?.productType}</Text>
            </View>
            <View className="flex flex-row w-full items-center justify-between">
              <Text>{item?.productPrice}</Text>
              <View className="flex flex-row items-center justify-center gap-3">
                <TouchableOpacity onPress={() => removeProduct(item?.id)}>
                  <Ionicons name="remove-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text
                  style={{ fontSize: normalize(16) }}
                  className="text-black font-light leading-[1.31vh] tracking-tight"
                >
                  {item?.productQuantity}
                </Text>
                <TouchableOpacity onPress={() => addToCart(item)}>
                  <Ionicons name="md-add-outline" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

export default CartItems
