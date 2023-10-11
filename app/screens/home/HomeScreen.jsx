import { View, Text, SafeAreaView, Image } from 'react-native'
import normalize from 'react-native-normalize'
import Svg, { Path } from 'react-native-svg'
import { SearchBox } from '../../components'
import { Cards, Categories } from './components'
import { userStore } from '../../store'

const ITEMS = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
]

const HomeScreen = () => {
  const user = userStore((state) => state.userInfo)

  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <View
        className="w-full flex-row justify-between items-center"
        style={{
          marginTop: normalize(44),
          paddingHorizontal: normalize(22),
        }}
      >
        <SearchBox width={278} />
        <Svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M16.876 29.3153H32.9524C33.6016 29.3153 34.1954 28.8043 34.1954 28.0723C34.1954 27.3541 33.6016 26.8431 32.9524 26.8431H17.1936C16.5307 26.8431 16.1163 26.3873 16.0197 25.6829L15.8125 24.2465H33.0629C35.1761 24.2465 36.2948 22.9621 36.5986 20.8628L37.6345 13.9433C37.6621 13.7637 37.6897 13.5289 37.6897 13.377C37.6897 12.5621 37.1235 12.0097 36.1705 12.0097H14.0308L13.8237 10.518C13.6441 9.31644 13.1607 8.70874 11.6276 8.70874H6.89034C6.19977 8.70874 5.59207 9.31644 5.59207 10.0208C5.59207 10.739 6.19977 11.3467 6.89034 11.3467H11.2133L13.3541 25.9592C13.6579 28.0447 14.7628 29.3153 16.876 29.3153ZM34.817 14.4819L33.9468 20.6142C33.8364 21.3185 33.4634 21.7605 32.7867 21.7605L15.4534 21.7743L14.3899 14.4819H34.817ZM18.0085 36.2486C19.3482 36.2486 20.4255 35.1714 20.4255 33.8316C20.4255 32.4919 19.3482 31.4147 18.0085 31.4147C16.6688 31.4147 15.5915 32.4919 15.5915 33.8316C15.5915 35.1714 16.6688 36.2486 18.0085 36.2486ZM30.7702 36.2486C32.1099 36.2486 33.1734 35.1714 33.1734 33.8316C33.1734 32.4919 32.1099 31.4147 30.7702 31.4147C29.4305 31.4147 28.3394 32.4919 28.3394 33.8316C28.3394 35.1714 29.4305 36.2486 30.7702 36.2486Z"
            fill="#1C1C1E"
          />
        </Svg>
      </View>
      <View
        className="w-full"
        style={{
          paddingHorizontal: normalize(22),
          marginTop: normalize(44),
        }}
      >
        <Image
          source={{
            uri: 'https://www.todohostingweb.com/wp-content/uploads/2013/03/imagenes-l%C3%ADbres-de-derechos-de-autor_min.jpg',
          }}
          className="w-full object-cover rounded-lg"
          style={{
            height: normalize(155),
          }}
        />
      </View>
      <View className="w-full" style={{ marginTop: normalize(44) }}>
        <Categories ITEMS={ITEMS} />
      </View>
      <View
        className="w-full items-center flex-1"
        style={{ marginTop: normalize(21), paddingHorizontal: normalize(22) }}
      >
        <Text
          className="text-black font-light leading-5 tracking-tight"
          style={{ fontSize: normalize(16), marginBottom: normalize(33) }}
        >
          Product categories
        </Text>
        <Cards ITEMS={ITEMS} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
