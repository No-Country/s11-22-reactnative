import { createDrawerNavigator } from '@react-navigation/drawer'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { HomeScreen, ProfileScreen } from '../screens'

const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#E5E0D8',
          width: normalize(299),
          paddingTop: normalize(51, 'height'),
        },
        drawerActiveBackgroundColor: '#CFD1C0',
        drawerLabelStyle: {
          fontFamily: 'mrt-400',
          fontSize: normalize(16),
          color: '#121212',
        },
        drawerIcon: () => (
          <Ionicons name="chevron-forward" size={22} color="#114949" />
        ),
      }}
      defaultStatus="closed"
    >
      <Drawer.Screen name="Notifications" component={HomeScreen} />
      <Drawer.Screen name="Orders" component={ProfileScreen} />
      <Drawer.Screen name="Special offers" component={ProfileScreen} />
      <Drawer.Screen name="History" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

export default MyDrawer
