import {
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { RoomsCards, SearchBox } from './components'
import { CartIcon, MiniCards, TitleContent } from '../../components'
import { useCategory } from '../home/hook'
import { useProducts } from '../../hooks'
import Cards from '../../components/cards/Cards'

const SearchScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window')
  const SPACING = (width * 0.12) / 2
  const { image } = useCategory() //ToDo: change for styles
  const { getProductsByView } = useProducts()

  return (
    <SafeAreaView className="flex-1 bg-primary w-full">
      <View
        className="flex flex-row w-full items-center justify-between"
        style={{
          marginBottom: normalize(23, 'height'),
          paddingHorizontal: SPACING,
          marginTop: normalize(44, 'height'),
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-sharp" size={38} color="#114949" />
        </TouchableOpacity>
        <SearchBox />
        <CartIcon
          size={38}
          handlePress={() => navigation.navigate('CartScreen')}
          showQuantity={true}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 w-full"
      >
        <View
          className="w-full"
          style={{
            marginBottom: normalize(11, 'height'),
          }}
        >
          <TitleContent title="Explore by styles" marginTop={0} />
        </View>
        <MiniCards data={image} />
        <TitleContent title="Trending now" marginTop={22} />
        <Cards products={getProductsByView('popular')} />
        <TitleContent title="Shop by room" marginTop={12} />
        <View
          className="w-full"
          style={{
            paddingHorizontal: normalize(22, 'width'),
            marginBottom: normalize(22, 'height'),
          }}
        >
          <RoomsCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen
