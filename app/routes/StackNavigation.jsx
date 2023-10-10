import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShadowVisible: false,
      }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation
