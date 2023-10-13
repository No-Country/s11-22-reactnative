import { Image } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import normalize from 'react-native-normalize'
import { BANNER_IMAGES } from '../../../constants'

const CarouselScreen = () => {
  return (
    <Carousel
      loop
      width={normalize(338)}
      height={normalize(155)}
      autoPlay={true}
      autoPlayInterval={5000}
      data={BANNER_IMAGES}
      scrollAnimationDuration={3000}
      renderItem={({ item }) => (
        <Image
          source={{
            uri: item.image?.uri,
          }}
          className="w-full h-full object-cover rounded-lg"
        />
      )}
    />
  )
}

export default CarouselScreen
