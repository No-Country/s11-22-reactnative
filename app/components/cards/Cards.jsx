import { ScrollView } from 'react-native'
import Card from '../card/Card'

const Cards = ({ products }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {products?.map((item, index) => (
        <Card
          key={item?.id}
          item={item}
          index={index}
          marginRight={22}
          leftSpace={true}
        />
      ))}
    </ScrollView>
  )
}

export default Cards
