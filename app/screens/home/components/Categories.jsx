import { TouchableOpacity, FlatList, Dimensions } from 'react-native'
import normalize from 'react-native-normalize'

const Categories = ({ ITEMS }) => {
  const SRC_WIDTH = Dimensions.get('window').width
  const SPACING = (SRC_WIDTH * 0.12) / 2
  return (
    <FlatList
      data={ITEMS}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ index }) => (
        <TouchableOpacity
          className="w-11 h-11 bg-[#D9D9D9] rounded-lg"
          style={{
            marginRight: normalize(27),
            marginLeft: index === 0 ? SPACING : 0,
          }}
        ></TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Categories
