import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

const useFont = () => {
  const [isLoaded] = useFonts({
    'mrt-200': require('../../assets/fonts/Montserrat/Montserrat-ExtraLight.ttf'),
    'mrt-300': require('../../assets/fonts/Montserrat/Montserrat-Light.ttf'),
    'mrt-400': require('../../assets/fonts/Montserrat/Montserrat-Regular.ttf'), // eslint-disable-lin
    'mrt-500': require('../../assets/fonts/Montserrat/Montserrat-Medium.ttf'),
    'mrt-600': require('../../assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
    'mrt-700': require('../../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'mrt-800': require('../../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf'),
  })

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync() //hide the splashscreen
    }
  }, [isLoaded])

  return { isLoaded, handleOnLayout }
}

export default useFont
