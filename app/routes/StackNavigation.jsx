import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  LoginScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  SearchScreen,
  ProductDetailScreen,
  PaymentScreen,
  OrderTracking,
  SearchResultsScreen,
  CartScreen,
} from '../screens'
import TabNavigation from './TabNavigation'

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
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigation}
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
      <Stack.Screen
        name="ProfileScreen"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderTracking"
        component={OrderTracking}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResultsScreen"
        component={SearchResultsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation
