import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import normalize from 'react-native-normalize'
import { CartScreen, HomeScreen } from '../screens'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          ...styles.container,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => <Text style={styles.text}>Home</Text>,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-home" size={26} color="#114949" />
            ) : (
              <Ionicons name="ios-home-outline" size={26} color="#114949" />
            ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="home2"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View style={styles.fab}>
              <Ionicons name="ios-scan" size={24} color="white" />
            </View>
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => <Text style={styles.text}>Cart</Text>,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-cart" size={26} color="#114949" />
            ) : (
              <Ionicons name="ios-cart-outline" size={26} color="#114949" />
            ),
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CFD1C0',
    height: normalize(62),
    paddingBottom: normalize(10, 'height'),
  },
  text: {
    fontFamily: 'mrt-400',
    fontSize: normalize(12),
    color: '#114949',
  },
  fab: {
    backgroundColor: '#809671',
    width: normalize(55),
    height: normalize(55),
    borderRadius: 55 / 2,
    marginTop: normalize(-60, 'height'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
