import { View, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import normalize from 'react-native-normalize'
import { cartStore } from '../../store'
import { totalQuantity } from '../../utils'

const CartIcon = ({ size, handlePress, showQuantity }) => {
  const products = cartStore((state) => state.cart.products)

  return (
    <TouchableOpacity className="relative" onPress={handlePress}>
      {products?.length > 0 && showQuantity && (
        <View
          className={
            'absolute -top-4 left-2 bg-[#809671] w-6 h-6 rounded-full flex items-center justify-center z-10'
          }
        >
          <Text
            className="text-white font-semibold leading-[1.31vh] tracking-tight"
            style={{ fontSize: normalize(16, 'height') }}
          >
            {totalQuantity(products)}
          </Text>
        </View>
      )}
      <Ionicons name="ios-cart-outline" size={size} color="#114949" />
    </TouchableOpacity>
  )
}

export default CartIcon
