import { useState } from 'react'
import { View, Text, Switch, Pressable, Dimensions } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'

const PaymentOptions = () => {
  const { height } = Dimensions.get('window')
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <>
      <Text
        className="font-medium text-black leading-[1.31vh] tracking-tight mb-2"
        style={{ fontSize: normalize(16) }}
      >
        With debit or credit
      </Text>
      <View
        className="flex flex-row items-center justify-between w-full bg-[#D9D9D9] rounded-lg"
        style={{
          paddingLeft: normalize(11.63, 'width'),
          paddingRight: normalize(12.69, 'width'),
          height: normalize(55),
          marginBottom: normalize(24, 'height'),
        }}
      >
        <View className="flex flex-row items-center justify-center gap-3">
          <View
            className="rounded-full bg-[#9D9D9D]"
            style={{ width: normalize(34), height: normalize(34) }}
          />
          <View className="flex flex-col">
            <Text
              className="text-[#131313] font-normal leading-[1.125vh] tracking-tight"
              style={{ fontSize: normalize(12) }}
            >
              Use <Text className="font-bold">$180</Text>
            </Text>
            <Text
              className="text-[#131313] font-light leading-[0.94vh] tracking-tighter"
              style={{ fontSize: normalize(10) }}
            >
              Available money
            </Text>
          </View>
        </View>
        <Switch
          trackColor={{ false: '#767577', true: '#CFD1C0' }}
          thumbColor={isEnabled ? '#809671' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Pressable
        className="flex flex-row items-center justify-between w-full bg-[#D9D9D9] rounded-t-lg border-b-[1px] border-solid border-[#969696e3]"
        style={{
          paddingLeft: normalize(11.63, 'width'),
          paddingRight: normalize(12.69, 'width'),
          height: normalize(55),
        }}
      >
        <View className="flex flex-row items-center justify-center gap-3">
          <View
            className="rounded-full bg-[#9D9D9D]"
            style={{ width: normalize(34), height: normalize(34) }}
          />
          <Text
            className="text-[#131313] font-normal leading-[1.125vh] tracking-tight"
            style={{ fontSize: normalize(12) }}
          >
            New debit card
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
      <Pressable
        className="flex flex-row items-center justify-between w-full bg-[#D9D9D9] rounded-b-lg"
        style={{
          paddingLeft: normalize(11.63, 'width'),
          paddingRight: normalize(12.69, 'width'),
          height: normalize(55),
          marginBottom: normalize(24, 'height'),
        }}
      >
        <View className="flex flex-row items-center justify-center gap-3">
          <View
            className="rounded-full bg-[#9D9D9D]"
            style={{ width: normalize(34), height: normalize(34) }}
          />
          <Text
            className="text-[#131313] font-normal leading-[1.125vh] tracking-tight"
            style={{ fontSize: normalize(12) }}
          >
            New credit card
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
      <Text
        className="font-medium text-black leading-[1.31vh] tracking-tight mb-2"
        style={{ fontSize: normalize(16) }}
      >
        Other payment methods
      </Text>
      <Pressable
        className="flex flex-row items-center justify-between w-full bg-[#D9D9D9] rounded-lg"
        style={{
          paddingLeft: normalize(11.63, 'width'),
          paddingRight: normalize(12.69, 'width'),
          height: normalize(55),
          marginBottom: normalize((height * 0.28) / 2, 'height'),
        }}
      >
        <View className="flex flex-row items-center justify-center gap-3">
          <View
            className="rounded-full bg-[#9D9D9D]"
            style={{ width: normalize(34), height: normalize(34) }}
          />
          <Text
            className="text-[#131313] font-normal leading-[1.125vh] tracking-tight"
            style={{ fontSize: normalize(12) }}
          >
            Add virtual wallets
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
    </>
  )
}

export default PaymentOptions
