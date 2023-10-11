import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { Link, useNavigation } from '@react-navigation/native'
import normalize from 'react-native-normalize'

const StylesExplorerScreen = ({ items, spacing }) => {
  const navigation = useNavigation()

  return (
    <>
      <View
        className="w-full flex flex-row items-center justify-between"
        style={{
          paddingHorizontal: normalize(22, 'width'),
          marginTop: normalize(27, 'height'),
          marginBottom: normalize(17, 'height'),
        }}
      >
        <Text
          style={{ fontSize: normalize(20) }}
          className="text-black font-medium leading-[1.32vh] tracking-tight"
        >
          Trending now
        </Text>
        <Link
          to="HomeScreen"
          style={{ fontSize: normalize(16) }}
          className="text-black font-light leading-[1.32vh] tracking-tight"
        >
          See all
        </Link>
      </View>
      <View className="w-full">
        <FlatList
          className="w-full"
          data={items}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ index, item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetailScreen', { itemId: item.id })
              }
            >
              <Image
                source={{
                  uri: 'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
                }}
                className="object-cover rounded-lg"
                style={{
                  height: normalize(155),
                  width: normalize(126),
                  marginLeft: index === 0 ? spacing : 0,
                  marginRight: normalize(22, 'width'),
                }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View
        className="w-full"
        style={{
          paddingHorizontal: normalize(22, 'width'),
          marginTop: normalize(22, 'height'),
          marginBottom: normalize(17, 'height'),
        }}
      >
        <Text
          style={{ fontSize: normalize(20) }}
          className="text-black font-medium leading-[1.32vh] tracking-tight"
        >
          Shop by room
        </Text>
      </View>
      <View className="w-full">
        <FlatList
          className="w-full"
          data={items}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ index, item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetailScreen', { itemId: item.id })
              }
            >
              <Image
                source={{
                  uri: 'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
                }}
                className="object-cover rounded-lg"
                style={{
                  height: normalize(155),
                  width: normalize(126),
                  marginLeft: index === 0 ? spacing : 0,
                  marginRight: normalize(22, 'width'),
                }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  )
}

export default StylesExplorerScreen
