import { Suspense } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { StackNavigation } from './app/routes'

export default function App() {
  return (
    <Suspense fallback={null}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Suspense>
  )
}
