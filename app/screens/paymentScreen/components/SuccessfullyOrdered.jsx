import { View, Text, Modal, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
const SuccessfullyOrdered = ({ openModal, setOpenModal }) => {
  const { navigate } = useNavigation()

  function navigateScreens(id) {
    if (id === 'HomeScreen') {
      navigate('HomeScreen')
      setOpenModal(!openModal)
    } else if (id === 'OrderTracking') {
      navigate('OrderTracking')
      setOpenModal(!openModal)
    }
  }

  return (
    <Modal
      visible={openModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        ;() => setOpenModal(!openModal)
      }}
    >
      <View
        className="flex-1 bg-primary items-center justify-center"
        style={{ paddingHorizontal: normalize(22, 'width') }}
      >
        <View
          className="bg-tertiary border border-primary rounded-lg w-full px-3 pb-3"
          style={{ height: normalize(177) }}
        >
          <View
            className="rounded-full bg-[#809671] items-center justify-center self-center"
            style={{
              width: normalize(100),
              height: normalize(100),
              marginTop: normalize(-45, 'height'),
            }}
          >
            <Ionicons name="checkmark" size={60} color="#F2F4DA" />
          </View>
          <Text
            className="text-black font-medium leading-[1.31vh] tracking-tight text-center"
            style={{
              fontSize: normalize(14),
              fontFamily: 'mrt-500',
              marginTop: normalize(13, 'height'),
            }}
          >
            Thank You for Your Order!
          </Text>
          <Text
            className="text-black font-normal leading-[1.31vh] tracking-tight text-center"
            style={{
              fontSize: normalize(11),
              fontFamily: 'mrt-400',
              marginTop: normalize(7, 'height'),
            }}
          >
            Success! Your order has been processed and confirmed
          </Text>
          <View
            className="flex-row items-center justify-between w-full"
            style={{ marginTop: normalize(22, 'height') }}
          >
            <TouchableOpacity
              style={{ width: normalize(153), height: normalize(33) }}
              className="rounded bg-secondary items-center justify-center"
              onPress={() => navigateScreens('HomeScreen')}
            >
              <Text
                style={{ fontFamily: 'mrt-400', fontSize: normalize(12) }}
                className="font-normal text-[#607750] leading-6 tracking-wide"
              >
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: normalize(153), height: normalize(33) }}
              className="rounded bg-[#809671] items-center justify-center"
              onPress={() => navigateScreens('OrderTracking')}
            >
              <Text
                style={{ fontFamily: 'mrt-400', fontSize: normalize(12) }}
                className="font-normal text-white leading-6 tracking-wide"
              >
                Order tracking
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default SuccessfullyOrdered
