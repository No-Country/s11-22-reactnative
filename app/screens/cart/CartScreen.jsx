import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { CartItems, EmptyCart } from './components'
import { cartStore } from '../../store'
import { totalAmount } from '../../utils'
import { useCart } from './hooks'

const CartScreen = () => {
  const products = cartStore((state) => state.cart.products)
  const navigation = useNavigation()
  const { height } = Dimensions.get('window')
  const { clearCart } = useCart()

  function handleNavigateNextScreen() {
    if (products.length === 0)
      return Alert.alert('There are no products in the cart!')
    navigation.navigate('PaymentScreen')
  }

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {products?.length === 0 ? (
        <EmptyCart />
      ) : (
        <View
          className="w-full"
          style={{ paddingHorizontal: normalize(22, 'width') }}
        >
          <View
            className="flex-row items-center justify-between w-full"
            style={{
              marginTop: normalize(44, 'height'),
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={30} color="#114949" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clearCart()}>
              <Text
                className="font-normal text-black"
                style={{ fontFamily: 'mrt-400', fontSize: normalize(12) }}
              >
                Delete cart
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="w-full"
            style={{ height: (height / 2.5) * 1.6 }}
          >
            <CartItems />
          </ScrollView>
          <View
            className="flex flex-row w-full items-center justify-between"
            style={{ marginTop: normalize(11, 'height') }}
          >
            <Text
              className="text-black font-normal leading-[1.31vh] tracking-tight"
              style={{ fontSize: normalize(18), fontFamily: 'mrt-400' }}
            >
              Total
            </Text>
            <Text
              className="text-primary font-medium leading-[1.31vh] tracking-tight"
              style={{ fontSize: normalize(18), fontFamily: 'mrt-500' }}
            >
              ${totalAmount(products)}
            </Text>
          </View>
          <TouchableOpacity
            className="w-full h-11 rounded-lg flex items-center justify-center bg-[#809671]"
            style={{
              marginTop: normalize(44, 'height'),
            }}
            onPress={handleNavigateNextScreen}
          >
            <Text
              style={{ fontSize: normalize(18), fontFamily: 'mrt-400' }}
              className="text-white font-normal leading-[1.31vh] tracking-tight"
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

export default CartScreen
