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
import { useAuth } from '../../screens/authentication/hooks'
import { CartIcon } from '../../components'

const HomeScreen = () => {
  const navigation = useNavigation()
  const { signOut } = useAuth()

  return (
    <SafeAreaView className="flex-1 bg-primary items-center">
      <View
        className="w-full flex-row justify-between items-center"
        style={{
          marginTop: normalize(44, 'height'),
          paddingHorizontal: normalize(22, 'width'),
          marginBottom: normalize(44, 'height'),
        }}
      >
        <TouchableOpacity
          className="pl-1 h-11 rounded-lg bg-secondary flex flex-row items-center gap-1"
          style={{ width: normalize(278) }}
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Ionicons name="search" size={24} color="#114949" />
          <Text
            className="font-normal text-[#181818da] leading-[1.37vh] tracking-tight"
            style={{ fontSize: normalize(17), fontFamily: 'mrt-400' }}
          >
            Search
          </Text>
        </TouchableOpacity>
        <CartIcon
          size={38}
          handlePress={() => navigation.navigate('CartScreen')}
          showQuantity={true}
        />
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
        <View className="w-full" style={{ marginTop: normalize(30, 'height') }}>
          <View
            className="flex flex-row items-center justify-between w-full"
            style={{
              paddingHorizontal: normalize(22, 'width'),
              marginBottom: normalize(11, 'height'),
            }}
          >
            <Text
              style={{ fontSize: normalize(18), fontFamily: 'mrt-500' }}
              className="font-medium leading-[1.31vh] tracking-tight"
            >
              Categories
            </Text>
            <TouchableOpacity>
              <Text
                className="text-primary leading-[1.31vh] tracking-tight"
                style={{ fontSize: normalize(12), fontFamily: 'mrt-400' }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <Categories />
        </View>
        <View
          className="w-full items-center flex-1"
          style={{
            marginTop: normalize(22, 'height'),
            paddingHorizontal: normalize(22, 'width'),
          }}
        >
          <View className="flex flex-row items-center justify-between w-full">
            <Text
              style={{ fontSize: normalize(18), fontFamily: 'mrt-500' }}
              className="font-medium leading-[1.31vh] tracking-tight"
            >
              Most popular
            </Text>
            <TouchableOpacity>
              <Text
                className="text-primary leading-[1.31vh] tracking-tight"
                style={{ fontSize: normalize(12), fontFamily: 'mrt-400' }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <Cards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
