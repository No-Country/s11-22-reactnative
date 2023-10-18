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
import { CarouselScreen } from './components'
import { useAuth } from '../../screens/authentication/hooks'
import { CartIcon, MiniCards, Cards, TitleContent } from '../../components'
import { useCategory } from './hook'

const HomeScreen = () => {
  const navigation = useNavigation()
  const { signOut } = useAuth()
  const { image } = useCategory()

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
            <TitleContent title="Categories" />
          </View>
          <MiniCards data={image} />
        </View>
        <View
          className="w-full items-center flex-1"
          style={{
            marginTop: normalize(22, 'height'),
            paddingHorizontal: normalize(22, 'width'),
            marginBottom: normalize(67, 'height'),
          }}
        >
          <TitleContent title="Most popular" />
          <Cards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
