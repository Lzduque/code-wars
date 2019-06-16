var isSquare = function(n){
  if (Math.sqrt(n) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isSquare(-1), false);
console.log(isSquare(0), true);
console.log(isSquare(1), true);
console.log(isSquare(2), false);
console.log(isSquare(3), false);
console.log(isSquare(4), true);

// smart
// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }
