function seven(m) {
  // separate the number into last digit and rest
  // math operation
  // check the result if it has only 2 digits
  // add one in the count
  // if it doesnt, repeat from the beginnning
  // if it does, put in the resul array the number and the count

  function recursion(num, count) {
    if (num < 100) {
      return [num, count]
    } else {
      let y = num % 10;
      let x = (num - y)/10;
      return recursion(x - (2 * y), count + 1);
    }
  }
  return recursion(m, 0);
}

console.log(seven(477557101), [28, 7]);
console.log(seven(1603), [7, 2]);
console.log(seven(371), [35, 1]);

