import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

// import { userStore } from '../../../store'
import { supabase } from '../../../supabase/initSupabase'

const useCategory = () => {
  const navigation = useNavigation()
  const [image, setImage] = useState('')

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
