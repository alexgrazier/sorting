function swap(num1, num2) {
  const swappedArray = [num2, num1]
  return swappedArray;
}

function bubbleSort(array) {
  if (array.length <= 1) return array;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[i] > array[j]) {
        const swappedArray = swap(array[i], array[j])
        array.splice(i, 2, ...swappedArray)
      }
    }

  }
  return array;
}


