import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { CartItems } from './components'
import { cartStore } from '../../store'
import { totalAmount } from '../../utils'

const CartScreen = () => {
  const products = cartStore((state) => state.cart.products)
  const emptyCart = cartStore((state) => state.emptyCart)
  const navigation = useNavigation()
  const { width } = Dimensions.get('window')
  const SPACING = (width * 0.12) / 2

  return (
    <SafeAreaView className="flex-1 bg-[#E5E0D8] w-full">
      <View className="w-full" style={{ paddingHorizontal: SPACING }}>
        <View
          className="flex-row items-center justify-between w-full"
          style={{
            marginTop: normalize(44, 'height'),
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={30} color="#114949" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => emptyCart()}>
            <Text
              className="font-normal text-black"
              style={{ fontFamily: 'mrt-400', fontSize: normalize(12) }}
            >
              Delete cart
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="w-full">
          <CartItems />
          <View
            className="flex flex-row w-full items-center justify-between"
            style={{ marginTop: normalize(44, 'height') }}
          >
            <Text
              className="text-black font-light leading-[1.31vh] tracking-tight"
              style={{ fontSize: normalize(16) }}
            >
              Total
            </Text>
            <Text
              className="text-black font-normal leading-[1.31vh] tracking-tight"
              style={{ fontSize: normalize(18) }}
            >
              {totalAmount(products)}
            </Text>
          </View>
          <TouchableOpacity
            className="w-full h-11 rounded-lg flex items-center justify-center bg-[#809671]"
            style={{
              marginTop: normalize(44, 'height'),
              marginBottom: normalize(22, 'height'),
            }}
            onPress={() => navigation.navigate('PaymentScreen')}
          >
            <Text
              style={{ fontSize: normalize(20) }}
              className="text-white font-light leading-[1.31vh] tracking-tight"
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen
