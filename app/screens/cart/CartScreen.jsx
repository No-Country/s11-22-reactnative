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

const CartScreen = () => {
  const navigation = useNavigation()
  const SCREEN_WIDTH = Dimensions.get('window').width
  const SPACING = (SCREEN_WIDTH * 0.12) / 2

  return (
    <SafeAreaView
      className="flex-1 bg-white w-full"
      style={{ paddingHorizontal: SPACING }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginTop: normalize(44, 'height'),
        }}
      >
        <Ionicons name="ios-arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
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
            Price
          </Text>
        </View>
        <TouchableOpacity
          className="w-full h-11 rounded-lg flex items-center justify-center bg-[#d9d9d9]"
          style={{
            marginTop: normalize(44, 'height'),
            marginBottom: normalize(22, 'height'),
          }}
        >
          <Text
            style={{ fontSize: normalize(20) }}
            className="text-black font-light leading-[1.31vh] tracking-tight"
          >
            Checkout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CartScreen
