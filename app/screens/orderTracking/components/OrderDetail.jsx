import { View, Text } from 'react-native'
import normalize from 'react-native-normalize'
import { ordersStore } from '../../../store'
import { formatDate } from '../../../utils'

const OrderDetail = () => {
  const orders = ordersStore((state) => state.orders)

  return (
    <View
      className="w-full bg-tertiary rounded-lg border border-primary p-3 items-start justify-between"
      style={{ height: normalize(176), marginBottom: normalize(16, 'height') }}
    >
      <Text
        className="text-left font-medium text-black leading-[1.31vh] tracking-tight"
        style={{
          fontFamily: 'mrt-500',
          fontSize: normalize(16),
        }}
      >
        {`Order #${orders[0]?.id.slice(0, 18)}...`}
      </Text>
      <Text
        className="text-left font-light text-black leading-[1.31vh] tracking-tight"
        style={{
          fontFamily: 'mrt-300',
          fontSize: normalize(13),
        }}
      >
        {`Order in ${formatDate(orders[0]?.createdAt)}`}
      </Text>
      <View className="flex-row items-center justify-between w-full">
        <Text
          className="text-left font-light text-black leading-[1.31vh] tracking-tight"
          style={{ fontFamily: 'mrt-300', fontSize: normalize(13) }}
        >
          Order status
        </Text>
        <Text
          className="text-left font-light text-black leading-[1.31vh] tracking-tight"
          style={{ fontFamily: 'mrt-300', fontSize: normalize(13) }}
        >
          {orders[0]?.status}
        </Text>
      </View>
      <View className="flex-row items-center justify-between w-full">
        <Text
          className="text-left font-light text-black leading-[1.31vh] tracking-tight"
          style={{ fontFamily: 'mrt-300', fontSize: normalize(13) }}
        >
          Items
        </Text>
        <Text
          className="text-left font-light text-black leading-[1.31vh] tracking-tight"
          style={{ fontFamily: 'mrt-300', fontSize: normalize(13) }}
        >
          {orders[0]?.products?.length} items
        </Text>
      </View>
      <View className="flex-row items-center justify-between w-full">
        <Text
          className="text-left font-light text-black leading-[1.31vh] tracking-tight"
          style={{ fontFamily: 'mrt-300', fontSize: normalize(13) }}
        >
          Price
        </Text>
        <Text
          className="text-left font-medium text-primary leading-[1.31vh] tracking-tight"
          style={{ fontFamily: 'mrt-500', fontSize: normalize(13) }}
        >
          ${orders[0]?.price}
        </Text>
      </View>
    </View>
  )
}

export default OrderDetail
