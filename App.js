import { Suspense } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { StackNavigation } from './app/routes'
import { useFont } from './app/hooks'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const { isLoaded, handleOnLayout } = useFont()

  if (!isLoaded) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <GestureHandlerRootView style={{ flex: 1 }} onLayout={handleOnLayout}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Suspense>
  )
}
