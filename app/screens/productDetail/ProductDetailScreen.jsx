import { useState, useEffect } from 'react'
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
import DATA from '../../utils/fakeData'
import { CartIcon } from '../../components'
import { useProducts } from '../../hooks'

const ProductDetailScreen = ({ route, navigation }) => {
  const SCREEN_HEIGHT = Dimensions.get('window').height
  const SCREEN_WIDTH = Dimensions.get('window').width
  const SPACING = (SCREEN_WIDTH * 0.12) / 2
  const { itemId } = route.params
  const [product, setProduct] = useState({})
  const addProduct = cartStore((state) => state.addToCart)
  const emptyCart = cartStore((state) => state.emptyCart)
  const { getProductById } = useProducts()

  useEffect(() => {
    const product = getProductById(itemId)
    setProduct(product)
  }, [itemId])

  return (
    <SafeAreaView className="flex-1 bg-[#E5E0D8] w-full">
      <View className="w-full" style={{ paddingHorizontal: SPACING }}>
        <View
          className="w-full flex flex-row items-center justify-between"
          style={{
            marginTop: normalize(22, 'height'),
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
          <CartIcon
            size={30}
            handlePress={() => navigation.navigate('CartScreen')}
            showQuantity={true}
          />
        </View>
        <View
          style={{
            height: SCREEN_HEIGHT / 2.5,
            marginTop: normalize(11, 'height'),
          }}
        >
          <Image
            source={{
              uri: product[0]?.images[0],
            }}
            className="object-cover w-full h-full"
          />
        </View>
        <View
          className="w-full flex flex-col"
          style={{ marginTop: normalize(22, 'height') }}
        >
          <ProductInfo product={product[0]} />
          <TouchableOpacity
            className="w-full h-11 rounded-lg bg-[#809671] flex items-center justify-center"
            style={{ marginTop: normalize(44, 'height') }}
          >
            <Text
              className="text-white font-light leading-[1.31vh] tracking-tight"
              style={{ fontSize: normalize(20) }}
              onPress={() => addProduct(product)}
            >
              Buy now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-full h-11 rounded-lg bg-[#CFD1C0] flex items-center justify-center"
            style={{ marginTop: normalize(22, 'height') }}
            onPress={() => emptyCart()}
          >
            <Text
              className="text-[#607750] font-light leading-[1.31vh] tracking-tight"
              style={{ fontSize: normalize(20) }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProductDetailScreen
