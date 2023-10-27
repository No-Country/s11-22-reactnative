import { Text, SafeAreaView, View, ScrollView, Image } from 'react-native'
import normalize from 'react-native-normalize'
import { HeadTitle } from '../../components'
import { OrderDetail, OrderItem, OrderStatus } from './components'

const OrderTracking = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="w-full"
          style={{ paddingHorizontal: normalize(22, 'width') }}
        >
          <HeadTitle title="Order tracking" />
          <OrderStatus />
          <OrderDetail />
        </View>
        <OrderItem />
        <View
          className="w-full"
          style={{
            paddingHorizontal: normalize(22, 'width'),
            marginTop: normalize(6, 'height'),
          }}
        >
          <Text
            className="font-medium text-black text-left"
            style={{
              fontFamily: 'mrt-500',
              fontSize: normalize(18),
              marginBottom: normalize(11, 'height'),
            }}
          >
            Shipping
          </Text>
          <Image
            source={{
              uri: 'https://bcggaudtahrsimkejfie.supabase.co/storage/v1/object/public/images/order-map/map_image.png?t=2023-10-27T00%3A00%3A12.205Z',
            }}
            className="w-full rounded-lg object-cover"
            style={{
              height: normalize(331),
              marginBottom: normalize(16, 'height'),
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default OrderTracking
