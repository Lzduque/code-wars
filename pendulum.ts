function pendulum(values: number[]): number[] {
  values.sort((a, b) => a - b)
  let indexOdd = [];
  let indexEven = [];
  for (let i = 0 ; i < values.length ; i ++) {
    if (i % 2 === 0) {
      indexEven.push(values[i]);
    } else {
      indexOdd.push(values[i]);
    }
  }
  return indexEven.sort((a, b) => b - a).concat(indexOdd)
};

console.log(pendulum([4, 10, 9]), [10, 4, 9]);
// original
// 4   10  9
// sorted
// 4   9   10
// index sorted
// 0   1   2
// result
// 10  4   9
// index result
// 2   0   1


console.log(pendulum([8, 7, 10, 3]), [8, 3, 7, 10]);
// original
// 8   7   10  3
// sorted
// 3   7   8   10
// index sorted
// 0   1   2   3
// result
// 8   3   7   10
// index result
// 2   0   1   3

console.log(pendulum([6, 6, 8, 5, 10]), [10, 6, 5, 6, 8]);
console.log(pendulum([9, 4, 6, 4, 10, 5]), [9, 5, 4, 4, 6, 10]);
console.log(pendulum([4, 6, 8, 7, 5]), [8, 6, 4, 5, 7]);
console.log(pendulum([10, 5, 6, 10]), [10, 5, 6, 10]);
console.log(pendulum([11, 12, 12]), [12, 11, 12]);
