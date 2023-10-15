/**
 * Adapt the categories array by returning a new array of adapted categories.
 * Each adapted category object contains only the `id`, `name`, and `image` properties from the original category object.
 */
export function categoryAdapter(categories) {
  return categories?.map((category) => {
    return {
      id: category.id,
      name: category.name,
      image: category.image,
    }
  })
}
