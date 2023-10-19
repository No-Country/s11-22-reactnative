import { useEffect, useState } from 'react'
import { productStore } from '../store'
import { Alert } from 'react-native'
import { supabase } from '../supabase/initSupabase'

const useProducts = () => {
  const addProducts = productStore((state) => state.addProducts)
  const setIsLoading = productStore((state) => state.setIsLoading)
  const products = productStore((state) => state.products)
  const [popularProducts, setPopularProducts] = useState([])

  async function handleFetchProducts() {
    setIsLoading(true)
    //supabase function
    const { data, error } = await supabase.from('product').select('*')

    if (error) {
      setIsLoading(false)
      Alert.alert(error)
    }

    addProducts(data)
    setIsLoading(false)
  }

  //filter products by name
  function getProductsByName(word) {
    const filteredProducts = products?.filter((product) =>
      product?.name.toLowerCase().includes(word),
    )
    return filteredProducts
  }

  //filter products by view
  function getProductsByView(view) {
    const filteredProducts = products?.filter((product) =>
      product?.view.toLowerCase().includes(view),
    )
    return filteredProducts
  }

  //fake popular/trending products
  function getFourthProducts() {
    setPopularProducts(products?.slice(0, 4))
  }

  useEffect(() => {
    handleFetchProducts()
    getFourthProducts()
  }, [])

  return { getProductsByName, getProductsByView, popularProducts }
}

export default useProducts
