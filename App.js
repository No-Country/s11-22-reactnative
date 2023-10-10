import { NavigationContainer } from '@react-navigation/native'

import { StackNavigation } from './app/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
