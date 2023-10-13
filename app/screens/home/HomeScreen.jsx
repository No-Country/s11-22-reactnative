import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Cards, CarouselScreen, Categories } from './components'
import { userStore } from '../../store'
import { useAuth } from '../../screens/authentication/hooks'
import { CartIcon } from '../../components'

const ITEMS = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
]

const HomeScreen = () => {
  const user = userStore((state) => state.userInfo)
  const navigation = useNavigation()
  const { signOut } = useAuth()

  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <View
        className="w-full flex-row justify-between items-center"
        style={{
          marginTop: normalize(44, 'height'),
          paddingHorizontal: normalize(22, 'width'),
          marginBottom: normalize(44, 'height'),
        }}
      >
        <TouchableOpacity
          className="pl-3 h-11 rounded-lg bg-[#d9d9d9] flex items-start justify-center"
          style={{ width: normalize(278) }}
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Text
            className="font-light text-black leading-5 tracking-tight"
            style={{ fontSize: normalize(16) }}
          >
            Search
          </Text>
        </TouchableOpacity>
        <CartIcon size={38} />
        <TouchableOpacity onPress={signOut}>
          <Ionicons name="log-out-outline" size={38} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="w-full">
        <View
          className="w-full"
          style={{
            paddingHorizontal: normalize(22, 'width'),
          }}
        >
          <CarouselScreen />
        </View>
        <View className="w-full" style={{ marginTop: normalize(44, 'height') }}>
          <Categories ITEMS={ITEMS} />
        </View>
        <View
          className="w-full items-center flex-1"
          style={{
            marginTop: normalize(21, 'height'),
            paddingHorizontal: normalize(22, 'width'),
          }}
        >
          <Text
            className="text-black font-light leading-5 tracking-tight"
            style={{
              fontSize: normalize(16),
              marginBottom: normalize(33, 'height'),
            }}
          >
            Product categories
          </Text>
          <Cards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
