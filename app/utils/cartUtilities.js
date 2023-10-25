/* This function calculates the total amount of all products in a shopping cart. 
It takes in an array of products and uses the reduce method to iterate over each product, 
multiplying the product's quantity by its price and adding it to an accumulator. 
The final result is returned as a string in the format of "$X USD */
export function totalAmount(products) {
  const totalAmount = products.reduce(
    (acc, product) => acc + product.productQuantity * product.price,
    0,
  )
  return `$${totalAmount} USD`
}

/* This function takes in an array of products and calculates the total quantity of all the products combined. 
It uses the  `reduce`  method to iterate over each product in the array and accumulate the quantity value. 
The initial value of the accumulator is set to 0. The function then returns the total quantity. */
export function totalQuantity(products) {
  const totalQuantity = products.reduce(
    (acc, product) => acc + product.productQuantity,
    0,
  )
  return totalQuantity
}
