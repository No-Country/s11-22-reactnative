import { Alert } from 'react-native'
import { cartStore } from '../../../store'

const useCart = () => {
  const emptyCart = cartStore((state) => state.emptyCart)
  const removeCartItem = cartStore((state) => state.removeCartItem)

  //function to clear cart
  function clearCart() {
    Alert.alert('Clear cart', 'Do you want to clean up the cart?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          emptyCart()
        },
      },
    ])
  }

  //function to remove product from cart
  function removeProductFromCart(productId) {
    Alert.alert(
      'Remove product item',
      'Do you want to clean up the selected product?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => removeCartItem(productId),
        },
      ],
    )
  }

  return {
    clearCart,
    removeProductFromCart,
  }
}

export default useCart
