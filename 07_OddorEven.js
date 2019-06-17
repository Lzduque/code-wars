function oddOrEven(array) {
  let sum = "";
  if (array === undefined || array.length == 0) {
    sum = 0;
  } else {
    sum = array.reduce((a, b) => a + b);
  }

  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven([0]), "even");
console.log(oddOrEven([2, 5, 34, 6]), "odd");
console.log(oddOrEven([0, -1, -5]), "even");
console.log(oddOrEven([]), "even");

