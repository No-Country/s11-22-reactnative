import { Alert } from 'react-native'
import { cartStore, ordersStore, userStore } from '../store'
import { supabase } from '../supabase/initSupabase'
import { totalAmount } from '../utils'
import { orderAdapter, orderItemsAdapter } from '../adapters'

const useOrders = () => {
  const user = userStore((state) => state.userInfo)
  const products = cartStore((state) => state.cart.products)
  const emptyCart = cartStore((state) => state.emptyCart)
  const setSuccessfullyFetchOrder = ordersStore(
    (state) => state.setSuccessfullyFetchOrder,
  )
  const addNewOrder = ordersStore((state) => state.addNewOrder)

  // Function to create an order
  async function handleCreateOrder() {
    if (products.length === 0)
      return Alert.alert('There are no products in the cart!')

    const totalPrice = totalAmount(products)
    let orderId = ''

    try {
      /**
       * Code to use the upsert function in the DB 'orders' table.
       * The code selects the data of the order items, updates them if they already exist, or inserts them if they are new.
       * After the operation, the updated or inserted data is selected.
       */
      const { data, error: orderError } = await supabase
        .from('orders')
        .upsert({
          client_id: user.id,
          price: totalPrice,
          status: 'Pending',
        })
        .select()

      if (orderError) {
        throw orderError
      }

      orderId = data[0].id

      /**
       * Este código genera un arreglo de objetos que representa los elementos de una orden de compra.
       * Cada objeto contiene la información del ID de la orden, el ID del producto y la cantidad del producto.
       */
      const orderItems = products?.map((product) => {
        return {
          order_id: orderId,
          product_id: product.id,
          quantity: product.productQuantity,
        }
      })

      if (orderItemError) {
        throw orderItemError
      }

      /**
       * Code to use the upsert function in the DB 'order_items' table.
       * The code selects the data of the order items, updates them if they already exist, or inserts them if they are new.
       * After the operation, the updated or inserted data is selected.
       */
      const { data: orderItem, error: orderItemError } = await supabase
        .from('order_items')
        .upsert(orderItems)
        .select()

      const adapterOrder = orderAdapter(data[0])
      const orderItemAdapter = orderItemsAdapter(orderItem)
      const currentOrder = getCurrentOrder(adapterOrder, orderItemAdapter)

      addNewOrder(currentOrder)
      setSuccessfullyFetchOrder(true)
      emptyCart()
    } catch (error) {
      console.error('Error en la transacción:', error)
      //if error on orderItemError, delete last order inserted
      await supabase.from('orders').delete().eq('id', orderId)
    }
  }

  function getCurrentOrder(order, orderItems) {
    const productFound = orderItems?.map((item) => {
      const product = products.find((product) => product.id === item.productId)

      return item, product
    })

    const currentOrder = {
      id: order?.id,
      clientId: order?.clientId,
      clientName: user?.userName,
      price: order?.price,
      status: order?.status,
      createdAt: order?.createdAt,
      products: productFound,
    }

    return currentOrder
  }

  return {
    handleCreateOrder,
  }
}

export default useOrders
