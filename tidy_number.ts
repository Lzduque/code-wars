function tidyNumber(num: number): boolean {
  // transform number in an array
  // compare this array to a sorted array
  // if it is equal is tidy, if not, return false
  let array: number[] = num.toString().split("").map((string) => Number(string));
  return array.join("") === array.sort((a, b) => a - b).join("")
}

console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(9672), false);
console.log(tidyNumber(2789), true);
console.log(tidyNumber(2335), true);
