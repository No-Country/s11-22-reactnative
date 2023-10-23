/**
 * The function `productAdapter` takes an array of products and returns a new array with selected
 * properties from each product.
 */
export function productAdapter(products) {
  return products?.map((product) => {
    return {
      id: product.id,
      name: product.name,
      images: product.image,
      collection: product.collection,
      color: product.color,
      createdAt: product.created_at,
      description: product.description,
      price: product.price,
      size: product.size,
      view: product.view,
    }
  })
}
