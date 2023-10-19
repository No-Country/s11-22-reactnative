import { Image, TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { CartIcon } from '..'
import { cartStore } from '../../store'

const Cards = ({ products }) => {
  const navigation = useNavigation()
  const addToCart = cartStore((state) => state.addToCart)

  return (
    <View className="flex flex-row flex-wrap w-full items-center justify-between">
      {products?.map((item) => (
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
              uri: item?.image,
            }}
            className="w-full object-cover rounded"
            style={{
              height: normalize(155),
              marginBottom: normalize(8, 'height'),
            }}
          />
          <View className="flex flex-row w-full items-center justify-between">
            <Text
              className="leading-[1.31vh] tracking-tight"
              style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
            >
              {item?.name}
            </Text>
            <TouchableOpacity className="z-20">
              <Ionicons name="md-heart-outline" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <Text
            className="font-extralight"
            style={{ fontSize: normalize(10), fontFamily: 'mrt-200' }}
          >
            {item?.description}
          </Text>
          <View className="flex flex-row w-full items-center justify-between">
            <Text style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}>
              ${item?.price}
            </Text>
            <View className="z-20">
              <CartIcon
                size={22}
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
