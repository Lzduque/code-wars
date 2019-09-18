function ihatelines(arr: number[], index: number): number {
  // go through the array and compare all of them with the number of tickets alex has to buy
  // limit adding them up
  // [2, 6, 3, 4, 5]
  // [2, 3, 3, 2, 2] = 12
  // [2, 1, 1, 1, 1]
  function reducer(acc, cv) {
    if (cv >= arr[index]) {
      return acc + arr[index] -1
    } else {
      return acc + cv
    }
  }
  return arr.reduce(reducer)
}

console.log(ihatelines([2, 6, 3, 4, 5], 2));
// console.log(ihatelines([2, 6, 3, 4, 5], 2));
// console.log(ihatelines([6,6,7, ...[...Array(10000).map(x => 6)]], 2));