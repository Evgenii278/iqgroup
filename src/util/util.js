import store from '../store'

const getKey = (day, i) => {
  const date = store.getters.getDate
  const monthNames = store.getters.getMonthNames
  let month = date.month

  if (date.previousDays > i) month--
  if (date.amountOfDays <= i) month++

  return `${day} ${monthNames[month]}, ${date.year}`
}

export {
  getKey
}
