function disariumNumber(n: number) {
  // transform the number in a string, split the number and transform all of them back into numbers
  // reduce the array to elevate each number to its index + 1 and sum it up
  // if it is...
  let arr: number[] = n
                      .toString()
                      .split("")
                      .map((number) => Number(number));
  let number: number = arr.reduce((acc, number: number, index: number) => {
    return acc + Math.pow(number, index + 1)
  }, 0)
  return number === n ? "Disarium !!" : "Not !!"
}

console.log(disariumNumber(89), "Disarium !!");
console.log(disariumNumber(564), "Not !!");
console.log(disariumNumber(1024), "Not !!");
console.log(disariumNumber(135), "Disarium !!");
console.log(disariumNumber(136586), "Not !!");
