import { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { PaymentOptions } from './components'

const PaymentScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window')
  const SPACING = (width * 0.12) / 2

  return (
    <SafeAreaView
      className="flex-1 bg-white w-full"
      style={{ paddingHorizontal: SPACING }}
    >
      <View
        className="flex flex-row items-center justify-center w-full relative"
        style={{
          marginTop: normalize(44, 'height'),
          marginBottom: normalize(21, 'height'),
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute left-0"
        >
          <Ionicons name="ios-arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text
          className="font-medium text-black leading-[1.31vh] tracking-tight"
          style={{
            fontSize: normalize(20),
          }}
        >
          How would you like to pay?
        </Text>
      </View>
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
    </SafeAreaView>
  )
}

export default PaymentScreen
