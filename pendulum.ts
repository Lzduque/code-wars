function pendulum(values: number[]): number[] {
  // first sort in increading order, so i can take one value at a time, in the right order
  // if the length is odd, the first number is the largest,
  // if the length is even, the largest number is the last
  let result: number[] = []
  values.sort((a, b) => a - b)
  if values.length % 2 === 0 {
    for (let i = 0 ; i <= Math.floor(values.length / 2) ; i++ ) {
      let j = values[length - 1 - (2 * i)];
      result.push(j);
    }
    for (let i = 0 ; i <= values.length - result.length ; i++ ) {
      let j = values[i + 2 + (2 * i)];
      result.push(j);
    }
  };
  // if values.length % 2 !== 0 {
  //   for (let i = 0 ; i <= Math.floor(values.length / 2) ; i++ ) {
  //     let j = values[length - 1 - (2 * i)];
  //     result.push(j);
  //   }
  //   for (let i = 0 ; i <= values.length - result.length ; i++ ) {
  //     let j = values[i + 2 + (2 * i)];
  //     result.push(j);
  //   }
  }

  return result
}

console.log(pendulum([4, 10, 9]), [10, 4, 9]);
//    length - 1  length - 1 - 2  length - 1 - 2 until === 1  1 + 2  1 + 2 + 2  1 + 2 + 2 + 2 until === length
//    3  1  2  4
// 5  3  1  2  4

console.log(pendulum([8, 7, 10, 3]), [8, 3, 7, 10]);
console.log(pendulum([6, 6, 8, 5, 10]), [10, 6, 5, 6, 8]);
console.log(pendulum([9, 4, 6, 4, 10, 5]), [9, 5, 4, 4, 6, 10]);
console.log(pendulum([4, 6, 8, 7, 5]), [8, 6, 4, 5, 7]);
console.log(pendulum([10, 5, 6, 10]), [10, 5, 6, 10]);
console.log(pendulum([11, 12, 12]), [12, 11, 12]);
