import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Cards, Categories } from './components'
import { userStore } from '../../store'
import { useAuth } from '../../screens/authentication/hooks'

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
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Ionicons name="ios-cart-outline" size={38} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={signOut}>
          <Ionicons name="log-out-outline" size={38} color="black" />
        </TouchableOpacity>
      </View>
      <View
        className="w-full"
        style={{
          paddingHorizontal: normalize(22, 'width'),
          marginTop: normalize(44, 'height'),
        }}
      >
        <Image
          source={{
            uri: 'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
          }}
          className="w-full object-cover rounded-lg"
          style={{
            height: normalize(155),
          }}
        />
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
        <Cards ITEMS={ITEMS} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
