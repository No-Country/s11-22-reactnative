import {
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  Text,
} from 'react-native'
import normalize from 'react-native-normalize'
import { useCategory } from '../hook'

const Categories = () => {
  const { width } = Dimensions.get('window')
  const SPACING = (width * 0.12) / 2
  const { image } = useCategory()

  return (
    <FlatList
      data={image}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ index, item }) => (
        <TouchableOpacity
          className="flex justify-center items-center"
          style={{
            marginRight: normalize(27, 'width'),
            marginLeft: index === 0 ? SPACING : 0,
          }}
        >
          <Image
            source={{ uri: item?.image }}
            className="w-14 h-14 rounded-lg object-cover"
          />
          <Text
            className="leading-[1.31vh] tracking-tight mt-2 capitalize"
            style={{ fontSize: normalize(10) }}
          >
            {item?.name}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item?.id}
    />
  )
}

export default Categories
