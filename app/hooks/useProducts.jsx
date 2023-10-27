import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Fuse from 'fuse.js'
import { cartStore, productStore } from '../store'
import { supabase } from '../supabase/initSupabase'
import { productAdapter } from '../adapters/productAdapter'

const useProducts = () => {
  const addProducts = productStore((state) => state.addProducts)
  const setSearchedProducts = productStore((state) => state.setSearchedProducts)
  const products = productStore((state) => state.products)
  const setIsLoading = productStore((state) => state.setIsLoading)
  const addToCart = cartStore((state) => state.addToCart)
  const [search, setSearch] = useState('')
  const [product, setProduct] = useState([])
  const { navigate } = useNavigation()

  async function handleFetchProducts() {
    setIsLoading(true)
    //supabase function
    const { data, error } = await supabase.from('product').select('*')

    if (error) {
      setIsLoading(false)
      Alert.alert(error)
    }

    addProducts(productAdapter(data))
    setIsLoading(false)
  }

  //filter products by name
  function getProductsByName() {
    setIsLoading(true)

    const options = {
      keys: ['name'],
      findAllMatches: true,
      threshold: 0.6,
    }

    /* used for fuzzy searching. It takes two arguments: the `products` array, which
    is the data to be searched, and the `options` object, which specifies the search configuration. */
    const fuse = new Fuse(products, options)
    const result = fuse.search(search)

    if (result.length === 0) {
      setSearchedProducts([])
      setIsLoading(false)
    }
    const filteredProducts = result?.map((item) => item.item)

    setSearch('')
    navigate('SearchResultsScreen')
    setSearchedProducts(filteredProducts)
    setIsLoading(false)
  }

  //filter products by view
  function getProductsByView(view) {
    const filteredProducts = products?.filter((product) =>
      product?.view.toLowerCase().includes(view),
    )
    return filteredProducts
  }

  //filter product by id
  function getProductById(id) {
    const filteredProduct = products?.filter((product) => product?.id === id)
    setProduct(filteredProduct)
  }

  useEffect(() => {
    if (products.length === 0) handleFetchProducts()
  }, [products])

  // function to buy product and navigate to payment screen
  function handleBuyProduct() {
    addToCart(product[0])
    navigate('PaymentScreen')
  }

  return {
    getProductsByView,
    search,
    setSearch,
    getProductsByName,
    getProductById,
    product,
    handleBuyProduct,
  }
}

export default useProducts
