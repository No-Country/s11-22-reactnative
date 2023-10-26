import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import { PaymentOptions } from './components'
import { HeadTitle } from '../../components'
import { cartStore } from '../../store'
import { totalAmount } from '../../utils'

const PaymentScreen = () => {
  const products = cartStore((state) => state.cart.products)

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View
        className="w-full"
        style={{ paddingHorizontal: normalize(22, 'width') }}
      >
        <HeadTitle title="Checkout" />
        <PaymentOptions />
        <View
          className="flex-row items-center justify-between w-full"
          style={{
            marginBottom: normalize(44, 'height'),
          }}
        >
          <Text
            className="text-[#131313] font-normal leading-[1.31vh] tracking-tight"
            style={{ fontSize: normalize(18), fontFamily: 'mrt-400' }}
          >
            Total
          </Text>
          <Text
            className="text-primary font-medium leading-[1.31vh] tracking-tight"
            style={{ fontSize: normalize(18), fontFamily: 'mrt-500' }}
          >
            {totalAmount(products)}
          </Text>
        </View>
        <TouchableOpacity
          className="flex items-center justify-center w-full bg-[#809671] rounded-lg"
          style={{
            height: normalize(44),
          }}
        >
          <Text
            className="text-white font-normal leading-[1.31vh] tracking-tight"
            style={{ fontSize: normalize(18), fontFamily: 'mrt-400' }}
          >
            Confirm order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PaymentScreen
