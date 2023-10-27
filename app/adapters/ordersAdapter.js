export function orderAdapter(orders) {
  const adaptedOrder = {
    id: orders?.id,
    clientId: orders?.client_id,
    price: orders?.price,
    status: orders?.status,
    createdAt: orders?.created_at,
  }
  return adaptedOrder
}

export function orderItemsAdapter(orderItems) {
  return orderItems?.map((orderItem) => {
    return {
      id: orderItem?.id,
      orderId: orderItem?.order_id,
      productId: orderItem?.product_id,
      quantity: orderItem?.quantity,
      createdAt: orderItem?.created_at,
    }
  })
}
