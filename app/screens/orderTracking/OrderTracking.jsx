import { useState } from 'react'
import { Text, SafeAreaView, Dimensions, View } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { HeadTitle } from '../../components'
import { OrderHistory, PendingOrder } from './components'

const renderScene = SceneMap({
  pending_order: PendingOrder,
  order_history: OrderHistory,
})

const OrderTracking = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'pending_order', title: 'Pending order' },
    { key: 'order_history', title: 'Order history' },
  ])
  const { width } = Dimensions.get('window')
  const SPACING = (width * 0.12) / 2

  return (
    <SafeAreaView className="flex-1 bg-white w-full">
      <View className="w-full" style={{ paddingHorizontal: SPACING }}>
        <HeadTitle title="Order tracking" />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: 'white' }}
            renderLabel={({ route }) => (
              <Text style={{ color: 'black' }}>{route.title}</Text>
            )}
            indicatorStyle={{ backgroundColor: '#000' }}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default OrderTracking
