import { useState } from 'react'
import { View, Text, Switch, Pressable, Dimensions } from 'react-native'
import normalize from 'react-native-normalize'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const PaymentOptions = () => {
  const { height } = Dimensions.get('window')
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const navigation = useNavigation()

  return (
    <>
      <Text
        className="font-normal text-black leading-[1.31vh] tracking-tight mb-1"
        style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
      >
        Shipping to
      </Text>
      <View
        className="flex flex-row items-center justify-between w-full bg-tertiary rounded-lg border border-primary"
        style={{
          paddingLeft: normalize(11.63, 'width'),
          paddingRight: normalize(12.69, 'width'),
          height: normalize(55),
          marginBottom: normalize(24, 'height'),
        }}
      >
        <View className="flex flex-row items-center justify-center gap-3">
          <View
            className="rounded-full bg-[#B9C7C3] items-center justify-center"
            style={{ width: normalize(34), height: normalize(34) }}
          >
            <Ionicons name="ios-home-sharp" size={24} color="#114949" />
          </View>
          <View className="flex flex-col">
            <Text
              className="text-[#121212] font-medium leading-[1.125vh] tracking-tight"
              style={{ fontSize: normalize(12), fontFamily: 'mrt-500' }}
            >
              73 High Street
            </Text>
            <Text
              className="text-[#121212] font-light leading-[0.94vh] tracking-tighter"
              style={{ fontSize: normalize(10), fontFamily: 'mrt-300' }}
            >
              Birmingham, UK
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
      <View
        className="flex-row items-center justify-between w-full bg-tertiary rounded-t-lg border-x-[1px] border-t-[1px] border-primary"
        style={{
          paddingLeft: normalize(11.63, 'width'),
          paddingRight: normalize(12.69, 'width'),
          height: normalize(55),
        }}
      >
        <View className="flex-row items-center justify-center gap-3">
          <View
            className="rounded-full bg-secondary items-center justify-center"
            style={{ width: normalize(34), height: normalize(34) }}
          >
            <Ionicons name="ios-card-outline" size={24} color="#114949" />
          </View>
          <View>
            <Text
              className="text-[#131313] font-medium leading-[1.125vh] tracking-tight"
              style={{ fontSize: normalize(12), fontFamily: 'mrt-500' }}
            >
              **** **** **** 7689
            </Text>
            <Text
              className="text-[#131313] font-light leading-[1.125vh] tracking-tight"
              style={{ fontSize: normalize(10), fontFamily: 'mrt-300' }}
            >
              Mastercard
            </Text>
          </View>
        </View>
        <Switch
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View
        className="flex flex-row items-center justify-between w-full rounded-b-lg bg-tertiary border-x-[1px] border-b-[1px] border-primary"
        style={{
          paddingLeft: normalize(11.63, 'width'),
          paddingRight: normalize(12.69, 'width'),
          height: normalize(55),
          marginBottom: normalize(24, 'height'),
        }}
      >
        <View className="flex-row items-center justify-center gap-3">
          <View
            className="rounded-full bg-[#B9C7C3] items-center justify-center"
            style={{ width: normalize(34), height: normalize(34) }}
          >
            <Ionicons name="ios-card-outline" size={24} color="#114949" />
          </View>
          <View>
            <Text
              className="text-[#131313] font-medium leading-[1.125vh] tracking-tight"
              style={{ fontSize: normalize(12), fontFamily: 'mrt-500' }}
            >
              **** **** **** 7689
            </Text>
            <Text
              className="text-[#131313] font-light leading-[1.125vh] tracking-tight"
              style={{ fontSize: normalize(10), fontFamily: 'mrt-300' }}
            >
              Visa
            </Text>
          </View>
        </View>
        <Switch
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text
        className="font-normal text-black leading-[1.31vh] tracking-tight mb-1"
        style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
      >
        Other payment methods
      </Text>
      <Pressable
        className="flex flex-row items-center justify-start w-full bg-tertiary rounded-lg border border-primary"
        style={{
          paddingLeft: normalize(11.63, 'width'),
          paddingRight: normalize(12.69, 'width'),
          height: normalize(55),
          marginBottom: normalize((height * 0.27) / 2, 'height'),
        }}
        onPress={() => navigation.navigate('OrderTracking')}
      >
        <View className="flex flex-row items-center justify-center gap-3">
          <View
            className="rounded-full bg-secondary items-center justify-center"
            style={{ width: normalize(34), height: normalize(34) }}
          >
            <Ionicons name="ios-wallet-outline" size={24} color="#114949" />
          </View>
          <Text
            className="text-[#121212] font-normal leading-[1.125vh] tracking-tight"
            style={{ fontSize: normalize(12), fontFamily: 'mrt-400' }}
          >
            Add virtual wallets
          </Text>
        </View>
      </Pressable>
    </>
  )
}

export default PaymentOptions
