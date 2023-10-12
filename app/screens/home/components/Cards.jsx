import { FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import normalize from 'react-native-normalize'
import ITEMS from '../../../utils/fakeData'

const Cards = () => {
  const navigation = useNavigation()

  return (
    <FlatList
      className="w-full"
      data={ITEMS}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductDetailScreen', { itemId: item.id })
          }
          className="w-full"
        >
          <Image
            source={{
              uri: 'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
            }}
            className="w-full object-cover rounded-lg"
            style={{
              height: normalize(155),
              marginBottom: normalize(20),
            }}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Cards
