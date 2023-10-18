import {
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { SearchBox } from './components'
import { Cards, MiniCards, TitleContent } from '../../components'
import { useCategory } from '../home/hook'

const SearchScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window')
  const SPACING = (width * 0.12) / 2
  const { image } = useCategory() //ToDo: change for styles

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View
        className="w-full"
        style={{
          paddingHorizontal: SPACING,
          marginTop: normalize(44, 'height'),
        }}
      >
        <View
          className="flex flex-row w-full items-center justify-between"
          style={{ marginBottom: normalize(23, 'height') }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={38} color="#114949" />
          </TouchableOpacity>
          <SearchBox />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 w-full"
      >
        <View
          className="w-full"
          style={{ marginBottom: normalize(22, 'height') }}
        >
          <View
            className="flex flex-row items-center justify-between w-full"
            style={{
              paddingHorizontal: normalize(22, 'width'),
              marginBottom: normalize(11, 'height'),
            }}
          >
            <TitleContent title="Explore by styles" />
          </View>
          <MiniCards data={image} />
          <View
            className="w-full"
            style={{
              paddingHorizontal: normalize(22, 'width'),
              marginTop: normalize(22, 'height'),
            }}
          >
            <TitleContent title="Trending now" />
            <Cards />
            <TitleContent title="Shop by room" />
            <Cards />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen
