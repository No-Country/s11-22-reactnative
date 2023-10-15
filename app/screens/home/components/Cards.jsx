import { Image, TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import ITEMS from '../../../utils/fakeData'
import { CartIcon } from '../../../components'
import { cartStore } from '../../../store'

const Cards = () => {
  const navigation = useNavigation()
  const addToCart = cartStore((state) => state.addToCart)

  return (
    <View className="flex flex-row flex-wrap w-full items-center justify-between">
      {ITEMS?.map((item) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductDetailScreen', { itemId: item?.id })
          }
          className="rounded-lg border border-[#CFD1C0] bg-primary p-[0.69vh]"
          key={item?.id}
          style={{
            width: normalize(163),
            height: normalize(220),
            marginBottom: normalize(22, 'height'),
          }}
        >
          <Image
            source={{
              uri: item?.productImage,
            }}
            className="w-full object-cover rounded"
            style={{
              height: normalize(155),
              marginBottom: normalize(10, 'height'),
            }}
          />
          <View className="flex flex-row w-full items-center justify-between">
            <Text
              className="leading-[1.31vh] tracking-tight"
              style={{ fontSize: normalize(14) }}
            >
              {item?.productName}
            </Text>
            <TouchableOpacity className="z-20">
              <Ionicons name="md-heart-outline" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <Text className="font-light" style={{ fontSize: normalize(10) }}>
            Bohemian collection
          </Text>
          <View className="flex flex-row w-full items-center justify-between">
            <Text>${item?.productPrice}</Text>
            <View className="z-20">
              <CartIcon
                size={18}
                handlePress={() => addToCart(item)}
                showQuantity={false}
              />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Cards
