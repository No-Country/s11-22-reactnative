import { useEffect, useState } from 'react'
import { productStore } from '../store'
import DATA from '../utils/fakeData'

const useProducts = () => {
  const addProducts = productStore((state) => state.addProducts)
  const setIsLoading = productStore((state) => state.setIsLoading)
  const products = productStore((state) => state.products)
  const [popularProducts, setPopularProducts] = useState([])

  function handleFetchProducts() {
    setIsLoading(true)
    //supabase function

    addProducts(DATA) //ToDo: change DATA for supabase data
    setIsLoading(false)
  }

  //filter products by name
  function getProductsByName(word) {
    const filteredProducts = products?.filter((product) =>
      product?.name.toLowerCase().includes(word),
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

  return { getProductsByName, popularProducts }
}

export default useProducts
