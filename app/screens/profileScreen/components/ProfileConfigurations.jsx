import { View, Text, Pressable } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from '../../authentication/hooks'

const ProfileConfigurations = () => {
  const { signOut } = useAuth()

  return (
    <>
      <Pressable
        className="flex flex-row px-3 w-full items-center justify-between border-primary border-x-[1px] border-t-[1px] rounded-t-lg bg-tertiary"
        style={{ height: normalize(44) }}
      >
        <View className="flex flex-row items-center gap-3">
          <Ionicons name="ios-settings-outline" size={22} color="#114949" />
          <Text
            className="text-black font-normal leading-5"
            style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
          >
            Settings
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#114949" />
      </Pressable>
      <Pressable
        className="flex flex-row px-3 w-full items-center justify-between border-primary border-x-[1px] bg-tertiary"
        style={{ height: normalize(44) }}
      >
        <View className="flex flex-row items-center gap-3">
          <Ionicons name="construct-outline" size={22} color="#114949" />
          <Text
            className="text-black font-normal leading-5"
            style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
          >
            Support
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#114949" />
      </Pressable>
      <Pressable
        className="flex flex-row px-3 w-full items-center justify-between border-primary border-x-[1px] bg-tertiary"
        style={{ height: normalize(44) }}
      >
        <View className="flex flex-row items-center gap-3">
          <Ionicons name="ios-flag-outline" size={22} color="#114949" />
          <Text
            className="text-black font-normal leading-5"
            style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
          >
            Report a problem
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#114949" />
      </Pressable>
      <Pressable
        className="flex flex-row px-3 w-full items-center justify-between rounded-b-lg border-primary border-x-[1px] border-b-[1px] bg-tertiary"
        style={{
          height: normalize(44),
          marginBottom: normalize(33, 'height'),
        }}
      >
        <View className="flex flex-row items-center gap-3">
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#114949"
          />
          <Text
            className="text-black font-normal leading-5"
            style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
          >
            Terms and policies
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#114949" />
      </Pressable>
      <Pressable
        className="flex flex-row px-3 w-full items-center justify-between rounded-lg border-primary border bg-tertiary"
        style={{
          height: normalize(44),
          marginBottom: normalize(108, 'height'),
        }}
        onPress={signOut}
      >
        <View className="flex flex-row items-center gap-3">
          <Ionicons name="ios-log-out-outline" size={22} color="#114949" />
          <Text
            className="text-black font-normal leading-5"
            style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
          >
            Log out
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#114949" />
      </Pressable>
    </>
  )
}

export default ProfileConfigurations
