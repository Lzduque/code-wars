function array_diff(a, b) {
  let result = a.filter(element => !b.includes(element));
  return result;
}

console.log(array_diff([], [4,5]), [], "a was [], b was [4,5]");
console.log(array_diff([3,4], [3]), [4], "a was [3,4], b was [3]");