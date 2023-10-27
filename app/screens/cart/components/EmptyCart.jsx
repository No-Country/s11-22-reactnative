import { View, Text, Image, StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'
import { HeadTitle } from '../../../components'

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <HeadTitle title="" />
      <View className="flex-1 items-center justify-center">
        <Image
          source={require('../../../../assets/empty-cart.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Your cart awaits for you!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(22, 'width'),
  },
  image: {
    width: normalize(279),
    height: normalize(220),
    objectFit: 'cover',
  },
  text: {
    fontSize: normalize(18),
    fontFamily: 'mrt-400',
    fontWeight: '400',
    marginTop: normalize(19, 'height'),
    color: '#121212',
  },
})

export default EmptyCart
