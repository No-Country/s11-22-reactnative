import { View, Text } from 'react-native'
import normalize from 'react-native-normalize'
import { cartStore } from '../../../store'
import Cards from '../../../components/cards/Cards'

const OrderItem = () => {
  const products = cartStore((state) => state.cart.products)
  return (
    <>
      <View
        className="w-full"
        style={{ paddingHorizontal: normalize(22, 'width') }}
      >
        <Text
          className="font-medium text-black text-left"
          style={{
            fontFamily: 'mrt-500',
            fontSize: normalize(18),
          }}
        >
          Order item
        </Text>
      </View>
      <Cards products={products} />
    </>
  )
}

export default OrderItem
