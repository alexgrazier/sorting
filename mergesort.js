function mergeSort(array) {
  if (array.length === 1) {return array}
  split(array)
}


function split(wholeArray) {
  const middleIndex = Math.ceil(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, middleIndex);
  const secondHalf = wholeArray.slice(middleIndex);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergedArray = [];
  //Could assign lowestnum here to -Infinity, then reassign within if/else blocks
  while (arr1.length || arr2.length) {
    if (arr1.length < 1) {
      mergedArray = [...mergedArray, ...arr2];
      break;
    }
    if (arr2.length < 1) {
      mergedArray = [...mergedArray, ...arr1];
      break;
    }
    if (arr1[0] < arr2[0]) {
      let lowestNum = arr1.shift();
      mergedArray.push(lowestNum);
    } else if (arr1[0] >= arr2[0]) {
      let lowestNum = arr2.shift();
      mergedArray.push(lowestNum);
    }
  }
  return mergedArray;
}
