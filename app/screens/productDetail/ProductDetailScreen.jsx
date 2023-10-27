import { useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { ProductInfo } from './components'
import { cartStore } from '../../store'
import { CartIcon } from '../../components'
import { useProducts } from '../../hooks'

const ProductDetailScreen = ({ route, navigation }) => {
  const { height } = Dimensions.get('window')
  const { itemId } = route.params
  const addProduct = cartStore((state) => state.addToCart)
  const { getProductById, product, handleBuyProduct } = useProducts()

  useEffect(() => {
    getProductById(itemId)
  }, [itemId])

  return (
    <SafeAreaView className="flex-1 bg-[#E5E0D8]">
      <View
        className="w-full"
        style={{ paddingHorizontal: normalize(22, 'width') }}
      >
        <View
          className="w-full flex-row items-center justify-between"
          style={{
            marginTop: normalize(44, 'height'),
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={30} color="#114949" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-center">
            <TouchableOpacity
              className="mr-2"
              onPress={() => navigation.navigate('SearchScreen')}
            >
              <Ionicons name="search" size={27} color="#114949" />
            </TouchableOpacity>
            <CartIcon
              size={30}
              handlePress={() => navigation.navigate('CartScreen')}
              showQuantity={true}
            />
          </View>
        </View>
        <View
          style={{
            height: (height / 1.9) * 0.7,
            marginTop: normalize(33, 'height'),
          }}
        >
          <Image
            source={{
              uri: product[0]?.images[0],
            }}
            className="object-cover w-full h-full rounded-lg"
          />
          <TouchableOpacity className="absolute top-3 right-3 rounded-full bg-secondary w-7 h-7 items-center justify-center z-10">
            <Ionicons name="md-heart-outline" size={22} color="#114949" />
          </TouchableOpacity>
          <TouchableOpacity className="absolute bottom-3 right-3 rounded-full bg-secondary w-7 h-7 items-center justify-center z-10">
            <Ionicons
              name="md-share-social-outline"
              size={20}
              color="#114949"
            />
          </TouchableOpacity>
        </View>
        <View
          className="w-full flex flex-col"
          style={{ marginTop: normalize(22, 'height') }}
        >
          <ProductInfo product={product[0]} />
          <TouchableOpacity
            className="w-full h-11 rounded-lg bg-[#809671] flex items-center justify-center"
            style={{ marginTop: normalize(44, 'height') }}
            onPress={handleBuyProduct}
          >
            <Text
              className="text-white font-normal leading-[1.31vh] tracking-tight"
              style={{ fontSize: normalize(18), fontFamily: 'mrt-400' }}
            >
              Buy now
            </Text>
          </TouchableOpacity>
          <View
            className="flex-row items-center justify-between w-full"
            style={{ marginTop: normalize(22, 'height') }}
          >
            <TouchableOpacity
              className="h-11 rounded-lg bg-transparent flex items-center justify-center border border-[#809671]"
              style={{ width: normalize(163) }}
            >
              <Text
                className="text-[#809671] font-normal leading-[1.31vh] tracking-tight"
                style={{ fontSize: normalize(18), fontFamily: 'mrt-400' }}
              >
                Use AR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="h-11 rounded-lg bg-secondary flex items-center justify-center"
              style={{ width: normalize(163) }}
              onPress={() => addProduct(product[0])}
            >
              <Text
                className="text-[#607750] font-normal leading-[1.31vh] tracking-tight"
                style={{ fontSize: normalize(18), fontFamily: 'mrt-400' }}
              >
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProductDetailScreen
