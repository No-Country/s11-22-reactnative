import { View, Text } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'

const ORDER_STATUS = [
  {
    id: 1,
    status: 'Packing',
    defaultStatus: true,
  },
  {
    id: 2,
    status: 'Shipping',
    defaultStatus: false,
  },
  {
    id: 3,
    status: 'Arriving',
    defaultStatus: false,
  },
  {
    id: 4,
    status: 'Delivered',
    defaultStatus: false,
  },
]

const OrderStatus = () => {
  return (
    <View
      className="flex-row items-center justify-between w-full"
      style={{
        marginTop: normalize(24, 'height'),
        marginBottom: normalize(18, 'height'),
      }}
    >
      <View className="w-full h-4 absolute top-0 left-0 items-center justify-center px-4">
        <View className="w-full border-t-[1px] border-[#114949B2]" />
      </View>
      {ORDER_STATUS.map((orderStatus) => (
        <View className="items-center justify-center" key={orderStatus?.id}>
          <View
            className={`w-4 h-4 rounded-full z-10 ${
              orderStatus?.defaultStatus
                ? 'bg-[#114949]'
                : 'bg-primary border border-[#114949B2]'
            } items-center justify-center mb-2`}
          >
            {orderStatus?.defaultStatus && (
              <Ionicons name="checkmark" size={12} color="#E5E0D8" />
            )}
          </View>
          <Text
            className="font-normal text-black leading-5 -tracking-wider"
            style={{ fontFamily: 'mrt-400', fontSize: normalize(11) }}
          >
            {orderStatus?.status}
          </Text>
        </View>
      ))}
    </View>
  )
}

export default OrderStatus
