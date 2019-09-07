function evenNumbers(array, n) {
  // iterate through the array from backwards
  // check if the number its even
  // check if there is already enough numbers in the result array
  let result = [];
  for (let i = array.length - 1 ; i >= 0 ; i --) {
    if (array[i] % 2 == 0 && result.length < n) {
      result.push(array[i])
    }
  }
  return result.reverse()
}


console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);


// clever
// return array.filter(x => x % 2 === 0).slice(-n);
