import { TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import CartIcon from '../cartIcon/CartIcon'
import { useProducts } from '../../hooks'

const SearchBox = ({ handlePress }) => {
  const navigation = useNavigation()
  const { search, setSearch, getProductsByName } = useProducts()

  return (
    <View className="flex flex-row w-full items-center justify-between">
      <TouchableOpacity
        className="ml-[-10px] mr-2"
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back-sharp" size={38} color="#114949" />
      </TouchableOpacity>
      <View
        className="flex relative h-11 items-center"
        style={{ width: normalize(267) }}
      >
        <View className="absolute h-full left-1 z-10 flex items-center justify-center">
          <Ionicons name="search" size={21} color="#114949" />
        </View>
        <TextInput
          className="w-full px-8 h-full bg-secondary text-black font-light leading-5 tracking-tight"
          placeholder="Search"
          placeholderTextColor="#121212dc"
          keyboardType="web-search"
          style={{
            fontSize: normalize(17),
            fontFamily: 'mrt-400',
            borderRadius: normalize(10),
          }}
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={() => getProductsByName()}
        />
      </View>
      <FlatList
        data={searched}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <CartIcon
        size={38}
        handlePress={() => navigation.navigate('CartScreen')}
        showQuantity={true}
      />
    </View>
  )
}

export default SearchBox
