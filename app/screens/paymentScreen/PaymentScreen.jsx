import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import normalize from 'react-native-normalize'
import { PaymentOptions } from './components'
import { HeadTitle } from '../../components'

const PaymentScreen = () => {
  const { width } = Dimensions.get('window')
  const SPACING = (width * 0.12) / 2

  return (
    <SafeAreaView className="flex-1 bg-white w-full">
      <View className="w-full" style={{ paddingHorizontal: SPACING }}>
        <HeadTitle title="How would you like to pay?" />
        <PaymentOptions />
        <View
          className="flex flex-row items-center justify-between w-full bg-[#D9D9D9] rounded-lg"
          style={{
            paddingLeft: normalize(11.63, 'width'),
            paddingRight: normalize(12.69, 'width'),
            height: normalize(55),
            marginBottom: normalize(44, 'height'),
          }}
        >
          <View className="flex flex-row items-center justify-center gap-3">
            <Text
              className="text-[#131313] font-medium leading-6 tracking-tight"
              style={{ fontSize: normalize(16) }}
            >
              Total
            </Text>
          </View>
          <Text
            className="text-[#131313] font-medium leading-6 tracking-tight"
            style={{ fontSize: normalize(16) }}
          >
            Price
          </Text>
        </View>
        <TouchableOpacity
          className="flex items-center justify-center w-full bg-[#D9D9D9] rounded-lg"
          style={{
            height: normalize(55),
          }}
        >
          <Text
            className="text-black font-light leading-[1.31vh] tracking-tight"
            style={{ fontSize: normalize(20) }}
          >
            Confirm Payment
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PaymentScreen
