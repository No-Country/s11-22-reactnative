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
import {
  CartIcon,
  MiniCards,
  TitleContent,
  SpinnerScreen,
} from '../../components'
import { useCategory } from './hook'
import { productStore } from '../../store'
import { useProducts } from '../../hooks'
import Cards from '../../components/cards/Cards'

const HomeScreen = () => {
  const navigation = useNavigation()
  const { image } = useCategory()
  const isLoading = productStore((state) => state.isLoading)
  const { getProductsByView } = useProducts()

  if (isLoading) return <SpinnerScreen />

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
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-sharp" size={35} color="#114949" />
        </TouchableOpacity>
        <TouchableOpacity
          className="pl-1 h-11 rounded-lg bg-secondary flex flex-row items-center gap-1"
          style={{ width: normalize(267) }}
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
        <View
          className="w-full"
          style={{
            marginBottom: normalize(11, 'height'),
          }}
        >
          <TitleContent title="Categories" marginTop={30} />
        </View>
        <MiniCards data={image} />
        <View
          className="w-full items-center flex-1"
          style={{
            marginBottom: normalize(67, 'height'),
          }}
        >
          <TitleContent title="Most popular" marginTop={22} />
          <Cards products={getProductsByView('popular')} />
          <TitleContent title="Furniture sets" marginTop={12} />
          <Cards products={getProductsByView('set')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
