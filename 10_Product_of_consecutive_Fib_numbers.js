function productFib(prod) {
  // F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
  // F(n) * F(n+1) = prod
  let result = [];

  // find Fibonacci number
  let fibo = function (n) {
    if (n === 1) {
      return 1;
    } else if (n === 0) {
      return 0;
    }
    return fibo(n-1) + fibo(n-2);
  }

  // the proportion between two numbers
  let goldenNumber = (1 + Math.sqrt(5))/2;

  // prod = x * (x * goldenNumber)
  // prod = x^2 * goldenNumber;
  // x^2 = prod / goldenNumber;

  // the smallest number
  let x = Math.round(Math.sqrt(prod / goldenNumber));
  let isFibo = false;
  let y;

  // check if the smallest number is also a finobacci
  // change is Fibo to true and push the first result in the result array if it is
  let indexOfFibo = 0;
  while (fibo(indexOfFibo) <= x) {
    if (fibo(indexOfFibo) === x) {
      isFibo = true;
      result.push(x);
    }
    indexOfFibo++;
  }

  // if it is Fibo, look for the next number, if it is not
  if (!isFibo) {
    x = fibo(indexOfFibo);
    result.push(x);
    y = Math.round(x * goldenNumber);
  } else {
    y = Math.round(x * goldenNumber);
  }

  result.push(y);
  result.push(isFibo);
  return result;
}

console.log(productFib(4895), [55, 89, true]);
console.log(productFib(5895), [89, 144, false]);
console.log(productFib(74049690), [6765, 10946, true]);
console.log(productFib(84049690), [10946, 17711, false]);
console.log(productFib(193864606), [10946, 17711, true]);
console.log(productFib(447577), [610, 987, false]);
console.log(productFib(602070), [610, 987, true]);

console.log(productFib(360684687203767), [14930352, 24157817, false]);
console.log(productFib(360684687203767), [5702887, 9227465, false]);
