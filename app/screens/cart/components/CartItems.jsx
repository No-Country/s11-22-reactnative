import { View, Text, Image, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { cartStore } from '../../../store'

const CartItems = () => {
  const products = cartStore((state) => state.cart.products)
  const addToCart = cartStore((state) => state.addToCart)
  const removeProduct = cartStore((state) => state.removeProductFromCart)

  return (
    <View className="w-full" style={{ marginTop: normalize(29, 'height') }}>
      {products?.map((item) => (
        <View
          className="flex-row w-full items-start justify-start border border-primary rounded-lg bg-tertiary"
          style={{
            marginBottom: normalize(32, 'height'),
            height: normalize(121),
            padding: normalize(11),
          }}
          key={item?.id}
        >
          <TouchableOpacity className="absolute top-3 right-3">
            <Ionicons name="trash-outline" size={24} color="#114949" />
          </TouchableOpacity>
          <Image
            source={{ uri: item?.images[0] }}
            className="rounded-lg object-cover h-full mr-3"
            style={{ width: normalize(101) }}
          />
          <View
            className="flex flex-col justify-between h-full"
            style={{ width: normalize(185) }}
          >
            <View>
              <Text
                className="text-black leading-[1.31vh] tracking-tight font-normal"
                style={{ fontFamily: 'mrt-400', fontSize: normalize(14) }}
              >
                {item?.name}
              </Text>
              <Text
                className="text-black leading-[1.31vh] tracking-tight font-extralight my-1"
                style={{ fontFamily: 'mrt-200', fontSize: normalize(10) }}
              >
                Color: white {/*ToDo*/}
              </Text>
              <Text
                className="text-black leading-[1.31vh] tracking-tight font-extralight"
                style={{ fontFamily: 'mrt-200', fontSize: normalize(10) }}
              >
                Size: 78.7 x 29.5 inches {/*ToDo*/}
              </Text>
            </View>
            <View className="flex-row w-full items-center justify-between">
              <Text
                className="text-black font-medium leading-[1.31vh] tracking-tight"
                style={{ fontFamily: 'mrt-500', fontSize: normalize(14) }}
              >
                ${item?.price}
              </Text>
              <View className="flex-row items-center justify-center gap-3">
                <TouchableOpacity onPress={() => removeProduct(item?.id)}>
                  <Ionicons name="remove-outline" size={24} color="#114949" />
                </TouchableOpacity>
                <Text
                  style={{ fontSize: normalize(16), fontFamily: 'mrt-400' }}
                  className="text-black font-normal leading-[1.31vh] tracking-tight"
                >
                  {item?.productQuantity}
                </Text>
                <TouchableOpacity onPress={() => addToCart(item)}>
                  <Ionicons name="md-add-outline" size={24} color="#114949" />
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
