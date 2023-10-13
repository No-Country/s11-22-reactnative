import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import normalize from 'react-native-normalize'
import ITEMS from '../../../utils/fakeData'

const Cards = () => {
  const navigation = useNavigation()

  return (
    <>
      {ITEMS?.map((item) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductDetailScreen', { itemId: item?.id })
          }
          className="w-full"
          key={item?.id}
        >
          <Image
            source={{
              uri: item?.productImage,
            }}
            className="w-full object-cover rounded-lg"
            style={{
              height: normalize(155),
              marginBottom: normalize(20),
            }}
          />
        </TouchableOpacity>
      ))}
    </>
  )
}

export default Cards
