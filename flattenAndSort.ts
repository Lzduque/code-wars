function flattenAndSort(inputArray: number[][]): number[] {
  // go through the main array, and concatenate every array into result array, then sort
  let result = [];
  for (let i = 0 ; i < inputArray.length ; i++) {
    result = result.concat(inputArray[i]);
  };
  return result.sort((a, b) => a - b);
}

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
