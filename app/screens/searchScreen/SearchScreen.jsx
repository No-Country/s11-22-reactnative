import { View, SafeAreaView, ScrollView } from 'react-native'
import normalize from 'react-native-normalize'
import { RoomsCards } from './components'
import { MiniCards, SearchBox, TitleContent } from '../../components'
import { useCategory } from '../home/hook'
import { useProducts } from '../../hooks'
import Cards from '../../components/cards/Cards'

const SearchScreen = () => {
  const { image } = useCategory() //ToDo: change for styles
  const { getProductsByView } = useProducts()

  return (
    <SafeAreaView className="flex-1 bg-primary w-full">
      <View
        className="w-full"
        style={{
          marginBottom: normalize(23, 'height'),
          paddingHorizontal: normalize(22, 'width'),
          marginTop: normalize(44, 'height'),
        }}
      >
        <SearchBox />
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
