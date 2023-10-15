import { useState, useEffect } from 'react'
import { Alert } from 'react-native'

import { supabase } from '../../../supabase/initSupabase'

const useCategory = () => {
  const [image, setImage] = useState([])

  /* this function is responsible for getting the data from the "category" table of the database and 
  assigning it to the setImage variable, but it also handles any errors that may occur during the co-operation */
  async function fetchCategoryImage() {
    const { data, error } = await supabase
      .from('category')
      .select('id, name, image')

    if (error) return Alert.alert(error.message)

    setImage(data)
  }

  useEffect(() => {
    fetchCategoryImage()
  }, [])

  return { image }
}

export default useCategory
