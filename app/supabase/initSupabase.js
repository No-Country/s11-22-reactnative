import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_KEY } from '@env'

const url = SUPABASE_URL
const key = SUPABASE_KEY

export const supabase = createClient(url, key, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
})
