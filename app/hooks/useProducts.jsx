import { useEffect } from 'react'
import { productStore } from '../store'
import { Alert } from 'react-native'
import { supabase } from '../supabase/initSupabase'

const useProducts = () => {
  const { addProducts, setIsLoading, products } = productStore((state) => state)

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

  useEffect(() => {
    handleFetchProducts()
  }, [])

  return { getProductsByName, getProductsByView }
}

export default useProducts
