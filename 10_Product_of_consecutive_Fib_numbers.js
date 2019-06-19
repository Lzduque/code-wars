function productFib(prod) {
  // F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
  // F(n) * F(n+1) = prod
  let result = [];

  let fibo = function (n) {
    if (n === 1) {
      return 1;
    } else if (n === 0) {
      return 0;
    }
    return fibo(n-1) + fibo(n-2);
  }

  return result;
}

console.log(productFib(4895), [55, 89, true]);
console.log(productFib(5895), [89, 144, false]);
console.log(productFib(74049690), [6765, 10946, true]);
console.log(productFib(84049690), [10946, 17711, false]);
console.log(productFib(193864606), [10946, 17711, true]);
console.log(productFib(447577), [610, 987, false]);
console.log(productFib(602070), [610, 987, true]);

// console.log(fibo(0));
// console.log(fibo(1));
// console.log(fibo(2));
// console.log(fibo(3));
// console.log(fibo(4));