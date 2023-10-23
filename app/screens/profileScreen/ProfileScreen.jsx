import { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  Switch,
  ScrollView,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { ProfileConfigurations } from './components'

const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <SafeAreaView className="w-full flex-1 bg-primary">
      <ScrollView
        className="w-full flex-1"
        contentContainerStyle={{ paddingHorizontal: normalize(22, 'width') }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          className="font-medium text-black leading-[1.31vh] tracking-tight text-left"
          style={{
            fontSize: normalize(24),
            fontFamily: 'mrt-500',
            marginTop: normalize(44, 'height'),
            marginBottom: normalize(22, 'height'),
          }}
        >
          Profile
        </Text>
        <View
          className="bg-secondary flex flex-row items-center justify-start w-full rounded-lg pl-3"
          style={{
            height: normalize(66),
            marginBottom: normalize(33, 'height'),
          }}
        >
          <Image
            source={{ uri: 'https://picsum.photos/300/300' }}
            className="h-11 w-11 rounded-full"
          />
          <Text
            className="font-normal text-black leading-[1.31vh] tracking-tight ml-3"
            style={{ fontSize: normalize(16), fontFamily: 'mrt-400' }}
          >
            Diego
          </Text>
        </View>
        <Pressable
          className="flex flex-row px-3 w-full items-center justify-between border-[#B4B79A] border-b-[1px] rounded-t-lg bg-secondary"
          style={{ height: normalize(44) }}
        >
          <View className="flex flex-row items-center gap-3">
            <Ionicons name="ios-card-outline" size={22} color="#114949" />
            <Text
              className="text-black font-normal leading-5"
              style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
            >
              Cards
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#114949" />
        </Pressable>
        <Pressable
          className="flex flex-row px-3 w-full items-center justify-between rounded-b-lg bg-secondary"
          style={{
            height: normalize(44),
            marginBottom: normalize(33, 'height'),
          }}
        >
          <View className="flex flex-row items-center gap-3">
            <Ionicons name="location-outline" size={22} color="#114949" />
            <Text
              className="text-black font-normal leading-5"
              style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
            >
              Addresses
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#114949" />
        </Pressable>
        <Pressable
          className="flex flex-row px-3 w-full items-center justify-between rounded-lg bg-secondary"
          style={{
            height: normalize(44),
            marginBottom: normalize(33, 'height'),
          }}
        >
          <View className="flex flex-row items-center gap-3">
            <Ionicons name="notifications-outline" size={22} color="#114949" />
            <Text
              className="text-black font-normal leading-5"
              style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
            >
              Notifications
            </Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: '#34C759' }}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Pressable>
        <ProfileConfigurations />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
