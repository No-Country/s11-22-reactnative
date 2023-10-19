import { View, Text, TouchableOpacity, Image } from 'react-native'
import normalize from 'react-native-normalize'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const ROOMS = [
  {
    id: 1,
    name: 'Kitchen',
    image:
      'https://bcggaudtahrsimkejfie.supabase.co/storage/v1/object/public/images/rooms/Rectangle%2028.png?t=2023-10-19T00%3A21%3A42.561Z',
  },
  {
    id: 2,
    name: 'Bathroom',
    image:
      'https://bcggaudtahrsimkejfie.supabase.co/storage/v1/object/public/images/rooms/Rectangle%2028%20(1).png?t=2023-10-19T00%3A22%3A39.111Z',
  },
  {
    id: 3,
    name: 'Living room',
    image:
      'https://bcggaudtahrsimkejfie.supabase.co/storage/v1/object/public/images/rooms/Rectangle%2028%20(2).png?t=2023-10-19T00%3A21%3A53.334Z',
  },
  {
    id: 4,
    name: 'Bedroom',
    image:
      'https://bcggaudtahrsimkejfie.supabase.co/storage/v1/object/public/images/rooms/Rectangle%2028%20(3).png?t=2023-10-19T00%3A22%3A14.772Z',
  },
]

const RoomsCards = () => {
  const navigation = useNavigation()

  return (
    <View className="flex flex-row flex-wrap w-full items-center justify-between">
      {ROOMS?.map((item) => (
        <TouchableOpacity
          onPress={() => console.log('from room')}
          className="rounded-lg border border-[#CFD1C0] bg-primary p-[0.69vh]"
          key={item?.id}
          style={{
            width: normalize(163),
            height: normalize(220),
            marginBottom: normalize(22, 'height'),
          }}
        >
          <Image
            source={{
              uri: item?.image,
            }}
            className="w-full object-cover rounded"
            style={{
              height: normalize(175),
              marginBottom: normalize(11, 'height'),
            }}
          />
          <View className="flex flex-row w-full items-center justify-between">
            <Text
              className="leading-[1.31vh] tracking-tight"
              style={{ fontSize: normalize(14), fontFamily: 'mrt-400' }}
            >
              {item?.name}
            </Text>
            <TouchableOpacity className="z-20">
              <Ionicons name="chevron-forward" size={20} color="#114949" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default RoomsCards
