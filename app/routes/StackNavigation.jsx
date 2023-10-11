import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  LoginScreen,
  HomeScreen,
  SearchScreen,
  SignUpScreen,
  ProductDetailScreen,
} from '../screens'

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
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation
