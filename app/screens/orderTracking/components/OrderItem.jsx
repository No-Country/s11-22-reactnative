import { View, Text } from 'react-native'
import normalize from 'react-native-normalize'
import { ordersStore } from '../../../store'
import Cards from '../../../components/cards/Cards'

const OrderItem = () => {
  const orders = ordersStore((state) => state.orders)

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
      <Cards products={orders[0]?.products} />
    </>
  )
}

export default OrderItem
