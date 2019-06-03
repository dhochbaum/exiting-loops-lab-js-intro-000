function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
  if (array[i] === stopValue) {
    break
  }
   /*array.forEach((element, index, array) => {
    if(element===stopValue) {
      break
    }
    array[index] = changeValue
  }); */
  return array
}
