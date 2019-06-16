function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 === 0) {
    return Math.pow(Math.sqrt(sq) + 1, 2);
  }
  return -1;
}

console.log(findNextSquare(121), 144);
console.log(findNextSquare(625), 676);