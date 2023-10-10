import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

// const url = process.env.SUPABASE_URL
// const key = process.env.SUPABASE_KEY
const url = 'https://bcggaudtahrsimkejfie.supabase.co'
const key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZ2dhdWR0YWhyc2lta2VqZmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4OTEyMDIsImV4cCI6MjAxMjQ2NzIwMn0.KVpdnuY7TDT-fAXwcX_nQSrziXSE48XYUVsZh7K-3io'

export const supabase = createClient(url, key, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
})
