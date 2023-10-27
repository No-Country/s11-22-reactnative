export function formatDate(date) {
  const currentDate = date

  // Crear un objeto Date a partir de la cadena de fecha
  const newDate = new Date(currentDate)

  // Obtener el nombre del mes y el año
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = newDate.toLocaleDateString('en-US', options)
  return formattedDate
}
