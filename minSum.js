function minSum(arr) {
  // sort the array
  // select the first and the last number from the array and multiply them
  // add the result to a result
  // keep doing that until it finishes
  // return result
  let sortedArr = arr.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0 ; i <= sortedArr.length / 2 - 1; i ++) {
    result += (sortedArr[i] * sortedArr[sortedArr.length - i - 1])
  }
  return result
}

console.log(minSum([5, 4, 2, 3]), 22);
console.log(minSum([12, 6, 10, 26, 3, 24]), 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);
