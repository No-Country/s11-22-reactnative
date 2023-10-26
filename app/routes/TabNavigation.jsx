import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import normalize from 'react-native-normalize'
import Svg, { Path } from 'react-native-svg'
import { HomeScreen, ProfileScreen } from '../screens'
import MyDrawer from './DrawerNavigation'
import { userStore } from '../store'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  const { width } = Dimensions.get('window')
  const defaultColor = '#114949'
  const user = userStore((state) => state.userInfo)

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          ...styles.container,
        },
        tabBarBackground: () => (
          <Svg
            width={`${width}`}
            height={`${normalize(62)}`}
            viewBox="0 0 393 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M153.57 10.7578C146.932 5.23424 139.113 0.59436 130.477 0.59436H1C0.447715 0.59436 0 1.04207 0 1.59436V62C0 62.5523 0.447713 63 0.999997 63H392C392.552 63 393 62.5523 393 62V1.59436C393 1.04208 392.552 0.59436 392 0.59436H261.596C252.96 0.59436 245.141 5.23424 238.503 10.7578C227.816 19.6513 212.741 25.1925 196.037 25.1925C179.332 25.1925 164.258 19.6513 153.57 10.7578Z"
              fill="#CFD1C0"
            />
          </Svg>
        ),
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={MyDrawer}
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
        name="cart"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => <Text style={styles.text}>Catalog</Text>,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-grid" size={26} color={defaultColor} />
            ) : (
              <Ionicons
                name="ios-grid-outline"
                size={26}
                color={defaultColor}
              />
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
          tabBarIcon: ({ focused }) => (
            <View style={styles.fab}>
              {focused ? (
                <Ionicons name="ios-cube-sharp" size={28} color="#fff" />
              ) : (
                <Ionicons name="ios-cube-outline" size={28} color="#fff" />
              )}
            </View>
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="cart2"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => <Text style={styles.text}>Favorites</Text>,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="heart-sharp" size={26} color={defaultColor} />
            ) : (
              <Ionicons name="heart-outline" size={26} color={defaultColor} />
            ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => <Text style={styles.text}>Profile</Text>,
          tabBarIcon: () => (
            <Image
              source={{
                uri:
                  user?.imageProfile !== ''
                    ? user?.imageProfile
                    : 'https://picsum.photos/300/300',
              }}
              style={styles.profileImage}
            />
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
    position: 'absolute',
    height: normalize(62),
    paddingBottom: normalize(10, 'height'),
    shadowColor: 'transparent',
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
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
    marginTop: normalize(-70, 'height'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: normalize(25),
    height: normalize(25),
    borderRadius: 25 / 2,
    objectFit: 'contain',
  },
})
