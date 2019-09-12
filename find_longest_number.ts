function findLongest(array: number[]): number {
  //reducing!!!! array to find the number with more digits
  // find out how to compare number o digits in a number!
  return array.reduce((acc, b) => {
    return acc.toString().length >= b.toString().length ? acc : b
  })
}

console.log(findLongest([1, 10, 100]), 100);
console.log(findLongest([9000, 8, 800]), 9000);
console.log(findLongest([8, 900, 500]), 900);
