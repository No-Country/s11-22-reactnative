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
import ProductInfo from './components/ProductInfo'
import { cartStore } from '../../store'
import DATA from '../../utils/fakeData'

const ProductDetailScreen = ({ route, navigation }) => {
  const SCREEN_HEIGHT = Dimensions.get('window').height
  const SCREEN_WIDTH = Dimensions.get('window').width
  const SPACING = (SCREEN_WIDTH * 0.12) / 2
  const { itemId } = route.params
  const [product, setProduct] = useState({})
  const addProduct = cartStore((state) => state.addToCart)
  const emptyCart = cartStore((state) => state.emptyCart)

  useEffect(() => {
    const product = DATA.find((product) => product.id === itemId)
    setProduct(product)
  }, [itemId])

  return (
    <SafeAreaView
      className="flex-1 bg-white w-full"
      style={{ paddingHorizontal: SPACING }}
    >
      <View
        className="relative self-center w-full"
        style={{
          height: SCREEN_HEIGHT / 2.5,
          marginTop: normalize(44, 'height'),
        }}
      >
        <View className="absolute top-0 left-0 w-full flex flex-row items-center justify-between z-10">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <Ionicons name="ios-cart-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: 'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
          }}
          className="object-cover w-full h-full"
        />
      </View>
      <View
        className="w-full flex flex-col"
        style={{ marginTop: normalize(22, 'height') }}
      >
        <ProductInfo product={product} />
        <TouchableOpacity
          className="w-full h-11 rounded-lg bg-[#d9d9d9] flex items-center justify-center"
          style={{ marginTop: normalize(44, 'height') }}
        >
          <Text
            className="text-black font-light leading-[1.31vh] tracking-tight"
            style={{ fontSize: normalize(20) }}
            onPress={() => addProduct(product)}
          >
            Add to cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full h-11 rounded-lg bg-[#d9d9d9] flex items-center justify-center"
          style={{ marginTop: normalize(22, 'height') }}
          onPress={() => emptyCart()}
        >
          <Text
            className="text-black font-light leading-[1.31vh] tracking-tight"
            style={{ fontSize: normalize(20) }}
          >
            Try in your place
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ProductDetailScreen
