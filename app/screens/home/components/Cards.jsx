import { FlatList, Image } from 'react-native'
import normalize from 'react-native-normalize'

const Cards = ({ ITEMS }) => {
  return (
    <FlatList
      className="w-full"
      data={ITEMS}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      renderItem={() => (
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
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Cards
