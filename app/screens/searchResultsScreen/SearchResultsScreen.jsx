import { View, Text, SafeAreaView, Pressable, ScrollView } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { SearchBox, SpinnerScreen } from '../../components'
import { productStore } from '../../store'
import Card from '../../components/card/Card'

const SearchResultsScreen = () => {
  const searchedProducts = productStore((state) => state.searchedProducts)
  const isLoading = productStore((state) => state.isLoading)

  if (isLoading) return <SpinnerScreen />

  return (
    <SafeAreaView className="flex-1 bg-primary w-full">
      <View
        className="w-full flex flex-col"
        style={{
          paddingHorizontal: normalize(22, 'width'),
          marginTop: normalize(44, 'height'),
        }}
      >
        <SearchBox />
        <View
          className="flex flex-row w-full items-center justify-between"
          style={{
            marginTop: normalize(23, 'height'),
          }}
        >
          <Text
            className="font-medium leading-[1.3vh] tracking-tight"
            style={{ fontSize: normalize(14), fontFamily: 'mrt-500' }}
          >{`${searchedProducts?.length} results`}</Text>
          <Pressable className="flex flex-row items-center gap-2">
            <Text
              className="leading-[1.3vh] tracking-tight text-primary"
              style={{ fontSize: normalize(12), fontFamily: 'mrt-400' }}
            >
              Filter
            </Text>
            <Ionicons name="options-outline" size={21} color="#114949" />
          </Pressable>
        </View>
      </View>
      <ScrollView
        className="w-full"
        contentContainerStyle={{ paddingHorizontal: normalize(22, 'width') }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full flex flex-row flex-wrap justify-between">
          {searchedProducts?.map((item, index) => (
            <Card
              key={item.id}
              item={item}
              index={index}
              marginRight={0}
              leftSpace={false}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchResultsScreen
