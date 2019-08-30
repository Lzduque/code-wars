function maxMultiple(divisor, bound) {
  // your code here
  // bound divide by divisor
  return Math.floor(bound/divisor) * divisor
}

console.log(maxMultiple(2, 7), 6);
console.log(maxMultiple(3, 10), 9);
console.log(maxMultiple(7, 17), 14);
console.log(maxMultiple(10, 50), 50);
console.log(maxMultiple(37, 200), 185);
console.log(maxMultiple(7, 100), 98);
console.log(maxMultiple(37, 100), 74);
console.log(maxMultiple(1, 13), 13);
console.log(maxMultiple(1, 1), 1);
console.log(maxMultiple(4, 1), 0);