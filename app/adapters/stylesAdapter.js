export function stylesAdapter(styles) {
  return styles?.map((style) => {
    return {
      id: style.id,
      name: style.name,
      image: style.image,
    }
  })
}
