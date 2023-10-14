import { TouchableOpacity, FlatList, Dimensions, Image } from 'react-native'
import normalize from 'react-native-normalize'
import { useCategory } from '../hook'

const Categories = () => {
  const SRC_WIDTH = Dimensions.get('window').width
  const SPACING = (SRC_WIDTH * 0.12) / 2
  const { image } = useCategory()

  return (
    <FlatList
      data={image}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ index, item }) => (
        <TouchableOpacity
          className="w-11 h-11 bg-[#D9D9D9] rounded-lg"
          style={{
            marginRight: normalize(27),
            marginLeft: index === 0 ? SPACING : 0,
          }}
        >
          <Image
            source={{ uri: item.image }}
            className="w-11 h-11 rounded-lg"
          />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

export default Categories
