import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'
import normalize from 'react-native-normalize'
import { fakeData } from '../../../utils'

const PendingOrder = () => {
  const { width } = Dimensions.get('window')
  const SPACING = (width * 0.12) / 2

  return (
    <ScrollView
      className="w-full"
      style={{ marginTop: normalize(22, 'height') }}
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full" style={{ paddingHorizontal: SPACING }}>
        <View
          className="w-full rounded-lg bg-[#d9d9d9]"
          style={{
            height: normalize(198),
          }}
        />
        <Text
          className="text-black font-medium leading-[1.3vh] tracking-tight"
          style={{
            fontSize: normalize(20),
            marginTop: normalize(22, 'height'),
            marginBottom: normalize(11, 'height'),
          }}
        >
          Product item
        </Text>
      </View>
      <View className="w-full">
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={fakeData}
          renderItem={({ item, index }) => (
            <Image
              source={{ uri: item.productImage }}
              style={{
                width: normalize(163),
                height: normalize(154),
                marginRight: normalize(22, 'width'),
                marginLeft: index === 0 ? SPACING : 0,
              }}
              className="rounded-lg object-cover"
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View className="w-full" style={{ paddingHorizontal: SPACING }}>
        <Text
          className="text-black font-medium leading-[1.3vh] tracking-tight"
          style={{
            fontSize: normalize(20),
            marginTop: normalize(22, 'height'),
            marginBottom: normalize(11, 'height'),
          }}
        >
          Shipping
        </Text>
        <View
          className="w-full rounded-lg bg-[#d9d9d9]"
          style={{
            height: normalize(198),
            marginBottom: normalize(22, 'height'),
          }}
        />
      </View>
    </ScrollView>
  )
}

export default PendingOrder
