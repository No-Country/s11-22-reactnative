import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'

const DATA = [
  {
    id: 1,
    productName: 'Product 1',
    productType: 'product Type',
    productPrice: '$100 USD',
    productImage:
      'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
  },
  {
    id: 2,
    productName: 'Product 1',
    productType: 'product Type',
    productPrice: '$100 USD',
    productImage:
      'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
  },
  {
    id: 3,
    productName: 'Product 1',
    productType: 'product Type',
    productPrice: '$100 USD',
    productImage:
      'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
  },
  {
    id: 4,
    productName: 'Product 1',
    productType: 'product Type',
    productPrice: '$100 USD',
    productImage:
      'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
  },
]

const CartItems = () => {
  return (
    <View className="w-full" style={{ marginTop: normalize(31, 'height') }}>
      {DATA?.map((item) => (
        <View
          className="flex flex-row w-full items-start justify-start gap-5"
          style={{
            marginBottom: normalize(32, 'height'),
            height: normalize(121),
          }}
          key={item?.id}
        >
          <Image
            source={{ uri: item?.productImage }}
            className="rounded-lg object-cover h-full"
            style={{ width: normalize(126) }}
          />
          <View
            className="flex flex-col justify-between h-full"
            style={{ width: normalize(195) }}
          >
            <View>
              <Text>{item?.productName}</Text>
              <Text>{item?.productType}</Text>
            </View>
            <View className="flex flex-row w-full items-center justify-between">
              <Text>{item?.productPrice}</Text>
              <View className="flex flex-row items-center justify-center gap-3">
                <TouchableOpacity>
                  <Ionicons name="remove-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text
                  style={{ fontSize: normalize(16) }}
                  className="text-black font-light leading-[1.31vh] tracking-tight"
                >
                  3
                </Text>
                <TouchableOpacity>
                  <Ionicons name="md-add-outline" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

export default CartItems
