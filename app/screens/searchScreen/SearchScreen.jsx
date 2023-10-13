import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { StylesExplorerScreen, StylesListScreen, SearchBox } from './components'

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

const SearchScreen = ({ navigation }) => {
  const SCREEN_WIDTH = Dimensions.get('window').width
  const SPACING = (SCREEN_WIDTH * 0.12) / 2

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className="w-full"
        style={{
          paddingHorizontal: normalize(22, 'width'),
          marginTop: normalize(44, 'height'),
        }}
      >
        <Text
          style={{
            fontSize: normalize(30),
            marginBottom: normalize(22, 'height'),
          }}
          className="text-black font-semibold tracking-tight text-left"
        >
          Browse
        </Text>
        <View className="flex flex-row w-full items-center justify-between gap-1">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
          <SearchBox />
        </View>
        <Text
          style={{
            marginTop: normalize(22, 'height'),
            marginBottom: normalize(11, 'height'),
            fontSize: normalize(20),
          }}
          className="text-black font-medium leading-6 tracking-tight text-left"
        >
          Explore by style
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 w-full"
      >
        <View
          className="w-full"
          style={{ marginBottom: normalize(22, 'height') }}
        >
          <StylesListScreen spacing={SPACING} items={ITEMS} />
          <StylesExplorerScreen spacing={SPACING} items={ITEMS} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen
